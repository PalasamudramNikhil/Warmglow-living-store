  const registerForm = document.getElementById("registerForm");
  const passwordInput = document.getElementById("password");

  // Create a span to show password errors (you can style this in CSS)
  const passwordError = document.createElement("span");
  passwordError.id = "passwordError";
  passwordError.style.color = "red";
  passwordInput.insertAdjacentElement("afterend", passwordError);

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = passwordInput.value;

    if (!name || !email || !password) {
      alert("All fields are required.");
      return;
    }

    // Password Validation
    const errors = [];
    if (password.length < 8) {
      errors.push("at least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("an uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("a lowercase letter");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("a number");
    }
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
      errors.push("a special character");
    }

    if (errors.length > 0) {
      passwordError.textContent = "Password must contain " + errors.join(", ") + ".";
      return;
    } else {
      passwordError.textContent = "";
    }

    // Check if email already exists
    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email]) {
      alert("Email already registered. Please login.");
      return;
    }

    users[email] = { name, password };
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", email);
    localStorage.setItem(`cart_${email}`, JSON.stringify([])); // initialize empty cart

    alert("Registration successful!");
    window.location.href = "home.html";
  });

