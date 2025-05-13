// Get the hamburger menu toggle button and navigation links
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// When the hamburger menu is clicked, toggle the "active" class to show or hide the menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.style.cursor = 'pointer'; // Change the cursor to pointer on click
});

// Close the menu if you click outside of it
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active'); // Hide the menu if clicked outside
    }
});
