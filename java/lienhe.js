document.getElementById("showgiohang").style.display="none";
function guithongtin() {
// Lấy giá trị từ các trường input
var hoTen = document.getElementById("ten_lienhe").value;
var soDienThoai = document.getElementById("number_lienhe").value;
var email = document.getElementById("email_lienhe").value;
var noiDung = document.getElementById("text_lienhe").value;

if (hoTen === "" || soDienThoai === "" || email === "" || noiDung === "") {
    alert("Vui lòng nhập đầy đủ thông tin.");
} else {
    alert("Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ phản hồi ngay khi nhận tin");
}
}