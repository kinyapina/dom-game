export default class ScoreCounter {
  constructor() {
    this.score = 0;
    this.element = null;
    this.onScoreChange = null; // колбэк при изменении счета
  }

  // Создаем DOM элемент счетчика
  render() {
    this.element = document.createElement('div');
    this.element.className = 'score-board';
    this.updateDisplay();
    return this.element;
  }

  // Обновляем отображение
  updateDisplay() {
    if (this.element) {
      this.element.innerHTML = `🎯 Счет: <span id="score">${this.score}</span>`;
    }
  }

  // Увеличиваем счет
  increment() {
    this.score++;
    this.updateDisplay();
    if (this.onScoreChange) {
      this.onScoreChange(this.score);
    }
  }

  // Сбрасываем счет (если нужно)
  reset() {
    this.score = 0;
    this.updateDisplay();
  }

   // Получаем текущий счет
   getScore() {
    return this.score;
   }
}