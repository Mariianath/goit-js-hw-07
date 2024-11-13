const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const input = controls.querySelector('input');

controls.querySelector('[data-create]').addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

controls.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
  }
  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
