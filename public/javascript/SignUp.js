document
  .querySelector('button[type="button"]')
  .addEventListener("click", function () {
    alert("OTP sent to your registered mobile number.");
  });

document.querySelector("#submitBtn").addEventListener("click", function (e) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
    e.preventDefault();
  }
});
