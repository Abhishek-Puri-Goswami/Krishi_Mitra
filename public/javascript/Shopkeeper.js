const requestForm = document.getElementById("requestForm");
const confirmationMessage = document.getElementById("confirmationMessage");
const submitBtn = document.getElementById("submitRequest");

requestForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  const formData = new FormData(requestForm);

  try {
    const response = await fetch("/shopkeeper/request", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (response.ok) {
      requestForm.classList.add("hidden");
      confirmationMessage.classList.remove("hidden");
    } else {
      alert("Failed to submit request.");
      console.log(result.error || "Unknown error");
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Request";
    }
  } catch (err) {
    alert("Something went wrong.");
    console.log(err.message);
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Request";
  }
});

function submitAnother() {
  requestForm.reset();
  confirmationMessage.classList.add("hidden");
  requestForm.classList.remove("hidden");
}

function goBack() {
  window.history.back();
}

function goToRequests() {
  window.location.href = "/shopkeeper/requests";
}
