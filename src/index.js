import menuDishesTpl from '../src/templates/menu-dishes.hbs';
import menuDishes from './menu.json';
import './sass/main.scss';

// console.log(menuDishesTpl(menuDishes[1]));

// === creat of menu makeup ===
const menuList = document.querySelector('ul.js-menu');
// console.log(menuList);

const menuMarkup = creatMenuDishesMarkup(menuDishes);
function creatMenuDishesMarkup(menuDishes) {
  return menuDishes.map(menuDishesTpl).join('');
}
menuList.insertAdjacentHTML('beforeend', menuMarkup);
// console.log(menuMarkup);

// === Switching of themes ===
// 1. Get the links
const iconTheme = document.querySelector('#theme-switch-toggle');
// console.log(iconTheme);

const bodyClass = document.querySelector('body');
console.log(bodyClass.classList);

// ==localStorage==
// const currentTheme = localStorage.getItem('theme');
// console.log(currentTheme);

// bodyClass.classList.add(currentTheme);

// == listener ==

iconTheme.addEventListener('change', onClickIconTheme);

function onClickIconTheme(evt) {
  if (bodyClass.classList.contains('light-theme')) {
    bodyClass.classList.remove('light-theme');
    bodyClass.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    bodyClass.classList.remove('dark-theme');
    bodyClass.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }

  // if (currentTheme === 'light-theme') {
  //   bodyClass.classList.remove('light-theme');
  //   bodyClass.classList.add('dark-theme');
  //   localStorage.setItem('theme', 'dark-theme');
  // } else {
  //   bodyClass.classList.remove('dark-theme');
  //   bodyClass.classList.add('light-theme');
  //   localStorage.setItem('theme', 'light-theme');
  // }
}
