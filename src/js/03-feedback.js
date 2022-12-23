import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

const LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = {};

populateForm();

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);

  evt.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateForm() {
  const dataFormLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY); 

  if (dataFormLocalStorage) {
    try {
      formData = JSON.parse(dataFormLocalStorage) || {};
      Object.entries(formData).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
    } catch (error) {
      console.error("error: ", error.message);
    }
  }
}
