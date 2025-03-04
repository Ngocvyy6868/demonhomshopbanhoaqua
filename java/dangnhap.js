function login() {
  const username = document.getElementById("user").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Vui lòng nhập tên tài khoản và mật khẩu");
    return false;
  }

  const myUsername = "admin";
  const myPassword = "123";

  if (username !== myUsername || password !== myPassword) {
    alert("Tên tài khoản hoặc mật khẩu không chính xác");
    return false;
  }

  alert("Đăng nhập thành công!!!");
  return true;
}
