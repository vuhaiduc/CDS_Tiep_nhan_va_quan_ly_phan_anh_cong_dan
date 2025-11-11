// home.js — user frontend
document.addEventListener('DOMContentLoaded', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  if (!currentUser) {
    window.location.replace('login.html');
    return;
  }
  if (currentUser.role === 'admin') {
    // nếu là admin mà vào nhầm thì điều hướng sang trang quản trị
    window.location.replace('admin_home.html');
    return;
  }

  // Elements
  const userArea = document.getElementById('userArea');
  const reportForm = document.getElementById('reportForm');
  const imgPreview = document.getElementById('imgPreview');
  const imageInput = document.getElementById('imageInput');
  const myListEl = document.getElementById('myComplaintList');
  const modal = document.getElementById('imgModal'); // image modal
  const modalImg = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');

  // response modal (popup trung tâm)
  let responseModal = document.getElementById('responseModal');
  if (!responseModal) {
    responseModal = document.createElement('div');
    responseModal.id = 'responseModal';
    responseModal.className = 'modal';
    responseModal.innerHTML = `
      <div class="modal-inner">
        <button id="responseClose" class="modal-close">✕</button>
        <div id="responseBody"></div>
        <div style="text-align:right;margin-top:12px">
          <button id="responseOk" class="btn primary">OK</button>
        </div>
      </div>`;
    document.body.appendChild(responseModal);
  }

  // ✅ Ẩn modal ngay khi trang load để tránh hiện chữ OK mặc định
  responseModal.style.display = 'none';

  const responseBody = document.getElementById('responseBody');
  const responseOk = document.getElementById('responseOk');
  const responseClose = document.getElementById('responseClose');

  userArea && (userArea.innerHTML = `<span>Xin chào, <strong>${currentUser.name}</strong></span> <button id="logoutBtn" class="btn btn-logout">Đăng xuất</button>`);

  // helper: File -> dataURL
  function fileToDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // load complaints from storage
  function loadComplaints() {
    return JSON.parse(localStorage.getItem('complaints') || '[]');
  }

  function saveComplaints(arr) {
    localStorage.setItem('complaints', JSON.stringify(arr));
  }

  // form image preview
  imageInput?.addEventListener('change', async () => {
    const f = imageInput.files && imageInput.files[0];
    if (!f) { imgPreview.innerHTML = 'Chưa chọn ảnh'; delete imgPreview.dataset.preview; return; }
    const data = await fileToDataURL(f);
    imgPreview.innerHTML = `<img src="${data}" alt="preview" />`;
    imgPreview.dataset.preview = data;
  });

  document.getElementById('clearBtn')?.addEventListener('click', () => {
    reportForm.reset();
    imgPreview.innerHTML = 'Chưa chọn ảnh';
    delete imgPreview.dataset.preview;
  });

  // submit complaint
  reportForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const category = document.getElementById('category').value;
    const title = document.getElementById('title').value.trim();
    const desc = document.getElementById('desc').value.trim();

    if (!name || !email || !title || !desc) { alert('Vui lòng nhập đầy đủ thông tin.'); return; }

    let imageData = imgPreview?.dataset?.preview || '';
    if (!imageData && imageInput.files && imageInput.files[0]) {
      imageData = await fileToDataURL(imageInput.files[0]);
    }

    const complaint = {
      id: Date.now(),
      name,
      phone,
      email,
      category,
      title,
      content: desc,
      image: imageData || null,
      status: 'pending',
      response: null,
      notified: false,
      date: new Date().toLocaleString()
    };

    const complaints = loadComplaints();
    complaints.push(complaint);
    saveComplaints(complaints);

    alert('Phản ánh của bạn đã được gửi thành công!');
    reportForm.reset();
    imgPreview.innerHTML = 'Chưa chọn ảnh';
    delete imgPreview.dataset.preview;

    renderMyComplaints();
  });

  // render user's complaint list
  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, function (m) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
    });
  }

  function renderMyComplaints() {
    const complaints = loadComplaints();
    const my = complaints.filter(c => c.email === currentUser.email).sort((a, b) => b.id - a.id);
    if (!myListEl) return;
    if (my.length === 0) { myListEl.innerHTML = '<p>Bạn chưa gửi phản ánh nào.</p>'; return; }
    myListEl.innerHTML = '';
    my.forEach(c => {
      const item = document.createElement('div');
      item.className = 'complaint-item';
      item.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center">
          <strong style="font-size:1rem">${escapeHtml(c.title)}</strong>
          <span class="complaint-status ${c.status === 'resolved' ? 'resolved' : 'pending'}">
            ${c.status === 'resolved' ? '✅ Đã xử lý' : '⏳ Đang xử lý'}
          </span>
        </div>
        <p style="margin:8px 0">${escapeHtml(c.content)}</p>
        ${c.image ? `<img src="${c.image}" class="complaint-img" style="max-width:320px;display:block;margin-top:8px;cursor:pointer" data-img="${c.image}">` : ''}
        ${c.response ? `<div class="complaint-response"><strong>Phản hồi:</strong><div>${escapeHtml(c.response)}</div></div>` : ''}
        <small>Gửi lúc: ${c.date}</small>
      `;
      myListEl.appendChild(item);
    });

    // click to open image modal
    myListEl.querySelectorAll('img[data-img]').forEach(img => {
      img.addEventListener('click', (e) => {
        const src = e.currentTarget.dataset.img;
        openImageModal(src);
      });
    });
  }

  // image modal
  function openImageModal(src) {
    if (!modal) return; modalImg.src = src; modal.style.display = 'flex';
  }
  modalClose?.addEventListener('click', () => { if (modal) modal.style.display = 'none'; });

  // sequential response modal for user (giữ nguyên tính năng popup khi có phản hồi)
  function showUserNotificationsSequentially() {
    const complaints = loadComplaints();
    const queue = complaints.filter(c =>
      c.email === currentUser.email &&
      !c.notified &&
      (c.status === 'resolved' || (c.response && c.response.trim() !== ''))
    );
    if (!queue || queue.length === 0) return;

    let idx = 0;
    function showNext() {
      if (idx >= queue.length) return;
      const itm = queue[idx];
      responseBody.innerHTML = `
        <div style="text-align:left">
          <strong>${escapeHtml(itm.title)}</strong>
          <p style="margin:.4rem 0">${escapeHtml(itm.content)}</p>
          <p style="margin:.4rem 0"><strong>Trạng thái:</strong> ${itm.status === 'resolved' ? 'Đã xử lý' : 'Đang xử lý'}</p>
          ${itm.response ? `<hr><p><strong>Phản hồi từ quản trị:</strong><br>${escapeHtml(itm.response)}</p>` : ''}
        </div>`;
      responseModal.style.display = 'flex';
      responseOk.onclick = responseClose.onclick = () => {
        responseModal.style.display = 'none';
        const all = loadComplaints();
        const j = all.findIndex(x => x.id === itm.id);
        if (j !== -1) { all[j].notified = true; saveComplaints(all); }
        idx++; setTimeout(showNext, 150);
      };
    }
    showNext();
  }

  // logout
  document.getElementById('logoutBtn')?.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.replace('login.html');
  });

  // initial render & notifications
  renderMyComplaints();
  // ⚡ giữ nguyên phần popup phản hồi (khi có phản hồi thực)
  showUserNotificationsSequentially();
});
