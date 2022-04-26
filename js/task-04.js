const ref = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}
// console.log(ref);


let counterValue = 0;

const onDownValue = () => {
    counterValue -= 1;
    ref.value.textContent = counterValue;
    return counterValue;
}

const onUpValue = () => {
    counterValue += 1;
    ref.value.textContent = counterValue;
    return counterValue;
}

ref.decrement.addEventListener('click', onDownValue);
ref.increment.addEventListener('click', onUpValue);