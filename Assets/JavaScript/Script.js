const menu_toggle = document.querySelector(".menu-toggle");
const site_nav = document.querySelector(".site-nav");
const nav_container = document.querySelector(".nav-container");
// hamburger toggle
menu_toggle.addEventListener("click", function () {
  site_nav.classList.toggle("site-nav--open");
  nav_container.classList.toggle("nav-container--open");
  //   $(this).toggleClass("open");
  this.classList.toggle("open");
});
