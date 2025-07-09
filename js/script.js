function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) { 
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      window.location.href = 'painel.html';
    });
  }
});


const darkModeToggle = document.getElementById('darkModeToggle');
function toggleDarkMode() {
  if (darkModeToggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled'); 
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
}
darkModeToggle.addEventListener('change', toggleDarkMode);
window.addEventListener('load', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    darkModeToggle.checked = true;
    document.body.classList.add('dark-mode');
  }
});

