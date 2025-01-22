document.addEventListener('DOMContentLoaded', () => {
  const temaSalvo = localStorage.getItem('data-bs-theme') || 'light';
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
  const navLi = document.querySelectorAll('.nav-item');

  body.setAttribute('data-bs-theme', temaSalvo);

  function aplicarTemaEscuro() {
    themeIcon.classList.replace('bi-brightness-high', 'bi-moon-stars-fill');
    header.classList.replace('header-light', 'header-dark');
    toggleThemeBtn.classList.replace('btn-light', 'btn-dark');
  }
  function aplicarTemaClaro() {
    themeIcon.classList.replace('bi-moon-stars-fill', 'bi-brightness-high');
    header.classList.replace('header-dark', 'header-light');
    toggleThemeBtn.classList.replace('btn-dark', 'btn-light');
  }

  function setInitialTheme() {
    if (temaSalvo === 'dark') {
      aplicarTemaEscuro();
    } else {
      aplicarTemaClaro();
    }
  }

  setInitialTheme();

  toggleThemeBtn.addEventListener('click', () => {
    const temaAtual = body.getAttribute('data-bs-theme');
    if (temaAtual === 'dark') {
      body.setAttribute('data-bs-theme', 'light');
      aplicarTemaClaro();
      localStorage.setItem('data-bs-theme', 'light');
    } else {
      body.setAttribute('data-bs-theme', 'dark');
      aplicarTemaEscuro();
      localStorage.setItem('data-bs-theme', 'dark');
    }
  });

  function cliquePreco(tabela, segTabela, terTabela) {
    tabela.style.display = 'block';
    segTabela.style.display = 'none';
    terTabela.style.display = 'none';
  }

  navLi.forEach((navLink) => {
    navLink.addEventListener('click', () => {});
  });

  btnPrecoCasamento.addEventListener('click', () => {
    cliquePreco(casamento, feminino, infantil);
  });
  btnPrecoFeminino.addEventListener('click', () => {
    cliquePreco(feminino, casamento, infantil);
  });
  btnPrecoInfantil.addEventListener('click', () => {
    cliquePreco(infantil, feminino, casamento);
  });
});
