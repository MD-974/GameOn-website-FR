const form = document.querySelector('form');

const first = document.querySelector('#first');

// STOP les actions par defaut du navigateur
form.addEventListener("submit", (event) => {
  event.preventDefault();
})

function validate() {
  const first = form.first.value;

  if (!first || length(first) < 2) {
    document.querySelector('#firstData').append('Error on firstname');
  }
}