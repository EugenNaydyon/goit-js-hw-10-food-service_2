import menuDishesTpl from '../src/templates/menu-dishes.hbs';
import menuDishes from './menu.json';
import './sass/main.scss';

// === creat of menu makeup ===
const menuList = document.querySelector('ul.js-menu');

const menuMarkup = creatMenuDishesMarkup(menuDishes);
function creatMenuDishesMarkup(menuDishes) {
  return menuDishes.map(menuDishesTpl).join('');
}
menuList.insertAdjacentHTML('beforeend', menuMarkup);

// === Switching of themes ===
// 1. Get the links
const iconTheme = document.querySelector('#theme-switch-toggle');

const bodyClass = document.querySelector('body');
console.log(bodyClass.classList);

// ==localStorage==
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark-theme') {
  bodyClass.classList.add('dark-theme');
  iconTheme.checked = true;
}

// == listener ==

iconTheme.addEventListener('change', onClickIconTheme);

function onClickIconTheme(evt) {
  const changeLocalStorageTheme = iconTheme.checked;

  if (changeLocalStorageTheme) {
    bodyClass.classList.remove('light-theme');
    bodyClass.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    bodyClass.classList.remove('dark-theme');
    bodyClass.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}
