const navLinks = document.querySelector('nav .nav-links');

function toggleMenu() {
  navLinks.classList.toggle('open');
}

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
