const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply the theme
const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.classList.add('active');
    } else {
        body.classList.remove('dark-mode');
        toggleButton.classList.remove('active');
    }
};

// Toggle event
toggleButton.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    const newTheme = isDarkMode ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

// Check saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);
