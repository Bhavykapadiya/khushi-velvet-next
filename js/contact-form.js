const scriptURL = 'https://script.google.com/macros/s/AKfycbw6TPKg_61ypmtKrxH8_mJJR_5oQ17Jz2cL4YK_ZwoRMKPU61GmoTRXI1wnrT-yN7d1/exec';
const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const originalBtnText = form.querySelector('button').innerText;
  form.querySelector('button').innerText = 'Sending...';
  form.querySelector('button').disabled = true;

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
        form.querySelector('button').innerText = originalBtnText;
        form.querySelector('button').disabled = false;
    })
    .catch(error => {
        alert("Error! Something went wrong. Please try again.");
        console.error('Error!', error.message);
        form.querySelector('button').innerText = originalBtnText;
        form.querySelector('button').disabled = false;
    });
});
