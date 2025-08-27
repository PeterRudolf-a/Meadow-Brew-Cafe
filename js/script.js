// Toggle mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Contact form validation + fake submit success
const contactForm = document.querySelector("form");
const successMessage = document.querySelector(".success-message");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Show success feedback
    successMessage.style.display = "block";
    contactForm.reset();
  });
}
