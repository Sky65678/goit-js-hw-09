const formData = { email: '', message: '' };
const localStorageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

window.addEventListener('load', () => {
  const savedForm = JSON.parse(localStorage.getItem(localStorageKey));
  if (savedForm) {
    formData.email = savedForm.email || '';
    formData.message = savedForm.message || '';
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

form.addEventListener('input', evt => {
  if (evt.target.name) {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';
  form.reset();
});
