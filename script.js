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
  for (let i = 0; i < 5; i += 1) {
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

function firstFunction() {
  for (let i = 0; i < corPaleta.length; i += 1) {
    corPaleta[i].addEventListener('click', selectedColor);
  }
}

firstFunction();

const pixels = document.querySelectorAll('.pixel');

function selectedPixel(event) {
  const evento = event;
  evento.target.className = 'pixel pselected';
}

function secondFunction() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', selectedPixel);
  }
}

secondFunction();
