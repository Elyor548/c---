// нахидит первый попавшися элемент который соотвествует заданому селектору либо находим элементы для взаимодействия \\
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]'); 
const counter = document.querySelector('[data-counter]');


// отслеживаем клик на кнопку минус
btnMinus.addEventListener ('click', function() {
    console.log('Minus click');
    // проверяем чтобы счетчик был больше 1
    if ( parseInt(counter.innerText) > 1 ) {
        // изменяем текст в счетчике уменьшая его на 1
        counter.innerText = --counter.innerText;

    }

});

// отслеживаем клик на кнопку плюс

btnPlus.addEventListener ('click', function() {
    console.log('Plus click');
    // изменяем текст в счетчике увеличивая его на 1

    counter.innerText = ++counter.innerText;

});

