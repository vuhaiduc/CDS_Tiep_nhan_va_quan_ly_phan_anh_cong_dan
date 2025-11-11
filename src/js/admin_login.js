// ✅ admin_login.js — Xử lý đăng nhập admin
document.addEventListener('DOMContentLoaded', () => {
  // 👉 Nếu đã đăng nhập rồi và KHÔNG ở trang admin_home.html thì chuyển qua admin_home.html
  const currentAdmin = localStorage.getItem('currentAdmin');
  if (currentAdmin && !window.location.pathname.endsWith('admin_home.html')) {
    window.location.replace('admin_home.html');
    return;
  }

  const form = document.getElementById('adminLoginForm');
  if (!form) return; // Nếu không có form thì không làm gì (tránh lỗi khi load nhầm file ở trang khác)

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value;

    // 📝 Tài khoản admin mặc định
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = 'admin123';

    if (email === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Lưu thông tin đăng nhập admin
      localStorage.setItem('currentAdmin', JSON.stringify({ email }));
      window.location.replace('admin_home.html');
    } else {
      alert('Sai tài khoản hoặc mật khẩu admin.');
    }
  });
});
