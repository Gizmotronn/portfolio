/*-----------------------------------------------------------------------------------
/*
/* Custom JS
/*
-----------------------------------------------------------------------------------*/


		
	  
/* Start Document */
jQuery(document).ready(function() {


/*----------------------------------------------------*/
/*	Back To Top Button
/*----------------------------------------------------*/
		var pxShow = 300;//height on which the button will show
		var fadeInTime = 400;//how slow/fast you want the button to show
		var fadeOutTime = 400;//how slow/fast you want the button to hide
		var scrollSpeed = 400;//how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

		jQuery(window).scroll(function(){
			if(jQuery(window).scrollTop() >= pxShow){
				jQuery("#backtotop").fadeIn(fadeInTime);
			}else{
				jQuery("#backtotop").fadeOut(fadeOutTime);
			}
		});
		 
		jQuery('#backtotop a').click(function(){
			jQuery('html, body').animate({scrollTop:0}, scrollSpeed); 
			return false; 
		}); 
		

	
/*----------------------------------------------------*/
/*	Tabs
/*----------------------------------------------------*/

	(function() {

		var $tabsNav    = $('.tabs-nav'),
			$tabsNavLis = $tabsNav.children('li'),
			$tabContent = $('.tab-content');

		$tabsNav.each(function() {
			var $this = $(this);

			$this.next().children('.tab-content').stop(true,true).hide()
												 .first().show();

			$this.children('li').first().addClass('active').stop(true,true).show();
		});

		$tabsNavLis.on('click', function(e) {
			var $this = $(this);

			$this.siblings().removeClass('active').end()
				 .addClass('active');
			
			$this.parent().next().children('.tab-content').stop(true,true).hide()
														  .siblings( $this.find('a').attr('href') ).fadeIn();

			e.preventDefault();
		});

	})();
	
	










/* End Document */
});