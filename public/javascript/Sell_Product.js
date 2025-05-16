const images = document.getElementById("images");

images.addEventListener("change", function (event) {
  const imagePreview = document.getElementById("imagePreview");
  imagePreview.innerHTML = "";

  const files = event.target.files;

  for (const file of files) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement("img");

      img.src = e.target.result;
      imagePreview.appendChild(img);
    };

    reader.readAsDataURL(file);
  }
});

if (document.getElementById("delivery").checked) {
  const distance = document.getElementById("deliveryDistance").value;
  const fee = document.getElementById("deliveryFee").value;
  if (!distance || !fee) {
    errorMessages.push("Please specify a valid delivery distance and fee.");
  }
}

function toggleDelivery() {
  const deliveryCheckbox = document.getElementById("delivery");
  const deliveryOptions = document.getElementById("deliveryOptions");

  if (deliveryCheckbox.checked) {
    deliveryOptions.classList.remove("hidden");
  } else {
    deliveryOptions.classList.add("hidden");

    // Reset when unchecked
    document.getElementById("deliveryDistance").value = "";
    document.getElementById("deliveryFee").value = "";
  }
}

//! NOT YET IMPLEMENTED
function goBack() {
  window.history.back();
}

//? Form Submission Handler
const productForm = document.getElementById("productForm");
const confirmationMessage = document.getElementById("confirmationMessage");
const submitBtn = document.getElementById("submitProduct");

productForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  // Disable submit button to prevent multiple clicks
  submitBtn.disabled = true;
  submitBtn.textContent = "Uploading...";

  const formData = new FormData(productForm);

  try {
    const response = await fetch("/product/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (response.ok) {
      productForm.classList.add("hidden");
      confirmationMessage.classList.remove("hidden");
    } else {
      alert("Upload failed! Please try again.");
      console.log(result.error || "Unknown error");

      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Product";
    }
  } catch (err) {
    alert("Something went wrong. Please try again.");
    console.log(err.message);

    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Product";
  }
});

function uploadAnother() {
  document.getElementById("productForm").reset();
  document.getElementById("imagePreview").innerHTML = "";
  document.getElementById("confirmationMessage").classList.add("hidden");
  document.getElementById("productForm").classList.remove("hidden");
}

//! NOT YET IMPLEMENTED
function goToMyListings() {
  window.location.href = "";
}

function togglePickup() {
  //? Logic for pickup option can be added here if needed
}
