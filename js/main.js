$(function(){ /*подключение слика для создания каталога-баннера*/
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="/images/left_arrow.png" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="/images/right_arrow.png" alt=""></button>',
    }); 

    $('.tab').on('click', function(e){
          e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tab-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tab-content-item--active');
    });

    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active')
    });

    $('.product__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="/images/left_arrow.png" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="/images/right_arrow.png" alt=""></button>',
    });
});