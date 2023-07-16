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

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(projectName).style.display = "flex";
  document.getElementById(projectName).style.justifyContent = "flex-start";
  document.getElementById(projectName).style.alignItems = "center";
  document.getElementById(projectName).style.flexDirection = "column";

  evt.currentTarget.classList.add("active");
}

// Conatact

const button = document.getElementById("openFormButton");

button.addEventListener("click", function () {
  window.location.href = "mailto:owenbond23@gmail.com";
});
