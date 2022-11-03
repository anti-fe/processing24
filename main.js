import burgerMenu from "./src/js/burger-menu.js";
import closeBurgerMenu from "./src/js/close-burger-menu.js";

const burgerCont = document.querySelector('.top-header__mask');
const burger = document.querySelector('.burger-menu');

// OPEN BURGER-MENU
burger.addEventListener('click', ()=>burgerMenu(burgerCont));
// CLOSE BURGER-MENU
burgerCont.addEventListener('click', (e)=>closeBurgerMenu(e));