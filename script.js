"use strict";

const openMenu = document.querySelector(".active");
const menuIcon = document.querySelector(".hamburger-menu");
const mobilenav = document.querySelector(".divham");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("active");
  mobilenav.classList.toggle("show");
});

function searchKeyword() {
  // Clear previous highlights
  const highlightedElements = document.querySelectorAll('.highlight');
  highlightedElements.forEach(element => {
      element.classList.remove('highlight');
  });

  const input = document.getElementById('input-search').value.toLowerCase();
  const content = document.getElementById('content');
  const paragraphs = content.getElementsByTagName('p');

  let found = false;
  for (let paragraph of paragraphs) {
      if (paragraph.innerText.toLowerCase().includes(input)) {
          paragraph.classList.add('highlight');
          paragraph.scrollIntoView({ behavior: 'smooth' });
          found = true;
          break;
      }
  }

  if (!found) {
      alert('Keyword not found!');
  }
}

document.getElementById('submit-button').addEventListener('click', function() {
  validateForm();
});

function validateForm() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;

  var valid = true;

  clearErrors();

  if (username === '') {
      showError('username-error', 'Username is required!');
      valid = false;
  }

  if (email === '') {
      showError('email-error', 'Email is required!');
      valid = false;
  } else if (!validateEmail(email)) {
      showError('email-error', 'Please enter a valid email address!');
      valid = false;
  }

  if (password === '') {
      showError('password-error', 'Password is required!');
      valid = false;
  }

  if (confirmPassword === '') {
      showError('confirm-password-error', 'Confirm Password is required!');
      valid = false;
  } else if (password !== confirmPassword) {
      showError('confirm-password-error', 'Passwords do not match!');
      valid = false;
  }

  if (valid) {
      alert('Form submitted successfully');
      clearForm();
  }

  return valid;
}

function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

function clearErrors() {
  var errorElements = document.getElementsByClassName('error-message');
  for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = '';
  }
}

function clearForm() {
  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('confirm-password').value = '';
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}
