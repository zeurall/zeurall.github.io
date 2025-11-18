// Search functionality
const searchToggle = document.getElementById('search-toggle');
const searchContainer = document.getElementById('search-container');
// The ID of the input field is 'search-input', not 'search-bar'
const searchInput = document.getElementById('search-input');

searchToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents the document click listener from hiding it immediately
    const isDisplayed = searchContainer.style.display === 'block';
    searchContainer.style.display = isDisplayed ? 'none' : 'block';
    if (!isDisplayed) {
        searchInput.focus();
    }
});

function performSearch(query) {
    if (query) {
        // Redirect to the search page with the query
        window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
    }
}

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        performSearch(query);
    }
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

mobileToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    mobileToggle.textContent = navbarMenu.classList.contains('active') ? '✕' : '☰';
    
    // Close search container when mobile menu opens
    if (navbarMenu.classList.contains('active')) {
        searchContainer.style.display = 'none';
    }
});

// Close menu/search when clicking outside
document.addEventListener('click', (event) => {
    // Close mobile menu
    if (!event.target.closest('.navbar') && navbarMenu.classList.contains('active')) {
        navbarMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
    }
    // Close search input
    if (!event.target.closest('#search-container') && !event.target.closest('#search-toggle')) {
        searchContainer.style.display = 'none';
    }
});
