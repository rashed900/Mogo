$(document).ready(function(){
	
    // Start typed js
    var typed = new Typed('.typed-js-text', {
        strings: [
            "Akjm Al-Amin",
            "A DESIGNER",
            "A FREELANCER",
            "A DEVELOPER",
            "A ENTREPRENEUR",
        ],
        typeSpeed: 50,
        loop:true,
        typeDelay:2000
      });

      //End typed js

    // Start  unslider
    $(".about-text-slide").unslider({
        nav: true,
		arrows: {
			
			prev: '<a class="unslider-arrow prev"><i class="fas fa-chevron-left"></i></a>',
			next: '<a class="unslider-arrow next"><i class="fas fa-chevron-right"></i></a>',
		}
    });
    // End  unslider

    // Start progress bar
               $(".poregress-per").each(function(){
                var progressBar = $(this);
                var per = progressBar.attr('per');
                progressBar.css("width", per+('%'));
            });
     
    // End progress bar
	
	//Start wow.js
	
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
	//End wow.js
    

    // Start counter

    $('.count').counterUp({
        delay: 10,
        time: 2000
    });
    // End counter

    // Start masonary
    // $(function(){
    //     $('.masonary-gallery').masonryGrid({
    //       'columns': 3
    //     });
    //   });
    // End masonary


    // Start Carousel
    $(".slider-area").owlCarousel({
        items:1,
        loop:true,
        autoplay:false,
        autoplayTimeout:5000,
        slideBy:1,
        smartSpeed:450
    })
    // End Carousel

    // Start blog post Carousel
    $(".blog-post-slide").owlCarousel({
        items:3,
        loop:true,
        autoplay:false,
        autoplayTimeout:5000,
        slideBy:1,
        smartSpeed:500,
        responsive:{
            0:{
                items:1
                
                },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        
        }
    })
    // End blog post Carousel

    // start sticky js
    $("#sticky_navbar").sticky({
        topSpacing:0
    });
    // start sticky js
   
	
})
