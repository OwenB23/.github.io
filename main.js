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

// Hello world typing animation
window.addEventListener("DOMContentLoaded", () => {
  const textContainer = document.querySelector(".hero-content");
  const cursor = document.createElement("span");
  cursor.classList.add("cursor");
  textContainer.appendChild(cursor);

  const text = "Hello World! My name is";
  let index = 0;

  function typeText() {
    textContainer.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
      setTimeout(typeText, 150);
    } else {
      cursor.style.display = "none";
    }
  }
  typeText();
});

// Skills Scroll listener

const skillsSection = document.getElementById("skills-section");

function isScrolledToBottom() {
  const distanceToBottom = skillsSection.getBoundingClientRect().bottom;

  return distanceToBottom <= window.innerHeight;
}

function startAnimationOnScroll() {
  if (isScrolledToBottom()) {
    document.querySelector(".icons").classList.add("animate-icons");

    window.removeEventListener("scroll", startAnimationOnScroll);
  }
}

window.addEventListener("scroll", startAnimationOnScroll);

// projects
$(document).ready(function () {
  // Event listener to show the modal for the card click
  $(".card-content-wrapper").on("click", function () {
    const projectTitle = $(this).find(".card-header").text();
    const projectDescription = $(this).find(".card-body p").text();

    const modalId = $(this).data("target");
    showModal(projectTitle, projectDescription, modalId);
  });

  // Function to show the modal
  function showModal(projectTitle, projectDescription, modalId) {
    const modalTitle = document.querySelector(`${modalId} .modal-title`);
    const modalBody = document.querySelector(`${modalId} .modal-body`);

    const closeButton = `<button type="button" class="close close-button" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>`;

    modalTitle.innerText = projectTitle;
    modalBody.innerHTML = closeButton + `<p>${projectDescription}</p>`;

    $(modalId).modal("show");
  }
  // Function to hide the modal
  function hideModal() {
    $("#myModal").modal("hide");
  }

  $(".close").on("click", hideModal);

  $(window).on("click", function (event) {
    if (event.target === document.getElementById("myModal")) {
      hideModal();
    }
  });
});

// Contact Form
(function () {
  emailjs.init("_XWU1Lu5sYRYcTi6t");

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const form = event.target;
      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      };

      emailjs.send("service_2xveffh", "template_fuznnpt", data).then(
        function (response) {
          alert("Message sent successfully!");
          form.reset();
        },
        function (error) {
          alert("Oops! Something went wrong. Please try again.");
          console.log("Error:", error);
        }
      );
    });
})();
