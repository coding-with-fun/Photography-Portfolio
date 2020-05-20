$(document).ready(function () {
    'use strict';

    //********* Page Loader js

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);


    //********* Typed js

    var element = $(".text-affect");

    $(function(){
       element.typed({
           strings: ["Designer.", "Developer.", "Freelancer."],
           loop: true,
           typeSpeed: 90
       });
    });


    //********** Menu Background Color Change While Scroll


    $(window).on('scroll', function () {
        var menu_area = $('.nav-area');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });


    //********** Menu hides after click (mobile menu)


    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });


    //*********** Scrollspy js

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });


    //************ Smooth Scroll js

    $('a.smooth-menu,a.custom-btn,a.custom-btn-two').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });


   //************ Magnific Popup

    $('.galleryItem').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }

    });


    //************ Shuffle js


    var shuffleme = (function( $ ) {
        var $grid = $('#grid'),
            $filterOptions = $('.portfolio-sorting li'),
            $sizer = $grid.find('.shuffle_sizer'),

            init = function() {

                setTimeout(function() {
                    listen();
                    setupFilters();
                }, 100);

                $grid.shuffle({
                    itemSelector: '[class*="col-"]',
                    sizer: $sizer
                });
            },


            setupFilters = function() {
                var $btns = $filterOptions.children();
                $btns.on('click', function(e) {
                    e.preventDefault();
                    var $this = $(this),
                        isActive = $this.hasClass( 'active' ),
                        group = isActive ? 'all' : $this.data('group');


                    if ( !isActive ) {
                        $('.portfolio-sorting li a').removeClass('active');
                    }

                    $this.toggleClass('active');


                    $grid.shuffle( 'shuffle', group );
                });

                $btns = null;
            },

            listen = function() {
                var debouncedLayout = $.throttle( 300, function() {
                    $grid.shuffle('update');
                });

                $grid.find('img').each(function() {
                    var proxyImage;

                    if ( this.complete && this.naturalWidth !== undefined ) {
                        return;
                    }

                    proxyImage = new Image();
                    $( proxyImage ).on('load', function() {
                        $(this).off('load');
                        debouncedLayout();
                    });

                    proxyImage.src = this.src;
                });


                setTimeout(function() {
                    debouncedLayout();
                }, 500);
            };

        return {
            init: init
        };
    }( jQuery ));


    shuffleme.init();


    //************* Testimonial Carousel

    $("#testimonial-carousel").owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 800,
        paginationSpeed: 800,
        smartSpeed: 500,
        autoplay: true,
        singleItem: true,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            680:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    //************* Brand Carousel

    $("#brand-carousel").owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 800,
        paginationSpeed: 800,
        smartSpeed: 500,
        autoplay: true,
        singleItem: true,
        loop: true,
        responsive:{
            0:{
                items:2
            },
            680:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });





});



