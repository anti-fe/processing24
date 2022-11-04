const rangeInput = (e) => {
    const rangeValue = document.querySelector('.calculator__input-val');
    rangeValue.value = e.target.value + ' литров';

}

export default rangeInput;