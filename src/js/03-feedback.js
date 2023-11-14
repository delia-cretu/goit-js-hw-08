import throttle from 'lodash.throttle';

const data = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const formEmail = document.querySelector('input[name="email"]');
const formMessage = document.querySelector('textarea[name="message"]');

// Store form data as an object in localStorage

form.addEventListener('input', throttle(storeObject, 500));

function storeObject() {
  data.email = formEmail.value;
  data.message = formMessage.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

// Complete form fields with data from localStorage if there is any

document.addEventListener('DOMContentLoaded', rememberForm);

function rememberForm() {
  let storedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!storedData) {
    return;
  }
  formEmail.value = storedData.email;
  formMessage.value = storedData.message;
}

// Clear form fields and localStorage on submit

document.addEventListener('submit', throttle(submitForm, 500));

function submitForm(event) {
  console.log(
    'Before form clearing:' +
      '\n' +
      'Email: ' +
      data.email +
      '\n' +
      'Message: ' +
      data.message
  );
  event.preventDefault();
  data.email = '';
  data.message = '';
  formEmail.value = '';
  formMessage.value = '';
  localStorage.removeItem('feedback-form-state');
  console.log(
    'After form clearing:' +
      '\n' +
      'Email: ' +
      data.email +
      '\n' +
      'Message: ' +
      data.message
  );
}
