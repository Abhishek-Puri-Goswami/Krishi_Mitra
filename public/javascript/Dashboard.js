document.addEventListener("DOMContentLoaded", () => {
  const profilePic = document.querySelector(".profile-pic");
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  function toggleDropdown() {
    dropdownMenu.classList.toggle("show");
  }

  profilePic.addEventListener("click", toggleDropdown);
  dropdownToggle.addEventListener("click", toggleDropdown);

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".profile-section")) {
      dropdownMenu.classList.remove("show");
    }
  });

  const role = document.body.dataset.role || "Farmer";

  // Define visibility per role
  const rolePermissions = {
    Farmer: ["sell", "buy", "weather", "suggestions", "history", "chat"],
    Shopkeeper: ["sell", "weather", "history", "chat"],
    Buyer: ["buy", "weather", "suggestions", "history", "chat"],
  };

  const allowed = rolePermissions[role];

  // Hide or show dashboard cards
  document.querySelectorAll(".card").forEach((card) => {
    const type = [...card.classList]
      .find((c) => c.startsWith("card-"))
      ?.slice(5);
    if (type && !allowed.includes(type)) {
      card.classList.add("hidden");
    } else {
      card.classList.remove("hidden");
    }
  });

  // Hide or show nav links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const match = link.className.match(/nav-(\w+)/);
    if (match && !allowed.includes(match[1])) {
      link.style.display = "none";
    }
  });

  // Optional: Update profile name dynamically
  document.getElementById("profileToggleBtn").textContent = role + " ⌄";
});
