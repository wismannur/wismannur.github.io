
/*=================
======Login=====
===================*/
function cekLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username=="admin@wiseman.com" && password=="admin") {
      alert("Login Anda Sukses, Selamat Datang The WiseMan.");
      window.open("page construction.html");
    } else {
      alert("Username / Password Anda salah!");
    }
}
