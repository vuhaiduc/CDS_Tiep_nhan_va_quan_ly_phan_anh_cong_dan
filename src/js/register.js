// ✅ Xử lý đăng ký người dùng
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('currentUser')) {
    window.location.replace('home.html');
    return;
  }

  const form = document.getElementById('registerForm');
  const toggle = document.getElementById('togglePw');

  toggle?.addEventListener('click', () => {
    const pw = document.getElementById('password');
    pw.type = pw.type === 'password' ? 'text' : 'password';
    toggle.innerText = pw.type === 'password' ? 'Hiện' : 'Ẩn';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;

    if (!name || !email || !password) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }
    if (password.length < 6) {
      alert('Mật khẩu cần ít nhất 6 ký tự.');
      return;
    }
    if (password !== confirm) {
      alert('Mật khẩu xác nhận không khớp.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
      alert('Email đã được đăng ký.');
      return;
    }

    users.push({ name, email, password: btoa(password) });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Đăng ký thành công! Hãy đăng nhập để sử dụng.');
    window.location.replace('login.html');
  });
});
