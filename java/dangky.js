function register() { 

  const username = document.getElementById("user").value.trim();
  const password = document.getElementById("password").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const repassword = document.getElementById("repassword").value.trim();

  if (username === "" ) {
    alert("Vui lòng nhập tên tài khoản ");
    return false;
  }
  if (phone === "" ) {
    alert("Vui lòng nhập số điện thoại");
    return false;
  }
  if (password === "" ) {
    alert("Vui lòng nhập mật khẩu");
    return false;
  }
  if (repassword === "" ) {
    alert("Vui lòng nhập lại mật khẩu");
    return false;
  }

  if (password !== repassword) {
    alert("Mật khẩu không trùng khớp");
    return false;
  }
  alert("Đăng ký tài khoản thành công");
  return true;
}
