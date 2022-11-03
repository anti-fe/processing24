const burgerMenu = (burger) => {
    burger.classList.toggle('burger_active');
    document.body.style.overflowY = 'hidden';
}

export default burgerMenu;