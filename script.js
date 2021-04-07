const firstTr = document.createElement('tr');
const firstTable = document.querySelector('#color-palette');
firstTable.appendChild(firstTr);
for (let i = 0; i < 4; i += 1) {
  const firstTd = document.createElement('td');
  firstTd.className = 'color';
  firstTr.appendChild(firstTd);
}

document.querySelector('.color').className += ' selected';

for (let i = 0; i < 5; i += 1) {
  const newTr = document.createElement('tr');
  const theTable = document.querySelector('#pixel-board');
  theTable.appendChild(newTr);
  for (let index = 0; index < 5; index += 1) {
    const newTd = document.createElement('td');
    newTd.className = 'pixel';
    newTr.appendChild(newTd);
  }
}

const corPaleta = document.querySelectorAll('.color');

function selectedColor(event) {
  const corEscolhida = document.querySelector('.selected');
  corEscolhida.className = 'color';
  const evento = event;
  evento.target.className += ' selected';
}

function selectedPixel(event) {
  const evento = event;
  evento.target.className = 'pixel pselected';
  const colorSelected = document.querySelector('.selected');
  const style = getComputedStyle(colorSelected);
  const bgColorSelected = style.backgroundColor;
  evento.target.style.backgroundColor = bgColorSelected;
}
/* Essa função acima do código que é para resolução do requisito 8 só consegui
completar por causa da ajuda do Lucas Martins da Silva e do Matheus Henrique
de Gois */

for (let i = 0; i < corPaleta.length; i += 1) {
  corPaleta[i].addEventListener('click', selectedColor);
}

const pixels = document.querySelectorAll('.pixel');

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', selectedPixel);
}

const clearButton = document.querySelector('#clear-board');
const allPixel = document.querySelectorAll('.pixel');
clearButton.addEventListener('click', () => {
  for (let index = 0; index < allPixel.length; index += 1) {
    allPixel[index].style.backgroundColor = 'white';
  }
});
