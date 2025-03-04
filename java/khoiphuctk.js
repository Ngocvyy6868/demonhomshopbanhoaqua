function kptk() {
    const phone = document.getElementById("phone").value.trim();
  
    if (phone === "") {
      alert("Vui lòng nhập số điện thoại hoặc email đẫ đăng ký");
      return false;
    }
      
    alert("Đã gửi yêu cầu mã xác minh khôi phục tài khoản");
    return true;
  }
  