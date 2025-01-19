const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Função para definir o ícone e o tema ao carregar a página
function setInitialTheme() {
  if (body.getAttribute('data-bs-theme') === 'dark') {
    themeIcon.classList.remove('bi-brightness-high');
    themeIcon.classList.add('bi-moon');
  } else {
    body.setAttribute('data-bs-theme', 'light');
    themeIcon.classList.remove('bi-moon');
    themeIcon.classList.add('bi-brightness-high');
  }
}

// Definir o tema inicial ao carregar
setInitialTheme();

toggleThemeBtn.addEventListener('click', () => {
  if (body.getAttribute('data-bs-theme') === 'dark') {
    body.setAttribute('data-bs-theme', 'light');
    themeIcon.classList.remove('bi-moon');
    themeIcon.classList.add('bi-brightness-high');
  } else {
    body.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.remove('bi-brightness-high');
    themeIcon.classList.add('bi-moon');
  }
});
