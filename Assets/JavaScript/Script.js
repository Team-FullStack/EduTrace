const menu_toggle = document.querySelector(".menu-toggle");
const site_nav = document.querySelector(".site-nav");
const nav_container = document.querySelector(".nav-container");

const nav_links = document.querySelectorAll(".site-nav a");

// hamburger toggle
menu_toggle.addEventListener("click", function () {
  site_nav.classList.toggle("site-nav--open");
  nav_container.classList.toggle("nav-container--open");
  //   $(this).toggleClass("open");
  this.classList.toggle("open");
});

nav_links.forEach((nav_link) => {
  nav_link.addEventListener("click", function () {
    site_nav.classList.remove("site-nav--open");
    nav_container.classList.remove("nav-container--open");
    //   $(this).toggleClass("open");
    this.classList.remove("open");
  });
});
