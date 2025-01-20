const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const themeIcon = document.getElementById('themeIcon');
const header = document.querySelector('.header');
const body = document.body;
const casamento = document.querySelector('.casamento');
const feminino = document.querySelector('.feminino');
const infantil = document.querySelector('.infantil');
const btnPrecoCasamento = document.getElementById('precoCasamento');
const btnPrecoFeminino = document.getElementById('precoFeminino');
const btnPrecoInfantil = document.getElementById('precoCrianca');

console.log(btnPrecoCasamento);
console.log(btnPrecoFeminino);
console.log(btnPrecoInfantil);
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
    header.classList.remove('header-dark');
    header.classList.add('header-light');
    toggleThemeBtn.classList.remove('btn-dark');
    toggleThemeBtn.classList.add('btn-light');
  } else {
    body.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.remove('bi-brightness-high');
    themeIcon.classList.add('bi-moon-stars-fill');
    header.classList.remove('header-light');
    header.classList.add('header-dark');
    toggleThemeBtn.classList.remove('btn-light');
    toggleThemeBtn.classList.add('btn-dark');
  }
});

function cliquePreco(tabela, segTabela, terTabela) {
  tabela.style.display = 'block';
  segTabela.style.display = 'none';
  terTabela.style.display = 'none';
}

btnPrecoCasamento.addEventListener(
  'click',
  cliquePreco(casamento, feminino, infantil)
);
