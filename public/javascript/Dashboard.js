function showMessage(section) {
  alert(`You clicked on the ${section} section.`);
}

document.addEventListener('DOMContentLoaded', () => {
  const profilePic = document.querySelector('.profile-pic');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  // Toggle dropdown when clicking profile pic or toggle button
  function toggleDropdown() {
    dropdownMenu.classList.toggle('show');
  }

  profilePic.addEventListener('click', toggleDropdown);
  dropdownToggle.addEventListener('click', toggleDropdown);

  // Close dropdown if clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.profile-section')) {
      dropdownMenu.classList.remove('show');
    }
  });
});
