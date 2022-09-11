// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//   подставляет его текущее значение в span#name - output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".
const myInput = document.querySelector('#name-input')
const mySpan = document.querySelector('#name-output')

myInput.addEventListener('input', newInput);

function newInput(e) {
 
    mySpan.textContent = e.currentTarget.value;

    if (e.currentTarget.value === '') {
        mySpan.textContent = 'Anonymous'
    }
}

// const refs = {
//     input: document.querySelector('#name-input'),
//     nameLabel : document.querySelector('#name-output'),
// }
// refs.input.addEventListener('input', onInputChange);
// function onInputChange(event) {
//   refs.nameLabel.textContent = event.currentTarget.value;
//   if (event.currentTarget.value === '') {
//     refs.nameLabel.textContent = 'Anonymous'
// }
// }