const test = document.querySelector('footer');

test.addEventListener('click', evt => {
  evt.preventDefault();
  test.style.setProperty('background-color', 'green');
});