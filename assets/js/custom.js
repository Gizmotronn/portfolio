(function($) {
  
  "use strict";

  // Preloader 
  function stylePreloader() {
    $('body').addClass('preloader-deactive');
  }

  // Background Image
  $('[data-bg-img]').each(function() {
    $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
  });

  // Off Canvas JS
  var canvasWrapper = $(".off-canvas-wrapper");
  $(".btn-menu").on('click', function() {
      canvasWrapper.addClass('active');
      $("body").addClass('fix');
  });

  $(".close-action > .btn-close, .off-canvas-overlay").on('click', function() {
      canvasWrapper.removeClass('active');
      $("body").removeClass('fix');
  });

  //Responsive Slicknav JS
  $('.main-menu').slicknav({
      appendTo: '.res-mobile-menu',
      closeOnClick: true,
      removeClasses: true,
      closedSymbol: '<i class="icon-arrows-plus"></i>',
      openedSymbol: '<i class="icon-arrows-minus"></i>'
  });

  // lightSlider JS

    // Home Portfolio Fullscreen Text Slider JS
    $(".portfolio-fullscreen-text-slider-content").lightSlider({
        item: 1,
        slideMargin: 0,
        auto: false,
        loop: true,
        vertical:true,
        pauseOnHover: false,
        prevHtml: "<i class='lnr lnr-chevron-left'></i>",
        nextHtml: "<i class='lnr lnr-chevron-right'></i>",
        pager: true,
        adaptiveHeight: true,
        addClass: 'portfolio-fullscreen-text-wrap',
        responsive: [{
            breakpoint: 767,
            settings: {
                controls: false
            }
        }]
    });

    // Home Portfolio Vertical Fullscreen JS
    $(".portfolio-vertical-slider-content").lightSlider({
      item: 1,
      slideMargin: 0,
      loop: true,
      vertical:true,
      prevHtml: "<i class='lnr lnr-arrow-up'></i>",
      nextHtml: "<i class='lnr lnr-arrow-down'></i>",
      pager: true,
      adaptiveHeight: true,
      addClass: 'portfolio-vertical-wrap',
      responsive: [{
          breakpoint: 767,
          settings: {
              controls: false
          }
      }]
    });

  // OwlCarousel JS

    // Features List Slider JS
    $('.features-slider').owlCarousel({
      autoplay: 2000,
      autoplayHoverPause: true,
      smartSpeed: 500,
      items: 4,
      margin: 30,
      loop: true,
      dots: false,
      nav: false,
      responsiveClass:true,
      responsive:{
          0:{
              items: 1
          },
          480:{
              items: 2
          },
          768:{
              items: 3
          },
          1200:{
              items: 4
          }
      }
    });

    // Related Products Slider JS
    $('.related-products-slider').owlCarousel({
      autoplay: 2000,
      autoplayHoverPause: true,
      smartSpeed: 500,
      items: 4,
      margin: 30,
      loop: true,
      dots: true,
      nav: false,
      responsiveClass:true,
      responsive:{
          0:{
              items: 1
          },
          480:{
              items: 2
          },
          768:{
              items: 3
          },
          1200:{
              items: 4
          }
      }
    });

    // Single Product Thumb JS
   $('.single-product-thumb').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.single-product-nav'
    });
    $('.single-product-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.single-product-thumb',
      dots: false,
      centerMode: true,
      centerPadding: '0',
      focusOnSelect: true
    });


  // Animated Typed JS
  if ($("#typed").length > 0) {
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 100,
      loop: true
    });
  }

  // Isotope and data filter
  function isotopePortfolio() {
    var $grid = $('.portfolio-grid').isotope({
      itemSelector: '.portfolio-item',
      masonry: {
        columnWidth: 1
      }
    })
    // Isotope Masonry
    var $gridMasonry = $('.portfolio-masonry').isotope({
      itemSelector: '.portfolio-item'
    })
    // Isotope filter Menu
    $('.portfolio-filter-menu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      $gridMasonry.isotope({ filter: filterValue });
      var filterMenuactive = $(".portfolio-filter-menu button");
      filterMenuactive.removeClass('active');
      $(this).addClass('active');
    });

    // Portfolio photogrhaper hover
    var photogrhaperportfolio = $(".portfolio-photographer .inner-content");
    photogrhaperportfolio.on('mouseover', function() {
        photogrhaperportfolio.addClass('active');
        $(".portfolio-masonry").addClass('hover');
    });
    photogrhaperportfolio.on('mouseout', function() {
        photogrhaperportfolio.removeClass('active');
        $(".portfolio-masonry").removeClass('hover');
    });

    // Portfolio text interactive hover
    var activeIdinteractive = $(".portfolio-text-interactive .portfolio-filter-menu button");
    $(".portfolio-text-interactive .portfolio-masonry").isotope();
    activeIdinteractive.on('mouseover', function() {
        var $this = $(this),
            filterValue = $this.data('filter');

        $(".portfolio-masonry").isotope({
            filter: filterValue,

            visibleStyle: {
                opacity: 1,
                top: 0,
                transform: 'translate3d(0)',
            },

            hiddenStyle: {
                opacity: 0,
                top: 0,
                transform: 'translate3d(0)',
            }
        });

        activeIdinteractive.removeClass('active');
        $this.addClass('active');
    });

    // Masonry Grid
    $(".masonryGrid").isotope({
      itemSelector: '.masonry-item'
    });
  }

  // Fancybox Js
  $('.lightbox-image').fancybox();

  // MatchHeight Js
  $('.equal-height').matchHeight();

  // Scroll Top Hide Show
  $(window).on('scroll', function(){
    if ($(this).scrollTop() > 250) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }

    // Sticky Header
    if($('.sticky-header').length){
      var windowpos = $(this).scrollTop();
      if (windowpos >= 80) {
        $('.sticky-header').addClass('sticky');
      } else {
        $('.sticky-header').removeClass('sticky');
      }
    }

  });

  jQuery(document).ready(function($) {
    // Contact Map JS
    var map_id = $('#map_content');
    if (map_id.length > 0) {
        var $lat = map_id.data('lat'),
            $lng = map_id.data('lng'),
            $zoom = map_id.data('zoom'),
            $maptitle = map_id.data('maptitle'),
            $mapaddress = map_id.data('mapaddress'),
            mymap = L.map('map_content').setView([$lat, $lng], $zoom);

        L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map',
            maxZoom: 22,
            minZoom: 2,
            id: 'mapbox.streets',
            scrollWheelZoom: false
        }).addTo(mymap);

        var marker = L.marker([$lat, $lng]).addTo(mymap);
        mymap.zoomControl.setPosition('bottomright');
        mymap.scrollWheelZoom.disable();
    }

    // Ajax Contact Form JS
    var form = $('#contact-form');
    var formMessages = $('.form-message');

    $(form).submit(function(e) {
        e.preventDefault();
        var formData = form.serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: formData
        }).done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('alert alert-danger');
            $(formMessages).addClass('alert alert-success fade show');

            // Set the message text.
            formMessages.html("<button type='button' class='close' data-dismiss='alert'>&times;</button>");
            formMessages.append(response);

            // Clear the form.
            $('#contact-form input,#contact-form textarea').val('');
        }).fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('alert alert-success');
            $(formMessages).addClass('alert alert-danger fade show');

            // Set the message text.
            if (data.responseText !== '') {
                formMessages.html("<button type='button' class='close' data-dismiss='alert'>&times;</button>");
                formMessages.append(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occurred and your message could not be sent.');
            }
        });
    });
  });

  // Product quantity jS
  var proQty = $(".pro-qty");
  proQty.append('<a href="#" class="inc qty-btn">+</a>');
  proQty.append('<a href="#" class= "dec qty-btn">-</a>');
  $('.qty-btn').on('click', function(e) {
      e.preventDefault();
      var $button = $(this);
      var oldValue = $button.parent().find('input').val();
      if ($button.hasClass('inc')) {
          var newVal = parseFloat(oldValue) + 1;
      } else {
          // Don't allow decrementing below zero
          if (oldValue > 0) {
              var newVal = parseFloat(oldValue) - 1;
          } else {
              newVal = 0;
          }
      }
      $button.parent().find('input').val(newVal);
  });

  // Nice Select
  $(".niceselect").niceSelect();

  //Checkout Page Checkbox Accordion
  $("#create_pwd").on("change", function() {
    $(".account-create").slideToggle("100");
  });

  $("#ship_to_different").on("change", function() {
    $(".ship-to-different").slideToggle("100");
  });

  //Click event to scroll to top
  $('.scroll-to-top').on('click', function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  // Reveal Footer JS
  let revealId = $(".reveal-footer"),
    footerHeight = revealId.outerHeight(),
    windowWidth = $(window).width(),
    windowHeight = $(window).outerHeight();

  if (windowWidth > 991 && windowHeight > footerHeight) {
    $(".site-wrapper-reveal").css({
      'margin-bottom': footerHeight + 'px'
    });
  }
  
  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  
  $(window).on('load', function() {
    stylePreloader();
    isotopePortfolio();
  });

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
  
  $(window).on('scroll', function() {
  });
  

/* ==========================================================================
   When Window is resizing, do
   ========================================================================== */
  
  $(window).on('resize', function() {
  });
  

})(window.jQuery);