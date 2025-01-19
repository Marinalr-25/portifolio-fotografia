const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Função para definir o ícone, tema e a classe do botão ao carregar a página
function setInitialTheme() {
  if (body.getAttribute('data-bs-theme') === 'dark') {
    themeIcon.classList.remove('bi-brightness-high');
    themeIcon.classList.add('bi-moon-stars-fill');
    toggleThemeBtn.classList.remove('btn-light');
    toggleThemeBtn.classList.add('btn-dark');
  } else {
    body.setAttribute('data-bs-theme', 'light');
    themeIcon.classList.remove('bi-moon-stars-fill');
    themeIcon.classList.add('bi-brightness-high');
    toggleThemeBtn.classList.remove('btn-dark');
    toggleThemeBtn.classList.add('btn-light');
  }
}

// Definir o tema inicial ao carregar
setInitialTheme();

toggleThemeBtn.addEventListener('click', () => {
  if (body.getAttribute('data-bs-theme') === 'dark') {
    body.setAttribute('data-bs-theme', 'light');
    themeIcon.classList.remove('bi-moon-stars-fill');
    themeIcon.classList.add('bi-brightness-high');
    toggleThemeBtn.classList.remove('btn-dark');
    toggleThemeBtn.classList.add('btn-light');
  } else {
    body.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.remove('bi-brightness-high');
    themeIcon.classList.add('bi-moon-stars-fill');
    toggleThemeBtn.classList.remove('btn-light');
    toggleThemeBtn.classList.add('btn-dark');
  }
});
