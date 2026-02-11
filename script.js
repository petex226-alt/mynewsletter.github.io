const form = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const successEmail = document.getElementById('successEmail');

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = emailInput.value.trim();
  
  if (!email) {
    errorMessage.textContent = 'Please enter an email address.';
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    return;
  }
  
  if (!validateEmail(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    return;
  }
  
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';
  successMessage.style.display = 'block';
  successEmail.textContent = `Confirmation sent to: ${email}`;
  
  emailInput.value = '';
  
  setTimeout(() => {
    window.location.href = 'confirmation.html';
  }, 2000);
});