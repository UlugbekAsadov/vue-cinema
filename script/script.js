const menuButton = document.querySelector(".menu__icon");
const mobileMenu = document.querySelector(".mobile__menu");
const mobileMenuCloseIcon = document.querySelector(".x_icon");

function showMobileMenu() {
  mobileMenu.style.transform = "translateX(0)";
}

menuButton.addEventListener("click", showMobileMenu);

function closeMobileMenu() {
  mobileMenu.style.transform = "translateX(100vw)";
}

mobileMenuCloseIcon.addEventListener("click", closeMobileMenu);
