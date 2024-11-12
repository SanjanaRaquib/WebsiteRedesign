window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

// Form validation and submission handling
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Get form field values
  const name = document.querySelector('input[type="text"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const message = document.querySelector('textarea').value.trim(); // Get message field

  // Clear any previous error messages
  const errorContainer = document.querySelector(".error-message");
  errorContainer.textContent = "";

  // Validation messages
  let errorMessages = [];

  // Name validation (no numbers allowed)
  if (!/^[a-zA-Z\s]+$/.test(name) || name.length === 0) {
    errorMessages.push("Please enter a valid name without numbers.");
  }

  // Email validation (simple regex for format)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email) || email.length === 0) {
    errorMessages.push("Please enter a valid email address.");
  }

  // Message validation (cannot be empty)
  if (message.length === 0) {
    errorMessages.push("Please enter a message.");
  }

  // Display errors or thank you message
  if (errorMessages.length > 0) {
    errorContainer.innerHTML = errorMessages.join("<br>"); // Display all errors
  } else {
    const formContainer = document.querySelector(".contact-right");
    formContainer.innerHTML = `
      <h2>Thank you!</h2>
      <p>You submitted the form successfully.</p>
    `;
  }
});

document.getElementById('get-started').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth'
  });
});

