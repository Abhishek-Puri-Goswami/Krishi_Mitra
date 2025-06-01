function togglePassword(fieldId, button) {
      const field = document.getElementById(fieldId);
      if (field.type === "password") {
        field.type = "text";
        button.textContent = "Hide";
      } else {
        field.type = "password";
        button.textContent = "Show";
      }
    }

function clearPasswords() {
      document.getElementById('new-password').value = '';
      document.getElementById('confirm-password').value = '';
      document.getElementById('error-message').textContent = '';
    }

function isStrongPassword(pwd) {
      const lengthOk = pwd.length >= 6;
      const hasLetter = /[a-zA-Z]/.test(pwd);
      const hasDigit = /\d/.test(pwd);
      const hasSpecial = /[^a-zA-Z0-9]/.test(pwd);
      return lengthOk && hasLetter && hasDigit && hasSpecial;
    }

function submitAndValidate() {
      const newPassword = document.getElementById('new-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      const errorMsg = document.getElementById('error-message');

      if (!isStrongPassword(newPassword)) {
        errorMsg.textContent = 'Password is too weak. Use at least 6 characters including letters, digits, and punctuation marks.';
        return;
      }

      if (newPassword !== confirmPassword) {
        errorMsg.textContent = 'Passwords do not match.';
        return;
      }

      // Success
      alert('Password updated successfully! (demo)');
      clearPasswords();
    }
