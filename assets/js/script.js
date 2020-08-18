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
});