const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}

const onInputValue = (event) => {
    if (event.currentTarget.value !== "") {
        refs.span.textContent = event.currentTarget.value;
    } else { 
        refs.span.textContent = 'Anonymous';
    }
}
 refs.input.addEventListener('input',onInputValue);