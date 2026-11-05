const button = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');
button?.addEventListener('click', () => {
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('open', !expanded);
});
menu?.addEventListener('click', () => {
  if (window.matchMedia('(max-width: 850px)').matches) {
    button.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  }
});

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((element) => {
  new bootstrap.Tooltip(element);
});
