"use strict";

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
  ".github-container, .navbar, .about-me-container, .get-in-touch-container"
);
hiddenElements.forEach((el) => observer.observe(el));

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
