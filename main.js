const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
});

// Tombol Login
const login = document.getElementById("login");
login.addEventListener("click", function () {
  window.location.href = "pages/masuk.html";
});
// Tombol Daftar
const register = document.getElementById("register");
register.addEventListener("click", function () {
  window.location.href = "pages/daftar.html";
});
// Tombol login versi mobile
const loginMobile = document.getElementById("login-mobile");
loginMobile.addEventListener("click", function () {
  window.location.href = "pages/masuk.html";
});
// Tombol daftar versi mobile
const registerMobile = document.getElementById("register-mobile");
registerMobile.addEventListener("click", function () {
  window.location.href = "pages/daftar.html";
});
// Tombol jelajahi
const jelajahi = document.getElementById("jelajahi");
jelajahi.addEventListener("click", function () {
  window.location.href = "pages/belicrypto.html";
});
// Tombol beli dan jual
const beli = document.getElementById("btn-buy");
const jual = document.getElementById("btn-sell");

beli.addEventListener("click", function () {
  window.location.href = "pages/belicrypto.html";
});
jual.addEventListener("click", function () {
  window.location.href = "pages/belicrypto.html";
});
// Tombol daftar sekarang
const daftarSekarang = document.getElementById("register-now");
daftarSekarang.addEventListener("click", function () {
  window.location.href = "pages/daftar.html";
});
