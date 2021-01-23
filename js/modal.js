function iniciaInfo(infoID) {
    const info = document.getElementById(infoID);
    info.classList.add('mostrar');
    info.addEventListener('click', (e) => {
      if (e.target.id == infoID || e.target.className == 'fechar') {
        info.classList.remove('mostrar');
      }
    });
  }
  const test = document.querySelector('.test');
  test.addEventListener('click', function () {
    iniciaInfo('modal-info');
  });