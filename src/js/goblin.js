export default class Goblin {
  constructor() {
    this.element = null;
    this.currentCell = null;
  }

  // Создаем гоблина
  render() {
    this.element = document.createElement('img');
    this.element.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/AHJ-50/dom/pic/goblin.png';
    this.element.classList.add('goblin');
    this.element.alt = 'Goblin';
    return this.element;
  }

  // Поместить гоблина в ячейку
  placeInCell(cell) {
    if (!cell) return;

    // Если гоблин уже в какой-то ячейке, он автоматически переместится
    // appendChild сам удалит из старого места
    cell.appendChild(this.element);
    this.currentCell = cell;
  }

  // Получить текущую ячейку
  getCurrentCell() {
    return this.currentCell;
  }

  // Проверить, находится ли гоблин в указанной ячейке
  isInCell(cell) {
    return this.currentCell === cell;
  }
}