// ✅ admin_home.js — Trang quản trị phản ánh (đã chỉnh sửa)
document.addEventListener('DOMContentLoaded', () => {
  // 🧭 Kiểm tra trạng thái đăng nhập admin
  const admin = JSON.parse(localStorage.getItem('currentAdmin') || 'null');
  if (!admin) {
    window.location.href = 'admin_login.html';
    return;
  }

  const listContainer = document.getElementById('complaintList');
  const replyModal = document.getElementById('replyModal');
  const replyClose = document.getElementById('replyClose');
  const replyText = document.getElementById('replyText');
  const sendReplyBtn = document.getElementById('sendReplyBtn');
  let currentReplyId = null;

  // 🧼 Đảm bảo modal ẩn ngay từ đầu
  if (replyModal) replyModal.style.display = 'none';

  // Escape XSS
  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, m =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]
    );
  }

  // 🔄 Render danh sách phản ánh
  function render() {
    const complaints = JSON.parse(localStorage.getItem('complaints') || '[]')
      .sort((a, b) => b.id - a.id);

    if (!listContainer) return;

    if (complaints.length === 0) {
      listContainer.innerHTML = '<p>Chưa có phản ánh nào.</p>';
      return;
    }

    listContainer.innerHTML = '';
    complaints.forEach(c => {
      const div = document.createElement('div');
      div.className = 'complaint-item';
      div.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <strong style="font-size:1rem">${escapeHtml(c.title)}</strong><br>
            <small>${escapeHtml(c.name)} — ${escapeHtml(c.email)} — ${escapeHtml(c.category)}</small>
          </div>
          <div>
            <span class="status-label ${c.status === 'resolved' ? 'status-resolved' : 'status-pending'}">
              ${c.status === 'resolved' ? '✅ Đã xử lý' : '⏳ Đang chờ xử lý'}
            </span>
          </div>
        </div>
        <p style="margin:8px 0">${escapeHtml(c.content || '')}</p>
        ${c.image ? `<img src="${c.image}" style="max-width:420px;border-radius:8px;display:block;margin-top:8px">` : ''}
        <small>Gửi lúc: ${c.date}</small>
        <div style="margin-top:10px;display:flex;gap:8px">
          ${c.status !== 'resolved'
            ? `<button class="resolve-btn" data-id="${c.id}">Đánh dấu đã xử lý</button>`
            : `<button class="resolve-disabled" disabled>Đã xử lý</button>`}
          <button class="reply-btn" data-id="${c.id}">${c.response ? '✏️ Sửa phản hồi' : '📩 Gửi phản hồi'}</button>
        </div>
      `;
      listContainer.appendChild(div);
    });
  }

  // 🖱 Xử lý nút "Đánh dấu xử lý" & "Phản hồi"
  listContainer.addEventListener('click', (e) => {
    const resolveBtn = e.target.closest('.resolve-btn');
    if (resolveBtn) {
      const id = Number(resolveBtn.dataset.id);
      const complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
      const idx = complaints.findIndex(c => c.id === id);
      if (idx === -1) return;

      complaints[idx].status = 'resolved';
      complaints[idx].notified = false;
      localStorage.setItem('complaints', JSON.stringify(complaints));

      alert('✅ Đã đánh dấu phản ánh là "Đã xử lý". Bạn có thể gửi phản hồi cho người dùng.');
      render();
      return;
    }

    const replyBtn = e.target.closest('.reply-btn');
    if (replyBtn) {
      const id = Number(replyBtn.dataset.id);
      openReplyModal(id);
    }
  });

  // 📩 Modal phản hồi
  function openReplyModal(id) {
    currentReplyId = id;
    const complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
    const c = complaints.find(x => x.id === id);
    if (!replyText || !replyModal) return;
    replyText.value = c && c.response ? c.response : '';
    replyModal.style.display = 'flex';
  }

  function closeReplyModal() {
    if (replyModal) replyModal.style.display = 'none';
    currentReplyId = null;
    if (replyText) replyText.value = '';
  }

  replyClose?.addEventListener('click', closeReplyModal);
  window.addEventListener('click', (e) => {
    if (e.target === replyModal) closeReplyModal();
  });

  // 📨 Gửi phản hồi
  sendReplyBtn?.addEventListener('click', () => {
    const text = replyText?.value.trim();
    if (!text) {
      alert('Vui lòng nhập phản hồi.');
      return;
    }

    const complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
    const idx = complaints.findIndex(c => c.id === currentReplyId);
    if (idx === -1) {
      alert('Không tìm thấy phản ánh.');
      closeReplyModal();
      return;
    }

    complaints[idx].response = text;
    complaints[idx].notified = false;
    localStorage.setItem('complaints', JSON.stringify(complaints));
    closeReplyModal();
    alert('📨 Phản hồi đã được lưu.');
    render();
  });

  // 🚪 Đăng xuất admin
  document.getElementById('logoutBtn')?.addEventListener('click', () => {
    closeReplyModal();
    localStorage.removeItem('currentAdmin');
    window.location.replace('admin_login.html');
  });

  // ✅ Render ban đầu
  render();
});
