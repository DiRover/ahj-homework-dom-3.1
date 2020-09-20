/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-globals */
import { container } from './app';

const score = document.getElementById('score');
const missingHits = document.getElementById('missingHits');

let point = 0;
let misPoint = 0;
score.textContent = 0;
missingHits.textContent = 0;

export default function hitGoblin() {
  event.preventDefault();
  const targer = event.target;
  if (targer.closest('.active')) {
    targer.removeAttribute('src');
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
