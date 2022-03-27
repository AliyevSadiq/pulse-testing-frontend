$(document).ready(function () {
    $('.slider__items').slick({
        infinite: true,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/icons/left.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/icons/right.svg" alt="right"></button>',
        responsive: [
            {
                breakpoint: 878,
                settings: {
                    arrows: false
                }
            },
        ]
    });
    $('.catalog__tab').on('click', function () {
        $('.catalog__tab').removeClass('catalog__tab_active');
        $(this).addClass('catalog__tab_active');
        let catalog_attr = $(this).data('catalog');
        $('.catalog__content').each(function () {
            if ($(this).data('catalog') === catalog_attr) {
                $(this).addClass('catalog__content_active');
            } else {
                $(this).removeClass('catalog__content_active');
            }
        })
    })
    $('.catalog-item__link').on('click', function (e) {
        e.preventDefault();

        if ($(this).parent().hasClass('catalog-item__content_active')) {
            $(this).parent().removeClass('catalog-item__content_active');
            $(this).parent().next().addClass('catalog-item__list_active');
        } else {
            $(this).parent().removeClass('catalog-item__list_active');
            $(this).parent().prev().addClass('catalog-item__content_active')
        }

    })
});
