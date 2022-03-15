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
    menu_toggle.classList.remove("open");
  });
});

function initMap() {
  // The location of pune
  const pune = { lat: 18.52043, lng: 73.856743 };
  // The map, centered at pune
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: pune,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: pune,
    map: map,
  });
}
