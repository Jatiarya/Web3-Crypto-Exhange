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
