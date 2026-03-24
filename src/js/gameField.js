export default class GameField {
  constructor(size = 4) {
    this.size = size; // 4x4
    this.cells = [];
    this.element = null;
    this.onCellClick = null; // колбэк при клике на ячейку
  }

  // Создаем игровое поле
  render() {
    this.element = document.createElement('div');
    this.element.className = 'field';

    // Создаем ячейки
    for (let i = 0; i < this.size * this.size; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.index = i;

      // Добавляем обработчик клика
      cell.addEventListener('click', (event) => {
        if (this.onCellClick) {
          this.onCellClick(cell, i);
        }
      });

      this.element.appendChild(cell);
      this.cells.push(cell);
    }

    return this.element;
  }

    
  // Получить ячейку по индексу
  getCell(index) {
    return this.cells[index];
  }

  // Получить все ячейки
  getAllCells() {
    return this.cells;
  }

  // Очистить поле от гоблина
  clearGoblin() {
    this.cells.forEach(cell => {
      const goblin = cell.querySelector('.goblin');
      if (goblin) {
        cell.removeChild(goblin);
      }
    });
  }
}
