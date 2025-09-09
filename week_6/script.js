// 🌗 Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Counter Game Logic
let score = 0;
const scoreDisplay = document.getElementById("score");

document.getElementById("increaseBtn").addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  score--;
  scoreDisplay.textContent = score;
});

// 📚 FAQ Toggle Logic
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// 📋 Form Validation Logic
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Clear previous errors
  clearErrors();

  let isValid = true;

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    showError("name", "Name is required.");
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/;
  if (!emailRegex.test(email)) {
    showError("email", "Please enter a valid email address.");
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    showError("password", "Password must be at least 6 characters.");
    isValid = false;
  }

  // Show success message if valid
  if (isValid) {
    document.getElementById("formSuccess").classList.remove("hidden");
  }
});

// 🔧 Helper Functions
function showError(fieldId, message) {
  document.getElementById(fieldId + "Error").textContent = message;
}

function clearErrors() {
  ["nameError", "emailError", "passwordError"].forEach((id) => {
    document.getElementById(id).textContent = "";
  });
  document.getElementById("formSuccess").classList.add("hidden");
}
