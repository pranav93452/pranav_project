document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Replace with your authentication logic here
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'pranav' && password === '1234') {
      document.getElementById('message').textContent = 'Login successful!';
  } else {
      document.getElementById('message').textContent = 'Login failed. Please check your credentials.';
  }
});
