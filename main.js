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

// projects
$(document).ready(function () {
  // Event listener to show the modal for the card click
  $(".card-content-wrapper").on("click", function () {
    const projectTitle = $(this).find(".card-header").text();
    const projectDescription = $(this).find(".card-body p").text();

    // Get the modal id from the clicked card
    const modalId = $(this).data("target");
    showModal(projectTitle, projectDescription, modalId);
  });

  // Function to show the modal
  function showModal(projectTitle, projectDescription, modalId) {
    const modalTitle = document.querySelector(`${modalId} .modal-title`);
    const modalBody = document.querySelector(`${modalId} .modal-body`);

    modalTitle.innerText = projectTitle;
    modalBody.innerHTML = `<p>${projectDescription}</p>`;

    // Show the Bootstrap modal
    $(modalId).modal("show");
  }
  // Function to hide the modal
  function hideModal() {
    // Hide the Bootstrap modal
    $("#myModal").modal("hide");
  }

  // Event listener to hide the modal when the close button is clicked
  $(".close").on("click", hideModal);

  // Event listener to hide the modal when clicked outside the modal area
  $(window).on("click", function (event) {
    if (event.target === document.getElementById("myModal")) {
      hideModal();
    }
  });
});

// Contact Form
(function () {
  emailjs.init("owenbond23@gmail.com");

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
