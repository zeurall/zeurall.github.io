const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

let posts = [];

// Fetch the search data
fetch('/search.json')
  .then(response => response.json())
  .then(data => {
    posts = data;
  });

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const results = posts.filter(post => {
    return (
      post.title.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm)
    );
  });

  displayResults(results);
});

function displayResults(results) {
  searchResults.innerHTML = '';

  if (results.length > 0) {
    results.forEach(result => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${result.url}">${result.title}</a>`;
      searchResults.appendChild(li);
    });
  } else {
    searchResults.innerHTML = '<li>No results found</li>';
  }
}
