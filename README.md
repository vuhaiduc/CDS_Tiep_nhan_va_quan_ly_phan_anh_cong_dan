<h2 align="center">
    <a href="https://dainam.edu.vn/vi/khoa-cong-nghe-thong-tin">
    🎓 Faculty of Information Technology (DaiNam University)
    </a>
</h2>
<h2 align="center">
   HỆ THỐNG TIẾP NHẬN PHẢN ÁNH VÀ XỬ LÝ PHẢN ÁNH CỦA DÂN
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
Đề tài xây dựng ứng dụng **Hệ thống tiếp nhận và xử lý phản ánh của dân**.  
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
    <em>Giao diện trang người dân phản ánh</em><br/>
</p>



<p align="center">
    <img width="1920" height="1009" alt="Screenshot (345)" src="https://github.com/user-attachments/assets/1b6c366f-da11-4c2a-b1aa-751b737a8ff8" />
    <em>Giao diện trang người quản trị</em><br/>
</p>



<p align="center">
    <img width="1920" height="1013" alt="Screenshot (346)" src="https://github.com/user-attachments/assets/31576cc3-6b7f-4174-83d9-a81baa0bc83e" />
    <em>Giao diện bên người nhận Email</em><br/>
</p>

---

## 🛠️ 4. Các bước cài đặt
1. **Clone source code**  
   ```bash
   git clone https://github.com/vuhaiduc/LTM-1604-D13-Gui-email-mo-phong-SMTP-qua-Socket.git
   cd LTM-1604-D13-Gui-email-mo-phong-SMTP-qua-Socket

2. **Mở project trong IDE**
   - Dùng IntelliJ IDEA, Eclipse hoặc NetBeans.
   - Import project Java bình thường.
3. **Cấu hình JDK**
   - Chọn JDK 17 hoặc cao hơn.
4. **Chạy Server**
   - Mở file smtpserver/ServerMain.java.
   - Run as Java Application → Server lắng nghe port 2525.
   - Console sẽ hiển thị log kết nối khi có client đăng nhập hoặc gửi email.
5. **Chạy Client GUI**
   - Mở file smtpclient/ClientLoginUI.java (giao diện người gửi).
   - Mở file smtpclient/ReceiverLoginUI.java (giao diện người nhận).
   - Run as Java Application → mở giao diện người dùng.
6. **Kết nối và gửi email**
   - Nhập email người nhận để gửi.
   - Nhập Người nhận, Tiêu đề, Nội dung, File kèm theo.
   - Người nhận với tài khoản đăng nhập khác sẽ nhận Mail ngay lập tức và xem trực tiếp trong giao diện.

7. **Kiểm tra file email**
   - Vào thư mục emails/ của server.
   - Email được lưu chỉ khi receiver nhận
   - Email sẽ được lưu dưới dạng ``` bash email_yyyyMMdd_HHmmss.txt ```.
  
---

## 💬 5. Liên hệ
📧 Email: Ducbeohd1000@gmail.com

---

<div align="center">

Thực hiện bởi Vũ Hải Đức - CNTT 16-04, trường Đại học Đại Nam

Website • GitHub • Contact Me

</div>




































