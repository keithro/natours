// To close menu when link is clicked
document.querySelectorAll('.navigation__item').forEach(link => {
  link.addEventListener('click', function() {
    document.getElementById('navi-toggle').checked = false;
  });
});
