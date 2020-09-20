/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
// получаем поле
import getRandom from './getRandom';
import getField from './getField';
import hitGoblin from './hitGoblin';

getField();

export const container = document.getElementById('container');
const cells = document.getElementsByClassName('field_cell');

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
  goblin[0].firstChild.removeAttribute('src');
  goblin[0].classList.remove('active');
  index = getRandom(0, (cells.length - 1), index);
  cells[index].firstChild.setAttribute('src', 'https://github.com/netology-code/ahj-homeworks/raw/master/dom/pic/goblin.png');
  cells[index].classList.add('active');
}

setInterval(replaceGoblin, 1000);
