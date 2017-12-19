navLinks = document.querySelectorAll('.navigation__item');
navToggle = document.getElementById('navi-toggle')

function closeNav() {
  navToggle.checked = false;
  // navToggle.click(); // fires event if you need it
}

navLinks.forEach(link => {
  link.addEventListener('click', closeNav);
});
