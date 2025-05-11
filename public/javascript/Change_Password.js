document
  .getElementById("changePasswordForm")
  .addEventListener("submit", function (e) {
    const newPassword = document.getElementById("newPassword");
    const confirmPassword = document.getElementById("confirmPassword");

    if (newPassword.value !== confirmPassword.value) {
      alert("Passwords do not match.");
      newPassword.value = "";
      confirmPassword.value = "";
      e.preventDefault();
    }
  });
