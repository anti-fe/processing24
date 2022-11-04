import burgerMenu from "./src/js/burger-menu.js";
import closeBurgerMenu from "./src/js/close-burger-menu.js";
import rangeInput from "./src/js/range-input.js";
import sertificatesSlider from "./src/js/slider-sertificates.js";

const burgerCont = document.querySelector('.top-header__mask');
const burger = document.querySelector('.burger-menu');

const rangeinputBox = document.querySelector('.calculator__range');

// OPEN BURGER-MENU
burger.addEventListener('click', ()=>burgerMenu(burgerCont));
// CLOSE BURGER-MENU
burgerCont.addEventListener('click', (e)=>closeBurgerMenu(e));
// SET VAKUE OF RANGE INPUT
rangeinputBox.addEventListener('input', (e)=>rangeInput(e));
