// Seleciona o botão e o elemento com o atributo data-bs-theme
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const body = document.body;

// Adiciona um evento de clique ao botão
toggleThemeBtn.addEventListener('click', () => {
  // Verifica o tema atual e altera para o tema oposto
  if (body.getAttribute('data-bs-theme') === 'dark') {
    body.setAttribute('data-bs-theme', 'light');
    toggleThemeBtn.textContent = 'Mudar para Tema Escuro'; // Altera o texto do botão
  } else {
    body.setAttribute('data-bs-theme', 'dark');
    toggleThemeBtn.textContent = 'Mudar para Tema Claro'; // Altera o texto do botão
  }
});
