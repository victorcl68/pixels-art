// Refatorar todo código
const creationFirstTr = document.createElement('tr');
const creationPalette = document.querySelector('#color-palette');
creationPalette.appendChild(creationFirstTr);
for (let index = 0; index < 4; index += 1) {
  const creationFirstTd = document.createElement('td');
  creationFirstTd.className = 'color';
  creationFirstTr.appendChild(creationFirstTd);
}

document.querySelector('.color').className += ' selected';

const pixelBoard = document.querySelector('#pixel-board');

for (let index = 0; index < 5; index += 1) {
  const createTr = document.createElement('tr');
  createTr.className = 'pixeltr';
  pixelBoard.appendChild(createTr);
  for (let count = 0; count < 5; count += 1) {
    const createSecondTd = document.createElement('td');
    createSecondTd.className = 'pixel';
    createTr.appendChild(createSecondTd);
  }
}

const corPaleta = document.querySelectorAll('.color');

const selectedColor = (event) => {
  const corEscolhida = document.querySelector('.selected');
  corEscolhida.className = 'color';
  const evento = event;
  evento.target.className += ' selected';
};

const selectedPixel = (event) => {
  const evento = event;
  evento.target.className = 'pixel pselected';
  const colorSelected = document.querySelector('.selected');
  const style = getComputedStyle(colorSelected);
  const bgColorSelected = style.backgroundColor;
  evento.target.style.backgroundColor = bgColorSelected;
};
/* A função acima do código que é para resolução do requisito 8 só consegui completar
por causa da ajuda do Lucas Martins da Silva e do Matheus Henrique de Gois */

for (let index = 0; index < corPaleta.length; index += 1) {
  corPaleta[index].addEventListener('click', selectedColor);
}

const pixels = document.querySelectorAll('.pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', selectedPixel);
}

const clearButton = document.querySelector('#clear-board');
const allPixel = document.querySelectorAll('.pixel');

clearButton.addEventListener('click', () => {
  for (let index = 0; index < allPixel.length; index += 1) {
    allPixel[index].style.backgroundColor = 'white';
  }
});

const generateNewBoard = (param) => {
  pixelBoard.innerHTML = '';
  let theParam = param;
  if (theParam < 5) {
    theParam = 5;
  } else if (theParam > 50) {
    theParam = 50;
  }
  for (let index = 0; index < theParam; index += 1) {
    const createTr = document.createElement('tr');
    createTr.className = 'pixeltr';
    pixelBoard.appendChild(createTr);
    for (let count = 0; count < theParam; count += 1) {
      const createSecondTd = document.createElement('td');
      createSecondTd.className = 'pixel';
      createTr.appendChild(createSecondTd);
    }
  }
};

const buttonBoardSize = document.querySelector('#generate-board');
const inputBoardSize = document.querySelector('#board-size');
console.log(inputBoardSize.value);
buttonBoardSize.addEventListener('click', () => {
  if (inputBoardSize.value.length === 0) {
    alert('Board inválido!');
  }
  generateNewBoard(inputBoardSize.value);
});
