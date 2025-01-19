// Seleciona o botão e o ícone dentro do botão
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Adiciona um evento de clique ao botão
toggleThemeBtn.addEventListener('click', () => {
  // Verifica o tema atual e altera para o tema oposto
  if (body.getAttribute('data-bs-theme') === 'dark') {
    body.setAttribute('data-bs-theme', 'light');
    themeIcon.classList.remove('bi-brightness-high'); // Remove o ícone de lua
    themeIcon.classList.add('bi-moon'); // Adiciona o ícone de sol
  } else {
    body.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.remove('bi-moon'); // Remove o ícone de sol
    themeIcon.classList.add('bi-brightness-high'); // Adiciona o ícone de lua
  }
});
