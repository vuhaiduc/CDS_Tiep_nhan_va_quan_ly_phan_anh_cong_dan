document.addEventListener('DOMContentLoaded', () => {
  // 🧭 Kiểm tra trạng thái đăng nhập admin
  const adminUser = localStorage.getItem('adminUser');
  if (!adminUser) {
    window.location.href = 'admin_login.html';
    return;
  }

  // 🧠 Hiển thị tên admin
  const adminInfo = JSON.parse(adminUser);
  const adminArea = document.getElementById('adminArea');
  if (adminArea) {
    adminArea.innerHTML = `
      <span>Xin chào, <b>${adminInfo.name}</b></span>
      <button id="adminLogoutBtn" class="btn small red">Đăng xuất</button>
    `;
  }

  // 🚪 Xử lý đăng xuất
  const logoutBtn = document.getElementById('adminLogoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('adminUser');
      window.location.href = 'admin_login.html';
    });
  }

  // 📝 TODO: Ở đây bạn có thể load danh sách phản ánh của user để admin xem
});
