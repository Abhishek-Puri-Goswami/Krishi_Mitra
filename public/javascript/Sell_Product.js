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

const productForm = document.getElementById("productForm");
const confirmationMessage = document.getElementById("confirmationMessage");

productForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // form validation
  const productImage = document.getElementById("images").files[0];
  const productName = document.getElementById("productName").value;
  const productCategory = document.getElementById("productCategory").value;
  const description = document.getElementById("description").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;
  const farmLocation = document.getElementById("farmLocation").value;

  let errorMessages = [];

  // if (!productImage) {
  //   errorMessages.push("Please upload at least one image.");
  // }
  // if (!productName) {
  //   errorMessages.push("Please enter the product name.");
  // }
  // if (!productCategory) {
  //   errorMessages.push("Please select a product category.");
  // }
  // if (!description) {
  //   errorMessages.push("Please provide a description of the product.");
  // }
  // if (!quantity || quantity <= 0) {
  //   errorMessages.push("Please enter a valid quantity greater than 0.");
  // }
  // if (!price || price <= 0) {
  //   errorMessages.push("Please enter a valid price greater than 0.");
  // }
  if (!farmLocation) {
    errorMessages.push("Please enter the farm location.");
  }

  if (document.getElementById("delivery").checked) {
    const distance = document.getElementById("deliveryDistance").value;
    const fee = document.getElementById("deliveryFee").value;
    if (!distance || !fee) {
      errorMessages.push("Please specify a valid delivery distance and fee.");
    }
  }

  if (errorMessages.length > 0) {
    alert(errorMessages.join("\n"));
    return;
  }

  productForm.classList.add("hidden");
  confirmationMessage.classList.remove("hidden");
});

//! NOT YET IMPLEMENTED
function goBack() {
  window.history.back();
}

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
