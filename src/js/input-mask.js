const inputMask = () => {
    const listOfInputTel = document.querySelectorAll('.phone-input');
    
    listOfInputTel.forEach(item => {
        const phoneMask = new IMask(item, {
            mask: "+{7}(000)000-00-00",
        });
    })
    
}

export default inputMask;