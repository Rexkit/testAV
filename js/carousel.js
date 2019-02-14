$slick = false;
function slider(){    
    if($(window).width() < 1020){
        if(!$slick){
            $(".work-info__wrapper").slick({
                dots: true,
                infinite: false,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('.button-prev__wi'),
                nextArrow: $('.button-next__wi'),
                pagination: $('.pagination__wi')
            });

            $slick = true;
        }
    } else if($(window).width() > 1021){
        if($slick){
            $('.work-info__wrapper').slick('unslick');
            $slick = false;
        }
    }
};

$(document).ready(function(){
    slider();
    $(".staff__wrapper").slick({
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.button-prev__staff'),
        nextArrow: $('.button-next__staff'),
        pagination: $('.pagination__staff'),
        responsive: [
            {
              breakpoint: 1040,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            }
        ]
    });
});
$(window).on('resize', function(){
    slider();
});

