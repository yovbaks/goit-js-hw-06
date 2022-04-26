const inputRef = document.querySelector('#validation-input');
const validLength = parseInt(inputRef.dataset.length);

inputRef.addEventListener('blur', () => {
    if (inputRef.value.length === validLength) {
        inputRef.setAttribute('class', 'valid')
    } else {
        inputRef.removeAttribute('class', 'valid');
        inputRef.setAttribute('class', 'invalid');
    }
});

