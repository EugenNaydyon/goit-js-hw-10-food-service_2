import './sass/main.scss';
// === Switching of themes ===
// 1. Get the links
const iconTheme = document.querySelector('#theme-switch-toggle');
console.log(iconTheme);

const bodyClass = document.querySelector('body');
console.log(bodyClass.classList);

iconTheme.addEventListener('change', onClickIconTheme);

function onClickIconTheme(evt) {
  console.log('Слушатель работает');
  bodyClass.classList.add('.dark-theme');
  //   if (bodyClass.classList.contains('.light-theme')) {
  //     bodyClass.classList.add('.dark-theme');
  //   }
}
