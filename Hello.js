const greeting = 'Hello,';
const button = document.getElementById('my-button');
button.personName = 'World';
button.addEventListener('click', () => {
  alert(`${greeting} ${button.personName}!`)
}, false);
