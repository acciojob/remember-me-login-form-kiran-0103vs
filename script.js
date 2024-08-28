//your JS code here. If required.
// DOM Elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const existingUserContainer = document.getElementById('existing-user-container');

// Load existing user data from local storage
function loadExistingUser() {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    // Create "Login as existing user" button
    const existingUserButton = document.createElement('button');
    existingUserButton.id = 'existing';
    existingUserButton.textContent = 'Login as existing user';
    existingUserButton.onclick = () => alert(`Logged in as ${savedUsername}`);

    existingUserContainer.appendChild(existingUserButton);
  }
}

// Handle form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (checkbox.checked) {
    // Save username and password in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    // Remove username and password from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  alert(`Logged in as ${username}`);

  // Reload the existing user button if necessary
  existingUserContainer.innerHTML = '';
  loadExistingUser();
});

// Initial load to check for existing user data
loadExistingUser();
