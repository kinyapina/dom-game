import './style.css';

const field = document.querySelector('.field');
let currentCell = null;

for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');

  cell.classList.add('cell');

  field.appendChild(cell);
}

//создаем гоблина
const goblin = document.createElement('img');
goblin.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/AHJ-50/dom/pic/goblin.png';
goblin.classList.add('goblin');

// Получаем все ячейки
const cells = document.querySelectorAll('.cell');

// Функция для размещения гоблина в случайную ячейку
function placeGoblin() {
  // Определяем индекс текущей ячейки (если гоблин уже где-то есть)
  let currentCellId = -1;
  if (currentCellId) {
    // Преобразуем NodeList в массив, чтобы использовать indexOf
    currentCellId = Array.from(cells).indexOf(currentCell);
  }

  // Выбираем случайную ячейку, но не ту же самую
  let randomCellId;
  do {
    randomCellId = Math.floor(Math.random() * cells.length);
  }
  while (randomCellId === currentCellId); // повторяем, пока не выберем другую ячейку

  // Получаем новую ячейку по случайному индексу
  const newCell = cells[randomCellId];

  // Перемещаем гоблина в новую ячейку
  // Важно: appendChild автоматически удалит гоблина из старой ячейки!
  newCell.appendChild(goblin);

  // Обновляем текущую ячейку
  currentCell = newCell;
} 

// Размещаем гоблина при загрузке страницы
placeGoblin();

// Добавь в конец файла:
setInterval(() => {
  placeGoblin();
}, 1000);