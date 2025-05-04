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

document.querySelector(".submit-btn").addEventListener("click", () => {
  let otp = "";
  inputs.forEach((input) => (otp += input.value));
  if (otp.length === 6) {
    fetch("/user/otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to verify OTP");
        }
        return response.json();
      })
      .then((data) => {
        console.log("OTP verified successfully:", data);
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        alert("Failed to verify OTP. Please try again.");
      });

    alert("OTP submitted succeccfully.");
  } else {
    alert("Please enter all 6 digits.");
  }
});
