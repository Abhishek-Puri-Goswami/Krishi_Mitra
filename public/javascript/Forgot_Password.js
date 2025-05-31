const inputs = document.querySelectorAll(".otp-inputs input");


inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    input.value = value.replace(/[^0-9]/g, ""); // Only digits
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
      } else {
        input.value = "";
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputs[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    } else if (e.key.match(/^[0-9]$/)) {
      input.value = "";
    }
  });

  input.addEventListener("focus", () => {
    input.select();
  });
});

document.querySelector(".submit-btn").addEventListener("click", async () => {
  const email = document.cookie.split('; ').find(row => row.startsWith('email='))?.split('=')[1];
  console.log("Saved email from cookie:", email);

  let otp = "";
  inputs.forEach((input) => (otp += input.value));
  console.log(otp);

  if (otp.length === 6 && email) {
    try {
      const res = await fetch("/user/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          otp,
          email: decodeURIComponent(email),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Success - redirect
        window.location.href = "/dashboard";
      } else {
        // Show server error message if any
        alert(data.message || "OTP verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Failed to verify OTP. Please try again.");
    }
  } else {
    alert("Please enter a valid 6-digit OTP.");
  }
});

