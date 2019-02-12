$(function() {
    const si = $('.situations__item');
    const situations = $('.situation');

    si.on('click', (e) => {
        const elIndex = si.index($(e.target));
        const targetItem = e.target;

        $(situations).each((i, el) => {
            if (!$(el).hasClass('situation_hidden')) {
                $(el).addClass('situation_hidden');
            }
        });

        $(situations[elIndex]).toggleClass('situation_hidden');


        if (!targetItem.className.includes('situations__item_active')) {
            si.removeClass('situations__item_active');
            $(targetItem).addClass('situations__item_active');
        }
    });
});