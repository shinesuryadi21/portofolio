/**
* Template Name: Personal - v2.5.1
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

!(function($){
    "use strict";

    // 1. Navigation Mobile

    if($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class : 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');
       

        $(document).on('click', '.mobile-nav-toggle', function(e){
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });


        $(document).click(function(e){
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if(!container.is(e.target)&& container.has(e.target).length === 0){
                if($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length){
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    //1. Navigation Mobile ends ====================
    
    //2. Nav menu tabs kedua===================

    $(document).on('click', '.nav-menu a, .mobile-nav a, .cube', function(e){
        if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')&& location.hostname == this.hostname){
            var hash = this.hash;
            var target = $(hash);

            if (target.length){
                e.preventDefault();

                if ($(this).parents('.nav-menu, .mobile-nav').length){
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }
            
                if (hash == '#header') {
                    $('#header').removeClass('header-top');
                    $("section").removeClass('section-show');
                    if ($('body').hasClass('mobile-nav-active')) {
                        $('body').removeClass('mobile-nav-active');
                        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                        $('.mobile-nav-overly').fadeOut();
                    }
                    return;
                }   
                
                
                if(!$('#header').hasClass('header-top')){
                    $('#header').addClass('header-top');
                    setTimeout(function(){
                        $("section").removeClass('section-show');
                        $(hash).addClass('section-show');
                    },350);
                }else {
                    $("section").removeClass('section-show');
                    $(hash).addClass('section-show');
                }        

                $('html, body').animate({
                    scrollTop:0
                }, 350 );

                if ($('body').hasClass('mobile-nav-active')){
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }

                return false;
            }
        }
    });

    //2. Nav menu tabs kedua end ===============
    
//      $(window).on('load', function() {
//     var portfolioIsotope = $('.portfolio-container').isotope({
//       itemSelector: '.portfolio-item',
//       layoutMode: 'fitRows'
//     });

//     $('#portfolio-flters li').on('click', function() {
//       $("#portfolio-flters li").removeClass('filter-active');
//       $(this).addClass('filter-active');

//       portfolioIsotope.isotope({
//         filter: $(this).data('filter')
//       });
//     });

//   });

  $('.card').hover(function(){
    if($(this).hasClass("active")){
      $('.card .bottom').slideUp(function(){
        $('.card').removeClass("active");
      });
    }else {
      $('.card').addClass("active");
      $('.card .bottom').stop().slideDown();
    }
  });

})(jQuery);