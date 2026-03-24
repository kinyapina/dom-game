import GameField from './gameField';
import Goblin from './goblin';
import ScoreCounter from './scoreCounter';

export default class Game {
  constructor(container) {
    this.container = container;
    this.gameField = new GameField(4);
    this.goblin = new Goblin();
    this.ScoreCounter = new ScoreCounter();
    this.interval = null;
  }

   // Инициализация игры
   init() {
    // Очищаем контейнер
    this.container.innerHTML = '';

    // Рендерим компоненты
    const scoreElement = this.ScoreCounter.render();
    const fieldElement = this.gameField.render();

    // Добавляем в контейнер
    this.container.appendChild(scoreElement);
    this.container.appendChild(fieldElement);

    // Рендерим гоблина (создаем элемент)
    this.goblin.render();

    // Подписываемся на события
    this.setupEventListeners();

    // Размещаем гоблина в случайную ячейку
    this.placeGoblininRandomly();

    // Запускаем интервал перемещения
    this.startMoving();
   }

   // Настройка обработчиков событий
   setupEventListeners() {
    // Обработчик клика по ячейке
    this.gameField.onCellClick = (cell, index) => {
      if (this.goblin.isInCell(cell)) {
        // Попали по гоблину!
        this.ScoreCounter.increment();

        // Визуальный эффект попадания
        cell.style.transform = 'scale(0.95)';
        setTimeout(() => {
          cell.style.transform = '';
        }, 150);
      }
    }

    // Можно добавить колбэк на изменение счета
    this.ScoreCounter.onScoreChange = (newScore) => {
      console.log(`Score changed: ${newScore}`);
    }
   }

   // Разместить гоблина в случайную ячейку (не в ту же)
   placeGoblininRandomly() {
    const cells = this.gameField.getAllCells();
    const currentCell = this.goblin.getCurrentCell();

    let currentIndex = -1;
    if (currentCell) {
      currentIndex = cells.indexOf(currentCell);
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cells.length);
    } while (randomIndex === currentIndex);
    
    const newCell = cells[randomIndex];
    this.goblin.placeInCell(newCell);
   }

   // Запускаем перемещение гоблина
   startMoving() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(() => {
      this.placeGoblininRandomly();
    }, 1000);
   }

   // Останавливаем игру
   stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
   }
}