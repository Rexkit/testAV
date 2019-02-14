let didScroll;
let lastScrollTop = 0;
const delta = 5;
const navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

const hasScrolled = () => {
    let st = $(this).scrollTop();
    
    if (Math.abs(lastScrollTop - st) <= delta) {
        return;
    }

    if (st > lastScrollTop && st > navbarHeight) {
        if ($('.main-nav').hasClass('responsive')) {
            $('.main-nav').toggleClass('responsive');
        }
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}