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

function cliquePreco(tabela, segTabela, terTabela) {
  tabela.style.display = 'block';
  segTabela.style.display = 'none';
  terTabela.style.display = 'none';
}

btnPrecoCasamento.addEventListener('click', () => {
  cliquePreco(casamento, feminino, infantil);
});
btnPrecoFeminino.addEventListener('click', () => {
  cliquePreco(feminino, casamento, infantil);
});
btnPrecoInfantil.addEventListener('click', () => {
  cliquePreco(infantil, feminino, casamento);
});

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
  // const temaAtual = document.body.getAttribute('data-bs-theme')
  if (body.getAttribute('data-bs-theme') === 'dark') {
    body.setAttribute('data-bs-theme', 'light');
    themeIcon.classList.remove('bi-moon-stars-fill');
    themeIcon.classList.add('bi-brightness-high');
    header.classList.remove('header-dark');
    header.classList.add('header-light');
    toggleThemeBtn.classList.remove('btn-dark');
    toggleThemeBtn.classList.add('btn-light');
    localStorage.setItem('data-bs-theme', 'light');
  } else {
    body.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.remove('bi-brightness-high');
    themeIcon.classList.add('bi-moon-stars-fill');
    header.classList.remove('header-light');
    header.classList.add('header-dark');
    toggleThemeBtn.classList.remove('btn-light');
    toggleThemeBtn.classList.add('btn-dark');
    localStorage.setItem('data-bs-theme', 'dark');
  }
});

// tema pagina

document.addEventListener('DOMContentLoaded', () => {
  const temaSalvo = localStorage.getItem('data-bs-theme');
  document.body.setAttribute('data-bs-theme', temaSalvo);
});

// document.addEventListener('DOMContentLoaded', () => {
//   // Set initial theme
//   // setTheme(savedTheme);
//   const tema = body.getAttribute('data-bs-theme');

//   const savedTheme = localStorage.setItem('theme', tema);
//   document.body.setAttribute('data-bs-theme', savedTheme);

//   const temaAtual = localStorage.getItem('theme');
//   document.body.setAttribute('data-bs-theme', temaAtual);

// toggleThemeBtn.addEventListener('click', () => {
//   const currentTheme = document.documentElement.getAttribute('data-bs-theme');
//   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//   setTheme(newTheme);
// });

// function setTheme(theme) {
//   document.documentElement.setAttribute('data-bs-theme', theme);
//   localStorage.setItem('theme', theme);

//   // Update button and icon classes
//   if (theme === 'dark') {
//     themeIcon.classList.replace('bi-brightness-high', 'bi-moon');
//     toggleThemeBtn.classList.replace('btn-light', 'btn-dark');
//     document.body.classList.add('bg-dark', 'text-white');
//     document.body.classList.remove('bg-light', 'text-dark');
//     header.classList.add('bg-dark', 'text-white');
//     header.classList.remove('bg-light', 'text-dark');
//   } else {
//     themeIcon.classList.replace('bi-moon', 'bi-brightness-high');
//     toggleThemeBtn.classList.replace('btn-dark', 'btn-light');
//     document.body.classList.add('bg-light', 'text-dark');
//     document.body.classList.remove('bg-dark', 'text-white');
//     header.classList.add('bg-light', 'text-dark');
//     header.classList.remove('bg-dark', 'text-white');
//   }
// }
