const toggle = document.getElementById('darkModeToggle');
const body = document.body;
if(localStorage.getItem('theme') === 'dark'){
  body.setAttribute('data-theme', 'dark');
  toggle.checked = true;
}
toggle.addEventListener('change', () => {
  if(toggle.checked){
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }
});
