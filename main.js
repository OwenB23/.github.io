"use strict";

// navbar shrink Jquery
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });
});
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
  ".github-container, .navbar, .about-me-container, .get-in-touch-container, .project-container, .project-header, .linked-in"
);
hiddenElements.forEach((el) => observer.observe(el));

// projects

function openCity(evt, projectName) {
  var i, tabcontent, tablinks;

  var projectDescription = document.getElementById(projectName);

  var isVisible = projectDescription.style.display === "flex";

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  if (!isVisible) {
    projectDescription.style.display = "flex";
    projectDescription.style.justifyContent = "flex-start";
    projectDescription.style.alignItems = "center";
    projectDescription.style.flexDirection = "column";
    evt.currentTarget.classList.add("active");
  }
}

// Contact

const button = document.getElementById("openFormButton");

button.addEventListener("click", function () {
  window.location.href = "mailto:owenbond23@gmail.com";
});
