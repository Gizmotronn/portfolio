/*----------------------------------------------------*/
/*	Animation
/*----------------------------------------------------*/

$(".wrap-slide-page4 h1,.wrap-slide-page h1").css({ opacity: 0 });
$(".feature-services").css({ opacity: 0 });


$("li.type-product").css({ opacity: 0 });
$(".pricing").css({ opacity: 0 });
$(".chart").css({ opacity: 0 }); 
$(".animate-portfolio").css({ opacity: 0 });
$(".cbp-qtrotator").css({ opacity: 0 });
//$(".social-icon").css({ opacity: 0 });
$(".team-code").css({ opacity: 0 });
$(".clients-box").css({ opacity: 0 });
$(".blog-last").css({ opacity: 0 }); 
$(".size-full").css({ opacity: 0 });
$(".services-p1").css({ opacity: 0 });
$("footer .span3 .widget").css({ opacity: 0 });
$(".row-fluid .span6 img").css({ opacity: 0 });
$(".wrap-slide-page4 h1,.wrap-slide-page h1").animate({'opacity':'1'},3000);



$('li.type-product').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.animate-portfolio').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.cbp-qtrotator').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.social-icon').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.clients-box').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.blog-last').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.size-full').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.pricing').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.services-p1').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.team-code').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.chart').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('footer .span3 .widget').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.row-fluid .span6 img').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.feature-services').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInRight'); 
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);


/*
$(document).ready(function() {

    
    $(window).scroll( function(){
    
        $('li.type-product').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight() + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.feature-services').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInRight'); 
            }
        }); 
        
        $('.services-p1').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight() + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        
        $('.pricing').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.chart').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated rotateIn'); 
            }
        }); 
        $('.animate-portfolio').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.cbp-qtrotator').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.social-icon').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.team-code').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.clients-box').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.blog-last').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.size-full').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInLeft'); 
            }
        }); 
        $('footer .span3 .widget').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.row-fluid .span6 img').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInLeft'); 
            }
        }); 
        
        
    
    });
    
});
*/