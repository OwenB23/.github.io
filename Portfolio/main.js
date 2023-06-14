"use strict";

// Resume Download

// Fade in animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(
  ".github-container, .navbar, .about-me-container, .get-in-touch-container, .project-container, .project-header"
);
hiddenElements.forEach((el) => observer.observe(el));

// projects

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "flex";
  document.getElementById(cityName).style.justifyContent = "flex-start";
  document.getElementById(cityName).style.alignItems = "center";
  document.getElementById(cityName).style.flexDirection = "column";

  evt.currentTarget.classList.add("active");
}

// Conatact Form
const openFormButton = document.getElementById("openFormButton");
const closeFormButton = document.getElementById("closeFormButton");
const contactFormContainer = document.getElementById("contactFormContainer");

openFormButton.addEventListener("click", function () {
  contactFormContainer.style.display = "block";
});

closeFormButton.addEventListener("click", function () {
  contactFormContainer.style.display = "none";
  document.body.classList.remove("no-scroll");
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
