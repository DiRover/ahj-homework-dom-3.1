/* eslint-disable spaced-comment */
/* eslint-disable consistent-return */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
// получаем поле
import getRandom from './getRandom';
import getField from './getField';
import hitGoblin from './hitGoblin';

getField();

export const container = document.getElementById('container');
const cells = document.getElementsByClassName('field_cell');

export const missingHits = document.getElementById('missingHits');

export let misPoint = 0;

missingHits.textContent = 0;

container.addEventListener('click', hitGoblin);

// получаем рандомный индекс
let index = getRandom(0, (cells.length - 1));
// устанавливаем гоблина в первоначальное положение
cells[index].firstChild.setAttribute('src', 'https://github.com/netology-code/ahj-homeworks/raw/master/dom/pic/goblin.png');
// добавляем значение для активной ячйки с гоблином
cells[index].classList.add('active');
// функция для смены поля с гоблином
function replaceGoblin() {
  const goblin = document.getElementsByClassName('active');
  // проверяеи, остался ли гоблин на своём месте по истечении времени
  // если остался, то удар считается пропущенным
  if (goblin.length !== 0) {
    goblin[0].firstChild.removeAttribute('src');
    goblin[0].classList.remove('active');
    misPoint += 1;
    missingHits.innerHTML = misPoint;
    if (misPoint === 5) {
      container.innerHTML = '<h1 id="title">Вы проиграли!</h1>';
      return null; //останавливаем выполнение кода, чтобы не вылетали ошибки в консоль
    }
  }
  index = getRandom(0, (cells.length - 1), index);
  cells[index].firstChild.setAttribute('src', 'https://github.com/netology-code/ahj-homeworks/raw/master/dom/pic/goblin.png');
  cells[index].classList.add('active');
}

setInterval(replaceGoblin, 1000);
