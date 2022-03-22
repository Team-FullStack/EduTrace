const menu_toggle = document.querySelector(".menu-toggle");
const site_nav = document.querySelector(".site-nav");
const nav_container = document.querySelector(".nav-container");
const header = document.querySelector("header");

const nav_links = document.querySelectorAll(".site-nav a");

const contactrForm = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const alert = document.getElementById("alert");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const name_label = document.querySelector("#name + label");
const email_label = document.querySelector("#email + label");
const message_label = document.querySelector("#message + label");

// hamburger toggle
menu_toggle.addEventListener("click", function () {
  console.log("nav clicked");
  site_nav.classList.toggle("site-nav--open");
  nav_container.classList.toggle("nav-container--open");
  //   $(this).toggleClass("open");
  this.classList.toggle("open");
  header.classList.toggle("header--open");
});

nav_links.forEach((nav_link) => {
  nav_link.addEventListener("click", function () {
    site_nav.classList.remove("site-nav--open");
    nav_container.classList.remove("nav-container--open");
    //   $(this).toggleClass("open");
    menu_toggle.classList.remove("open");
  });
});

// contact form google maps
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

// contact form vaildation

contactrForm.addEventListener("submit", (e) => {
  name.style.borderColor = "#2279d4";
  name_label.classList.remove("danger");
  email.style.borderColor = "#2279d4";
  email_label.classList.remove("danger");
  message.style.borderColor = "#2279d4";
  message_label.classList.remove("danger");

  if (name.value === "" || name.value == null) {
    e.preventDefault();
    showmessage("Name is required", "error");
    name.style.borderColor = "red";
    name_label.classList.add("danger");
  } else if (email.value === "" || email.value == null) {
    e.preventDefault();
    showmessage("Email is required", "error");
    email.style.borderColor = "red";
    email_label.classList.add("danger");
  } else if (!email.value.match(mailformat)) {
    e.preventDefault();
    showmessage("Invalid Email adress", "error");
    email.style.borderColor = "red";
    email_label.classList.add("danger");
  } else if (message.value === "" || message.value == null) {
    e.preventDefault();
    message.style.borderColor = "red";
    message_label.classList.add("danger");
    showmessage("We would like to hear your message", "error");
  } else {
    showmessage("Message sent successfully", "success");
  }
});

function showmessage(msg, type) {
  if (type == "info") {
    alert.classList.remove("success");
    alert.classList.remove("error");
    alert.classList.add("info");
  } else if (type == "success") {
    alert.classList.remove("info");
    alert.classList.remove("error");
    alert.classList.add("success");
  } else if (type == "error") {
    alert.classList.remove("success");
    alert.classList.remove("info");
    alert.classList.add("error");
  }

  alert.innerHTML = `<div class="start">&nbsp;</div> <p>${msg}</p>`;
}

// (function () {
//   "use strict";

//   var section = document.querySelectorAll(".section");
//   var sections = {};
//   var i = 0;

//   Array.prototype.forEach.call(section, function (e) {
//     sections[e.id] = e.offsetTop;
//   });

//   console.log(sections);
//   window.onscroll = function () {
//     var scrollPosition =
//       document.documentElement.scrollTop || document.body.scrollTop;

//     // for (let i in sections) {
//     //   if (sections[i] <= scrollPosition) {
//     //     document.querySelector(".active").setAttribute("class", " ");
//     //     document
//     //       .querySelector("a[href*=" + i + "]")
//     //       .setAttribute("class", "active");
//     //   }
//     // }

//     let key = Object.keys(sections);
//     let val = Object.values(sections);

//     for (let i = 0; i < val.length; i++) {
//       if (val[i] <= scrollPosition) {
//         document.querySelector(".active").setAttribute("class", " ");
//         console.log(`a[href = "#${key[i]}"]`);
//         document.querySelector(`#${key[i]}`).setAttribute("class", "active");
//       }
//     }
//   };
// })();

let section = document.querySelectorAll(".section");
let links = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    console.log(sec.offsetTop);

    if (top >= offset && top < offset + height) {
      links.forEach((singlelink) => {
        singlelink.classList.remove("active");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
