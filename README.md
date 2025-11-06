<h2 align="center">
    <a href="https://dainam.edu.vn/vi/khoa-cong-nghe-thong-tin">
    🎓 Faculty of Information Technology (DaiNam University)
    </a>
</h2>
<h2 align="center">
   HỆ THỐNG TIẾP NHẬN VÀ QUẢN LÝ PHẢN ÁNH CÔNG DÂN
</h2>
<div align="center">
    <p align="center">
        <img src="aiotlab_logo.png" alt="AIoTLab Logo" width="170"/>
        <img src="fitdnu_logo.png" alt="AIoTLab Logo" width="180"/>
        <img src="dnu_logo.png" alt="DaiNam University Logo" width="200"/>
    </p>

[![AIoTLab](https://img.shields.io/badge/AIoTLab-green?style=for-the-badge)](https://www.facebook.com/DNUAIoTLab)
[![Faculty of Information Technology](https://img.shields.io/badge/Faculty%20of%20Information%20Technology-blue?style=for-the-badge)](https://dainam.edu.vn/vi/khoa-cong-nghe-thong-tin)
[![DaiNam University](https://img.shields.io/badge/DaiNam%20University-orange?style=for-the-badge)](https://dainam.edu.vn)

</div>

---

## 📖 1. Giới thiệu hệ thống
Đề tài xây dựng ứng dụng **Hệ thống tiếp nhận và quản lý phản ánh công dân**.  
Hệ thống nhằm hỗ trợ **chuyển đổi số trong quản lý hành chính**, giúp người dân dễ dàng:
- Gửi phản ánh, kiến nghị
- Đính kèm hình ảnh/video minh chứng
- Theo dõi trạng thái xử lý

Cán bộ quản trị có thể:
- Tiếp nhận danh sách phản ánh
- Cập nhật tiến độ & phản hồi lại người gửi

Luồng hoạt động:

- Người dùng truy cập hệ thống.
- Gửi phản ánh, kiến nghị.
- Hệ thống tiếp nhận phản ánh và gửi đến quản trị viên.
- Cán bộ quản trị đăng nhập và tiếp nhận phản ánh.
- Cán bộ xem và xử lý phản ánh cảu người dân, sau đó thông báo lại.
- Người dân nhận thông báo và theo dõi tình hình.

---

## ⚙️ 2. Công nghệ sử dụng
Ứng dụng được phát triển bằng:
- **Ngôn ngữ lập trình và giao diện**:  
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  </a>

- **Lưu trữ dữ liệu (Client-Side)**:  
  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
    <img src="https://img.shields.io/badge/LocalStorage-000000?style=for-the-badge&logo=googlechrome&logoColor=white">
  </a>

- **Công cụ phát triển**:  
  <a href="https://code.visualstudio.com/">
    <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">
    <img src="https://img.shields.io/badge/Live%20Server-FF9800?style=for-the-badge&logo=vercel&logoColor=white">
  </a>



---

## 🖼️ 3. Một số hình ảnh giao diện hệ thống

<p align="center">
    <img width="1889" height="880" alt="Screenshot (352)" src="https://github.com/user-attachments/assets/c01ea5ac-6244-4a14-a16b-4470d7448280" />
    <em>Giao diện gửi phản ảnh</em><br/>
</p>


<p align="center">
    <img width="1895" height="888" alt="Screenshot (353)" src="https://github.com/user-attachments/assets/4582d1f9-4a8f-469d-9abf-e9aa6ae7ff6e" />
    <em>Giao diện danh sách đã phản ánh</em><br/>
</p>


<p align="center">
    <img width="1890" height="899" alt="Screenshot (354)" src="https://github.com/user-attachments/assets/40bdab1e-847a-4c04-93e1-1fc972cc8a14" />
    <em>Giao diện tin tức và thông báo</em><br/>
</p>


<p align="center">
    <img width="1889" height="873" alt="Screenshot (356)" src="https://github.com/user-attachments/assets/f1433ca0-1ac7-457c-a459-37b90b6a5e69" />
    <em>Giao diện trang quản trị</em><br/>
</p>

<p align="center">
    <img width="1897" height="914" alt="Screenshot (355)" src="https://github.com/user-attachments/assets/004b3ac9-88a2-48ee-995e-db3e7bf76c02" />
    <em>Giao diện những phản ánh đã xử lý bên trang quản trị</em><br/>
</p>

---

## 🛠️ 4. Các bước cài đặt
1. **Clone source code**  
   ```bash
   git clone https://github.com/Chuyen_doi_so_1604/<xu-ly-phan-anh-cong-dan>.git
    cd <xu-ly-phan-anh-cong-dan>

2. **Mở project trong Visual Studio Code**
   - Dùng Visual Studio Code.
   - Mở thư mục dự án trực tiếp.
3. **Khởi chạy dự án**
   - Mở file login cho trang người dùng.
   - Mở file admin_login cho trang người quản trị.
4. **Đăng ký và đăng nhập**
   - Người dùng tạo tài khoản với form đăng ký.
   - Đăng nhập để truy cập trang và gửi phản ánh.
   - Bên phía quản trị thì có tài khoản mặc định dành cho quản trị.
5. **Gửi phản ánh**
   - Người dùng nhập (tiêu đề phản ánh, nội dung chi tiết và hình ảnh kèm theo).
   - Nhấn gửi -> phản ánh sẽ được lưu trong LocalStorage và hiển thị cho trang quản trị viên.
6. **Quản trị xử lý phản ánh**
   - Quản trị viên sau khi tiếp nhận phản ánh sẽ gửi cho bên có thẩm quyền xử lý.
   - Phản ánh được xử lý hay chưa sẽ được đánh dấu kèm theo chi tiết gửi lại cho người dùng.

7. **Kiểm tra dữ liệu lưu trữ**
   - Xem các thông tin như tài khoản ``` F12 → Application → LocalStorage ```.
   - Dữ liệu được lưu (tài khoản người dùng, danh sách phản ánh).
  
---

## 💬 5. Liên hệ
📧 Email: Ducbeohd1000@gmail.com

---

<div align="center">

Thực hiện bởi Vũ Hải Đức - CNTT 16-04, trường Đại học Đại Nam

Website • GitHub • Contact Me

</div>

