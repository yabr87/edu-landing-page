const scriptURL =
  'https://script.google.com/macros/s/AKfycbz_XsAzBcdPZOQ9Z1xWFnKQbYra72sAmbeohZEaEYIogUmqTJXWmTAp7TbG0NULmTmC/exec';
const form = document.forms['feedback'];
const formBtn = document.querySelector('.slider-btn');
const formWrapper = document.querySelector('.widget-form-wrapper');
const sliderBtnIcon = document.querySelector('.play-icon');

form.addEventListener('submit', onFormSubmit);
formBtn.addEventListener('click', onFormBtnClick);

function onFormSubmit(e) {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response);
      form.reset();
      alert('Success!');
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('Error!');
    });
}

function onFormBtnClick() {
  formBtn.classList.toggle('change-color');
  formWrapper.classList.toggle('show-form');
  sliderBtnIcon.classList.toggle('icon-rotate');
  console.log('click');
}
