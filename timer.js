const numberInputField = document.querySelector('.number-input-field');
const numberUp = document.querySelector('.number-up');
const numberDown = document.querySelector('.number-down');

numberUp.addEventListener('click', () => {
    const currentValue = Number(numberInputField.value);
    numberInputField.value = currentValue + 1;
});

numberDown.addEventListener('click', () => {
    const currentValue = Number(numberInputField.value);
    if (currentValue > 0) {
        numberInputField.value = currentValue - 1;
    }
});