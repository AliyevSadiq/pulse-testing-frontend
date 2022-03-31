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

    //Modal
    $('.button').on('click',function (e){
       let attr=$(this).data('modal');
       if (attr){
           if($(this).hasClass('button_catalog')){
               let selected_title=$(this).parent().siblings().find('.catalog-item__subtitle').text();
               $(`#order .modal__descr`).text(selected_title);
           }
           $(`.overlay,#${attr}`).css("display", "flex")
               .hide()
               .fadeIn();
       }

    });

    $('.modal__close').on('click',function (){
        const parent=$(this).parent();
        $('.overlay').fadeOut();
        parent.fadeOut();
    })


    //Validation

    validateForm("#consultation form");
    validateForm("#order form");
    validateForm("#consultation-form");

    function validateForm(form){
        $(form).validate({
            rules:{
                name:"required",
                phone:"required",
                email:{
                    required:true,
                    email:true,
                }
            }
        });
    }

    //input mask
    $('input[name="phone"]').mask("+999-99-999-99-99")


    new WOW().init();
});
