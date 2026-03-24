import './style.css';
import Game from './js/game';

// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  if (!container) {
    // Если контейнера нет, создаем
    const body = document.body;
    const newContainer = document.createElement('div');
    newContainer.className = 'container';
    body.appendChild(newContainer);
  }

  const game = new Game(document.querySelector('.container'));
  game.init();
});