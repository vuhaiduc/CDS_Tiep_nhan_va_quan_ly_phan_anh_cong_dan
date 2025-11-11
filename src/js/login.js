// ✅ Xử lý đăng nhập người dùng
document.addEventListener('DOMContentLoaded', () => {
  // Chỉ kiểm tra đăng nhập user, không ảnh hưởng admin
  if (localStorage.getItem('currentUser')) {
    window.location.replace('home.html');
    return;
  }

  const form = document.getElementById('loginForm');
  const toggle = document.getElementById('togglePw');

  toggle?.addEventListener('click', () => {
    const pw = document.getElementById('password');
    pw.type = pw.type === 'password' ? 'text' : 'password';
    toggle.innerText = pw.type === 'password' ? 'Hiện' : 'Ẩn';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === btoa(password));

    if (!user) {
      alert('Email hoặc mật khẩu không đúng.');
      return;
    }

    // Lưu phiên đăng nhập user
    localStorage.setItem('currentUser', JSON.stringify({
      name: user.name,
      email: user.email
    }));

    window.location.replace('home.html');
  });
});
