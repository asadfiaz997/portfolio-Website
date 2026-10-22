const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const year = document.querySelector("#year");

// Keep the footer year current.
if (year) year.textContent = new Date().getFullYear();

// Accessible mobile navigation.
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

// This demo validates the form locally. It does not transmit or email data.
if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      formStatus.textContent = "Please complete each field with valid information.";
      return;
    }

    const name = document.querySelector("#name").value.trim();
    formStatus.textContent = `Thanks, ${name}! The form passed validation, but this demo does not send messages. Add a form service or backend to receive submissions.`;
    contactForm.reset();
  });
}
