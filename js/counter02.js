// добавляем прослушку на всем окне 
window.addEventListener('click', function (event) {

// объявляем переменую для счетчика 
    let counter;
    
    

    // проверяем клик строго по кнопкам плюс или минус 
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'  ) {

        

            // находим обертку счетчика

            const counterWrapper = event.target.closest('.counter-wrapper')

            // находим див с числом счетчика
    
             counter =   counterWrapper.querySelector('[data-counter]');
    }


    // проверяем является ли элемент по которому был совершен клин кнопкой плюс
    if (event.target.dataset.action === 'plus' ) {
        counter.innerText = ++counter.innerText;

    }
    // проверяем является ли элемент по которому был совершен клин кнопкой минус

    if (event.target.dataset.action === 'minus' ) {

        

        if ( parseInt(counter.innerText) > 1 ) {
            // изменяем текст в счетчике уменьшая его на 1
            counter.innerText = --counter.innerText;
        
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ) {

        // проверка на товар который находится в корзине
            // console.log('IN CARRT!')
            // удаляем из корзины
            event.target.closest('.cart-item').remove();

            // отображение статуса корзина пустая / полная 
            toggleCartStatus()

             // пересчет общей стоимости товаров в корзине 
            calcCartPrice();


        }

    }


    // проверяем клин на + или - внутри корзины 
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // пересчет общей стоимости товаров в корзине 
        calcCartPrice();

    }



    








});