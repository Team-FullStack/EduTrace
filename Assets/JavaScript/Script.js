const menu_toggle = document.querySelector(".menu-toggle");
const site_nav = document.querySelector(".site-nav");

// hamburger toggle
menu_toggle.addEventListener("click", function () {
  console.log(site_nav);
  console.log(menu_toggle);
  console.log(this);
  site_nav.classList.toggle("site-nav--open");
  //   $(this).toggleClass("open");
  this.classList.toggle("open");
});
