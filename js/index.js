/**
 * Created by admin on 06.04.2017.
 */
$(function(){

    $(document).on('mouseover', '.photo-for-products', function (e) {
        $(this).children('.product-actions').stop(true, true).fadeTo(500, 1);
    });
    $(document).on('mouseout', '.photo-for-products', function (e) {
        $(this).children('.product-actions').stop(true, true).fadeTo(500, 0);
    });

    $('.wrapper-slider-caruselle').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});
