(function ($) {
    'use strict';

    if ($.fn.owlCarousel) {
        // :: 1.0 Welcome Post Slider Active Code
        $(".welcome-post-sliders").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 10,
            nav: true,
            navText: ['', ''],
            responsive: {
                320: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    }

    // Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.fplus-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.fplus-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    $('#nav-icon').on('click', function () {
        $(this).toggleClass('open');
        $('.fplus-menu-area').toggleClass('menu-open');
    });

    // :: 5.0 ScrollDown Active Code
    $("#scrollDown").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 70
        }, 1500);
    });

    // Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: 4.0 ScrollUp Active JS
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>'
        });
    }

    // :: 5.0 CounterUp Active JS
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 6.0 onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#fplusNav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 2000,
            easing: 'easeOutQuad'
        });
    }

    // :: 7.0 Video Active Code
    if ($.fn.magnificPopup) {
        $('.video--play--btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    // :: 6.0 PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 9.0 wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    // :: 10.0 matchHeight Active JS
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    var $window = $(window);

    // :: 11.0 Preloader active code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);