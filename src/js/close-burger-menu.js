const closeBurgerMenu = (e) => {
    if(e.target.classList.contains('top-header__mask')) {
        e.target.classList.remove('burger_active');
    }
}

export default closeBurgerMenu;