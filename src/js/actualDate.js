const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
console.log(day, month);

document.querySelector('.actualDate').insertAdjacentHTML('beforeend',
  `${day}/${month + 1}/${year}`);
