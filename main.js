function CheckThongTin() {
  var isSuccess = true

  var phone = Number(document.getElementById('SoDienThoai').value)
  var username = document.getElementById('TenDangNhap').value
  var email = document.getElementById('Email').value
  var pass = document.getElementById('PassWord').value
  var confirmPass = document.getElementById('XacNhanMatKhau').value

  var testEmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  var testPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

  if (testPhone.test(phone) == false) {
    alert('Định dạng số điện thoại sai')
    isSuccess = false
  } else if (testEmail.test(email) == false) {
    isSuccess = false
    alert('Định dạng email sai')
  } else if (pass.includes(' ') || pass.length < 8) {
    alert('Định dạng passWord sai')
    isSuccess = false
  } else if (confirmPass != pass) {
    isSuccess = false
    alert('Xác nhận mật khẩu sai')
  } else if (
    !document.getElementById('GioiTinh1').checked &&
    !document.getElementById('GioiTinh2').checked
  ) {
    alert('Vui lòng chọn giới tính')
    isSuccess = false
  } else {
    localStorage.setItem('user', JSON.stringify([username, pass]))
    alert('Đăng ký thành công')
  }

  if (isSuccess) {
    window.location.href = './login.html'
  }
}

function CheckDangNhap() {
  var username = document.getElementById('TenDangNhap').value
  var pass = document.getElementById('PassWord').value

  var user = JSON.parse(localStorage.getItem('user'))

  if (username == user[0]) {
    if (pass == user[1]) {
      window.location.href = './index.html'
      alert('Hello ' + username)
    } else {
      alert('Sai tên đăng nhập hoặc mật khẩu')
    }
  } else {
    alert('Sai tên đăng nhập hoặc mật khẩu')
  }
}
