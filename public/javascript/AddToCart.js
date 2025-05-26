const items = [
  {
    id: 1,
    name: "Paddy",
    price: 2800,
    originalPrice: 3000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Wheat",
    price: 1400,
    originalPrice: 2000,
    quantity: 1,
  },
];

function updateSummary() {
  const mrpTotal = items.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = mrpTotal - total;

  document.getElementById("mrp-total").textContent = `₹${mrpTotal.toFixed(2)}`;
  document.getElementById("discount").textContent = `- ₹${discount.toFixed(2)}`;
  document.getElementById("total").textContent = `₹${total.toFixed(2)}`;
  document.querySelector(".you-saved").textContent = `You Saved ₹${discount.toFixed(2)}`;
}

document.querySelectorAll(".increment").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    items[index].quantity++;
    btn.previousElementSibling.textContent = items[index].quantity;
    updateSummary();
  });
});

document.querySelectorAll(".decrement").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (items[index].quantity > 1) {
      items[index].quantity--;
      btn.nextElementSibling.textContent = items[index].quantity;
      updateSummary();
    }
  });
});

updateSummary();
