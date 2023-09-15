// Simulated user credentials for demo purposes (replace with your own authentication mechanism)
const validCredentials = {
    username: 'demo',
    password: 'password123',
  };
  
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get the entered credentials
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check if the entered credentials match the valid credentials
    if (username === validCredentials.username && password === validCredentials.password) {
      // Authentication successful, redirect to the landing page
      window.location.href = 'home.html';
    } else {
      // Authentication failed, display an error message
      alert('Invalid username or password. Please try again.');
    }
  });
  
  