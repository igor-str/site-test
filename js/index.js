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

});
