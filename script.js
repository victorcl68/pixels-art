const corPaleta = document.querySelectorAll('.color');

function selectedColor(event) {
  const corEscolhida = document.querySelector('.selected');
  corEscolhida.className = 'color';
  const evento = event;
  evento.target.className += ' selected';
}

function firstFunction() {
  for (let i = 0; i < corPaleta.length; i += 1) {
    corPaleta[i].addEventListener('click', selectedColor);
  }
}

firstFunction();
