document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (!users[email]) {
    alert("User not found. Please register.");
    return;
  }

  if (users[email].password !== password) {
    alert("Incorrect password.");
    return;
  }

  localStorage.setItem("currentUser", email);

  if (!localStorage.getItem(`cart_${email}`)) {
    localStorage.setItem(`cart_${email}`, JSON.stringify([])); // new user cart
  }

  alert("Login successful!");
  window.location.href = "home.html";
});
// Example login code
const username = document.getElementById("username").value;
localStorage.setItem("user", JSON.stringify({ name: username }));
