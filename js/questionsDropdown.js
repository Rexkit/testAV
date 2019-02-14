$(function () {
    $('.questions-box__header').on('click', (e) => {
        if(!$(e.target.parentNode).hasClass('questions-box__card_active')) {
            $(e.target.parentNode).addClass('questions-box__card_active');
        } else {
            $(e.target.parentNode).removeClass('questions-box__card_active');
        }
    });
});