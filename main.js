const menuEmail = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', mostrar);

function mostrar() {
  menu.classList.toggle('inactive');
}
