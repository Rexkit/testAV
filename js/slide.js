$(function() {
    const si = $('.situations__item');
    const qi = $('.questions__item');
    const situations = $('.situation');
    const questions = $('.questions-box');

    const onclick = (e) => {
        let elIndex = 0, collectionArray = [], itemsArray = [], hiddenClass = '', activeClass = '';
        const targetItem = e.target;
        if ($(targetItem).hasClass('situations__item')) {
            elIndex = si.index($(targetItem));
            collectionArray = situations;
            itemsArray = si;
            hiddenClass = 'situation_hidden';
            activeClass = 'situations__item_active';
        } if ($(targetItem).hasClass('questions__item'))  {
            elIndex = qi.index($(targetItem));
            collectionArray = questions;
            itemsArray = qi;
            hiddenClass = 'questions-box_hidden';
            activeClass = 'questions__item_active';
        }
        

        $(collectionArray).each((i, el) => {
            if (!$(el).hasClass(hiddenClass)) {
                $(el).addClass(hiddenClass);
            }
        });

        $(collectionArray[elIndex]).toggleClass(hiddenClass);


        if (!targetItem.className.includes(activeClass)) {
            itemsArray.removeClass(activeClass);
            $(targetItem).addClass(activeClass);
        }
    }

    si.on('click', onclick);
    qi.on('click', onclick);
});