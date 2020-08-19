$(document).ready(function(){
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    //scrollbar js
    $(".card-body p").mCustomScrollbar();

   //unslider
   $('.feadback').unslider({
    nav: true,
    arrows:{
        prev: '<a class="unslider-arrow prev"><i class="fas fa-chevron-left"></i></a>',
        next: '<a class="unslider-arrow next"><i class="fas fa-chevron-right"></i></a>',
    }
    
   });

   //testimonial slider
   $('.testimonial-slider').owlCarousel({
    loop:true,
    items:6,
    autoplay:true,
    autoplayTimeout:3000,
    slideBy:2,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
});