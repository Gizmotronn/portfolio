'use strict';
$(document).ready(function() {

    $("#rev_slider_full_screen_horizontal").show().revolution({
        sliderType: "standard",
        jsFileLocation: "//localhost/revolutionvisual/revslider/public/assets/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "on",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
                style: "uranus",
                enable: true,
                hide_onmobile: false,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0
                }
            }
        },
        responsiveLevels: [1240, 1200, 992, 768],
        visibilityLevels: [1240, 1024, 768, 480],
        gridwidth: [1215, 970, 750, 575],
        gridheight: [1000, 768, 960, 720],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "enterpoint",
            speed: 400,
            speedbg: 0,
            speedls: 0,
            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
            disable_onmobile: "on"
        },
        shadow: 0,
        spinner: "spinner4",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });


    $("#rev_slider_full_screen_parallax").show().revolution({
        sliderType: "standard",
        jsFileLocation: "//localhost/revolutionvisual/revslider/public/assets/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "on",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            touch: {
                touchenabled: "on",
                touchOnDesktop: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            bullets: {
                enable: true,
                hide_onmobile: false,
                style: "zeus",
                hide_onleave: false,
                direction: "vertical",
                h_align: "right",
                v_align: "center",
                h_offset: 80,
                v_offset: 0,
                space: 15,
                tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
            }
        },
        responsiveLevels: [1240, 1200, 992, 768],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1440, 970, 750, 575],
        gridheight: [900, 768, 960, 720],
        lazyType: "none",
        shadow: 0,
        spinner: "spinner4",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });


    // Revolution Slider Smooth Scroll
    jQuery('body').on('click', 'a.smooth-scroll-link', function() {

        var $this = jQuery(this),
            href = $this.attr('href');

        if (!href || href.charAt(0) !== '#') return;
        var el = jQuery(href);

        if (!el.length) el = jQuery('a[name=' + href.substring(1, href.length) + ']');
        if (!el.length) return;

        jQuery('html, body').animate({
            scrollTop: el.offset().top + -80
        }, 1000);
        return false;

    });
});