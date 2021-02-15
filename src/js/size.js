function changeSize(e) {
  e.target.closest('.box').classList.toggle('changed');
  document.body.classList.toggle('noscroll');
  document.querySelector('.overflow').classList.toggle('blackout');
}

document.querySelectorAll('.size').forEach((el) => el.addEventListener('click', changeSize));
