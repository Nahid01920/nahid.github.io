(function ($) {
    "use strict";
    jQuery(document).ready(function() {

	    /*
	    ==========================================
	    =   This code for Main Slider
	    ==========================================
	    */ 
        var bgSlide = $('#bg-slide');
        bgSlide.owlCarousel({
        	items: 1,
        	loop: true,
        	nav: false,
        	dots: false,
        	autoPlay: true
        });



	    /*
	    ==========================================
	    =   This code for Easing
	    ==========================================
	    */ 
		$("a.nav-link").on("click", function(e) {
			e.preventDefault();
			var target = $($(this).attr("href"));
			if (target) {
			    $("html, body").animate({
			        scrollTop: target.offset().top
			    }, 1000);
			}
		});



	    /*
	    ==========================================
	    =   This code for Fixed Navigation
	    ==========================================
	    */ 
	    $(window).scroll(function() {
			if ($(window).scrollTop() > 0 ){
				$('.navigation-wrap').addClass('fixed');
			} else {
				$('.navigation-wrap').removeClass('fixed');
			};			
		});



	    /*
	    ==========================================
	    =   This code for SlickNav(Mobile Menu)
	    ==========================================
	    */ 
		$(function(){
			$('.main-menu').slicknav({
				prependTo: '#mobileMenu'
			});
		});   


	    /*
	    ==========================================
	    =   This code for Typed JS
	    ==========================================
	    */ 
        $("#typed").typed({
            strings: ["I'm a web developer.", "I'm a Web Designer.", "I'm creative."],
            typeSpeed: 10,
            loop: true,
            backDelay: 2000,
        });  



	    /*
	    ==========================================
	    =   This code for Parallax background
	    ==========================================
	    */
	    var ctaParallax 	 = $(".cta-wrap"),
	        serviceParallax  = $("#services"),
	        testiParallax    = $("#testimonial"),
	        contactParallax  = $("#contact");

	    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
	        ctaParallax.css({"background-attachment": "scroll"});
	        serviceParallax.css({"background-attachment": "scroll"});
	        testiParallax.css({"background-attachment": "scroll"});
	        contactParallax.css({"background-attachment": "scroll"});
	    } else {
	        ctaParallax.parallax("50%", 0.4);
	        serviceParallax.parallax("50%", 0.4);
	        testiParallax.parallax("50%", 0.4);
	        contactParallax.parallax("50%", 0.4);
	    }




	    /*
	    ==========================================
	    =   This code for MixItUp
	    ==========================================
	    */
	    $(window).load(function(){	    	
		    var $portfolio = $('.portfolio-items');

		    $portfolio.isotope({		  
			  itemSelector: 'a',
			  layoutMode: 'masonry',
			  resizable: true
			});

			// filter items on button click
			$('.portfolio-filter li').on( 'click', function(e) {
				e.preventDefault();
				var filterValue = $(this).attr('data-filter');
				$portfolio.isotope({ filter: filterValue });
				$('.portfolio-filter li').removeClass('active');
				$(this).addClass('active');
			});
	    });


	    /*
	    ==========================================
	    =   This code for magnificPopup
	    ==========================================
	    */
	    $(".portfolio-items a").magnificPopup({
	        type: 'image',
	        removalDelay: 300,
	        mainClass: 'mfp-with-zoom',
	        gallery: {
	            enabled: true
	        },
	        zoom: {
	            enabled: true,
	            duration: 300, // duration of the effect, in milliseconds
	            easing: 'ease-in-out', // CSS transition easing function
	            opener: function (openerElement) {
	                return openerElement.is('img') ? openerElement : openerElement.find('img');
	            }
	        }
	    });   



 		/*
	    ==========================================
	    =   This code for Testimonials Slide
	    ==========================================
	    */
        var testimonialSlide = $('#testimonial_slide');
        testimonialSlide.owlCarousel({
        	items: 1,
        	loop: true,
        	nav: true,
        	dots: false,
        	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });



	    /*
	    ==========================================
	    =   This code for Logo Carousel
	    ==========================================
	    */
        var logoSlide = $('#logo-carousel');
        logoSlide.owlCarousel({
        	loop: true,
        	nav: false,
        	dots: false,
        	margin: 30,
        	responsive : {
	        	480 : {
			        items: 2
			    },
	        	768 : {
			        items: 4
			    }
        	}
        });



    });
})(jQuery);