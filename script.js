document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
      event.preventDefault();
      validateForm();
  });

  function validateForm() {
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');

      if (nameInput.value.trim() === '') {
          alert('Please enter your full name.');
          return;
      }

      if (!isValidEmail(emailInput.value.trim())) {
          alert('Please enter a valid email address.');
          return;
      }

      if (passwordInput.value.length < 8) {
          alert('Password must be at least 8 characters long.');
          return;
      }

      alert('Form submitted successfully!');
      // You can add code here to submit the form to your server
  }

  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});
