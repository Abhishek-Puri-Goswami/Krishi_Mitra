// signin.js
document.addEventListener("DOMContentLoaded", () => {
    const signInForm = document.querySelector("form");
  
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = signInForm.querySelector("input[placeholder='Email']").value;
      const password = signInForm.querySelector("input[placeholder='Password']").value;
  
      // Handle sign-in logic (e.g., verify credentials)
      console.log("Login:", { email, password });
  
      alert("Login successful!");
    });
  });
  