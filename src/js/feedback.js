const scriptURL =
  'https://script.google.com/macros/s/AKfycbxZpxTAloSQK0n1r3e02-cCEqXsRalj462V3HnQ5rEueypaAAU6nezCas0If_RNFjt4Lg/exec';
const form = document.forms['feedback'];

form.addEventListener('submit', onFormSubmit);

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
