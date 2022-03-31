import './styles/common.css';

import Nav from './components/menu/menu.js';

const initMenu = () => {
  const menuElement = document.querySelector('.js-menu');
  const menu = new Nav(menuElement);
  menu.init();
  return menu;
};

initMenu();

window.initMenu = initMenu;
