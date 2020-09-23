/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-globals */
import { container, misPoint, missingHits } from './app';

const score = document.getElementById('score');
let point = 0;
score.textContent = 0;

export default function hitGoblin() {
  event.preventDefault();
  const { target } = event;
  if (target.closest('.active')) {
    target.removeAttribute('src');
    target.closest('.active').classList.remove('active');
    point += 1;
    score.textContent = point;
    if (point === 5) {
      container.innerHTML = '<h1 id="title">Вы выиграли!</h1>';
    }
  } else {
    misPoint += 1;
    missingHits.innerHTML = misPoint;
    if (misPoint === 5) {
      container.innerHTML = '<h1 id="title">Вы проиграли!</h1>';
    }
  }
}
