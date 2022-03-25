const menu_toggle = document.querySelector(".menu-toggle");
const site_nav = document.querySelector(".site-nav");
const nav_container = document.querySelector(".nav-container");
const header = document.querySelector("header");

const nav_links = document.querySelectorAll(".site-nav a");

const newsletterURL =
  "https://script.google.com/macros/s/AKfycbxCnNUNxTcK6gknPpHBKlMQwih-9bp491-UwOvm54_CB9SuQjumnxrV2ciXNUMQ_izhiw/exec";
const contactURL =
  "https://script.google.com/macros/s/AKfycbykyZSPF6qFC9_EcRYTR-oNhl2BLwHMU-MRqef3gkNtIYYxmWkwzJ_nlD2i49aUdD4Rzw/exec";
const newsletterForm = document.forms["newsletterForm"];
const contactForm = document.forms["contactForm"];
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const alertbox = document.getElementById("alertbox");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const name_label = document.querySelector("#name + label");
const email_label = document.querySelector("#email + label");
const message_label = document.querySelector("#message + label");

// document.onclick = function (e) {
//   console.log(e.target.classList);
//   if (e.target.id != "nav_container") {
//     site_nav.classList.remove("site-nav--open");
//     nav_container.classList.remove("nav-container--open");
//     menu_toggle.classList.remove("open");
//   }
// };

// function hasClass(el, cl) {
//   return el.classList
//     ? el.classList.contains(cl)
//     : !!el.className &&
//         !!el.className.match(new RegExp("(?: |^)" + cl + "(?: |$)"));
// }

// hamburger toggle
menu_toggle.addEventListener("click", function () {
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

// newsletter form
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(newsletterURL, { method: "POST", body: new FormData(newsletterForm) })
    .then((response) =>
      alert(
        "Thank you for contacting! We will get back to you soon on your contact email ID."
      )
    )
    .catch((error) => console.error(error.message));
  document.getElementById("newsletterForm").reset();
});

// contact form vaildation
contactForm.addEventListener("submit", (e) => {
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
    e.preventDefault();
    fetch(contactURL, { method: "POST", body: new FormData(contactForm) })
      .then((response) => showmessage("Message sent successfully", "success"))
      .catch((error) => {
        showmessage(error.message, "error");
      });
    document.getElementById("contactForm").reset();
  }
});

function showmessage(msg, type) {
  if (type == "info") {
    alertbox.classList.remove("success");
    alertbox.classList.remove("error");
    alertbox.classList.add("info");
  } else if (type == "success") {
    alertbox.classList.remove("info");
    alertbox.classList.remove("error");
    alertbox.classList.add("success");
  } else if (type == "error") {
    alertbox.classList.remove("success");
    alertbox.classList.remove("info");
    alertbox.classList.add("error");
  }

  alertbox.innerHTML = `<div class="start">&nbsp;</div> <p>${msg}</p>`;
}

// cuurent navigation
let section = document.querySelectorAll(".section");
let links = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

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
