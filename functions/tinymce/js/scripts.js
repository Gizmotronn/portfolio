(function( $ ) {

	var shortcode = '',
		alertBoxShortcode,
		layoutShortcode;
   
   
   $('#shortcode-dropdown').live('change', function() {

		var $currentShortcode = $(this).val();

		// Reset everything
		$('#shortcode').empty();
		alertBoxShortcode = false;
		layoutShortcode   = false;

		/* -------------------------------------------------- */
		/*	Divider
		/* -------------------------------------------------- */

		if( $currentShortcode === 'divider' ) {

			gb_framework_show_option('.divider');

		/* -------------------------------------------------- */
		/*	Button
		/* -------------------------------------------------- */

		}  else if( $currentShortcode === 'button-code' ) {

			gb_framework_show_option('.button-code');

		/* -------------------------------------------------- */
		/*	Dropcap
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'dropcap' ) {

			gb_framework_show_option('.dropcap');

		/* -------------------------------------------------- */
		/*	Quote
		/* -------------------------------------------------- */

		}  else if( $currentShortcode === 'quote' ) {

			gb_framework_show_option('.quote');

		/* -------------------------------------------------- */
		/*	Icon
		/* -------------------------------------------------- */
		} else if( $currentShortcode === 'icon' ) {

			gb_framework_show_option('.icon');

		/* -------------------------------------------------- */
		/*	Skills
		/* -------------------------------------------------- */
		} else if( $currentShortcode === 'skills' ) {

			gb_framework_show_option('.skills');

		/* -------------------------------------------------- */
		/*	Services box
		/* -------------------------------------------------- */
		} else if( $currentShortcode === 'services' ) {

			gb_framework_show_option('.services');

		/* -------------------------------------------------- */
		/*	List
		/* -------------------------------------------------- */
		} else if( $currentShortcode === 'list' ) {

			gb_framework_show_option('.list');

		/* -------------------------------------------------- */
		/*	Accordion
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'accordion-content' ) {

			gb_framework_show_option('.accordion-content');

		/* -------------------------------------------------- */
		/*	Content Tabs
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'content-tabs' ) {

			gb_framework_show_option('.content-tabs');

		/* -------------------------------------------------- */
		/*	Pricing tables
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'pricing-tables' ) {

			gb_framework_show_option('.pricing-tables');

		/* -------------------------------------------------- */
		/*	Video Player
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'video-player' ) {

			gb_framework_show_option('.video-player');

		/* -------------------------------------------------- */
		/*	Audio Player
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'audio-player' ) {

			gb_framework_show_option('.audio-player');

		/* -------------------------------------------------- */
		/*	Alert Boxes: Success
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'alert-success' ) {

			gb_framework_show_option('.alert-boxes');
			alertBoxShortcode = true;

		/* -------------------------------------------------- */
		/*	Alert Boxes: Warning
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'alert-warning' ) {

			gb_framework_show_option('.alert-boxes');
			alertBoxShortcode = true;

		/* -------------------------------------------------- */
		/*	Alert Boxes: Notice
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'alert-notice' ) {

			gb_framework_show_option('.alert-boxes');
			alertBoxShortcode = true;

		/* -------------------------------------------------- */
		/*	Alert Boxes: Error
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'alert-error' ) {

			gb_framework_show_option('.alert-boxes');
			alertBoxShortcode = true;

		/* -------------------------------------------------- */
		/*	Layout: 1/2
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'one-half' ) {

			gb_framework_show_option('.layout');
			layoutShortcode = true;

		/* -------------------------------------------------- */
		/*	Layout: 1/2 last
		/* -------------------------------------------------- */

		}  else if( $currentShortcode === 'one-third' ) {

			gb_framework_show_option('.layout');
			layoutShortcode = true;

		/* -------------------------------------------------- */
		/*	Layout: 1/3 last
		/* -------------------------------------------------- */

		}  else if( $currentShortcode === 'one-fourth' ) {

			gb_framework_show_option('.layout');
			layoutShortcode = true;

		/* -------------------------------------------------- */
		/*	Layout: 1/4 last
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'two-third' ) {

			gb_framework_show_option('.two-third');
			layoutShortcode = true;

		/* -------------------------------------------------- */
		/*	Testimonials Carousel
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'testimonials' ) {

			gb_framework_show_option('.testimonials');

		/* -------------------------------------------------- */
		/*	Clients
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'post-carousel' ) {

			gb_framework_show_option('.post-carousel');

		/* -------------------------------------------------- */
		/*	Project Carousel
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'clients' ) {

			gb_framework_show_option('.clients');

		/* -------------------------------------------------- */
		/*	Portfolio
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'portfolio' ) {

			gb_framework_show_option('.portfolio');

		/* -------------------------------------------------- */
		/*	Slider
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'slider' ) {

			gb_framework_show_option('.slider');

		/* -------------------------------------------------- */
		/*	Team member
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'team-member' ) {

			gb_framework_show_option('.team-member');
    
    /* -------------------------------------------------- */
		/*	Fullwidth map
		/* -------------------------------------------------- */
		
		} else if( $currentShortcode === 'fullwidth' ) {

			gb_framework_show_option('.fullwidth');

		} else {

			$('.option').hide();
			shortcode = '';

		}

		$('#shortcode').html( shortcode );

	});
	

	$('#insert-shortcode').live('click', function() {

		var $currentShortcode = $('#shortcode-dropdown').val();

		/* -------------------------------------------------- */
		/*	Divider
		/* -------------------------------------------------- */

		if( $currentShortcode === 'divider' ) {

				shortcode = '[divider]';
				

		/* -------------------------------------------------- */
		/*	Buttons
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'button-code' ) {

			var buttonCodeUrl     = $('#button-code-url').val(),
				buttonCodeTarget  = $('#button-code-target'),
				buttonCodeArrow   = $('#button-code-back').val(),
				buttonCodeAlign   = $('#button-code-align').val(),
				buttonCodeContent = $('#button-code-content').val();

			shortcode = '[button';

			if( buttonCodeUrl )
				shortcode += ' url="' + buttonCodeUrl + '"';

			if( buttonCodeTarget.is(':checked') )
				shortcode += ' target="' + buttonCodeTarget.val() + '"';

			if( buttonCodeArrow )
				shortcode += ' color="' + buttonCodeArrow + '"';
				
			if( buttonCodeAlign )
				shortcode += ' align="' + buttonCodeAlign + '"';

			shortcode += ']' + buttonCodeContent + '[/button]';

		/* -------------------------------------------------- */
		/*	Dropcap
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'dropcap' ) {

			var dropcapContent   = $('#dropcap-content').val();

			shortcode = '[dropcap]' + dropcapContent + '[/dropcap]';

		/* -------------------------------------------------- */
		/*	Quote
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'quote' ) {

			var quoteAuthor  = $('#quote-author').val(),
				quoteContent = $('#quote-content').val();

			shortcode = '[quote';

			if( quoteAuthor )
				shortcode += ' author="' + quoteAuthor + '"';

			shortcode += ']' + quoteContent + '[/quote]';

		/* -------------------------------------------------- */
		/*	Icon
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'icon' ) {

			var iconSize  = $('#icon-size').val(),
			  iconColor  = $('#icon-color').val(),
				iconContent = $('#inicon').val();

			shortcode = '[icon';

			shortcode += ' size="' + iconSize + '"';
			shortcode += ' color="' + iconColor + '"';

			shortcode += ']' + iconContent + '[/icon]';

		/* -------------------------------------------------- */
		/*	Skills
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'skills' ) {

			var skillPercent  = $('#skills-percent').val(),
			  skillColor  = $('#skills-color').val(),
			  skillTitle  = $('#skills-title').val();

			shortcode = '[skill';

			shortcode += ' percent="' + skillPercent + '"';
			shortcode += ' color="' + skillColor + '"';

			shortcode += ']' + skillTitle + '[/skill]';

		/* -------------------------------------------------- */
		/*	Services box
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'services' ) {

			var servicesCol  = $('#services-col').val(),
			  servicesIcon  = $('#services-icon').val(),
				servicesType    = $('#services-type').val(),
				servicesTitle = $('#services-title').val(),
				servicesContent = $('#services-content').val(),
				servicesReadTitle = $('#services-more').val(),
				servicesReadLink = $('#services-link').val();

			shortcode = '[row][services';
      
      if( servicesCol )
				shortcode += ' columns="' + servicesCol + '"';
			
			if( servicesIcon )
				shortcode += ' icon="' + servicesIcon + '"';

			if( servicesType )
				shortcode += ' style="' + servicesType + '"';
			
			if( servicesReadTitle )
				shortcode += ' more_title="' + servicesReadTitle + '"';
			
			if( servicesReadLink )
				shortcode += ' more_link="' + servicesReadLink + '"';
			
			if( servicesTitle )
				shortcode += ' title="' + servicesTitle + '"';

			shortcode += ']' + servicesContent + '[/services][/row]';

		/* -------------------------------------------------- */
		/*	List
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'list' ) {

			var listIcon 	= $('#list-icon').val(),
				listContent = $('#list-content').val();

			shortcode = '[list';

			if( listIcon )
				shortcode += ' icon="' + listIcon + '"';

			shortcode += ']' + listContent + '[/list]';

		/* -------------------------------------------------- */
		/*	Accordion
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'accordion-content' ) {

			var accordionContentTitle     = $('#accordion-content-title').val(),
				accordionContentContent   = $('#accordion-content-content').val(),
				accordionContentMode = $('#accordion-content-mode').val();

			shortcode = '[accordion][toggle_content';

			shortcode += ' title="' + accordionContentTitle + '"';

			shortcode += ']' + accordionContentContent + '[/toggle_content][/accordion]';

		/* -------------------------------------------------- */
		/*	Content Tabs
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'content-tabs' ) {

			var contentTabsTitle   = $('#content-tabs-title').val(),
				contentTabsContent = $('#content-tabs-content').val();

			shortcode = '[tabgroup] ';

			shortcode += '[tab';

			shortcode += ' title="' + contentTabsTitle + '"';

			shortcode += ']' + contentTabsContent + '[/tab]';

			shortcode += ' [/tabgroup]';

		/* -------------------------------------------------- */
		/*	Pricing tables
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'pricing-tables' ) {

		var pricingTablesColumnCount       = $('#pricing-tables-column-count').val(),
			pricingTablesType              = $('#pricing-tables-type').val(),
			pricingTablesColumnTitle       = $('#pricing-tables-column-title').val(),
			pricingTablesColumnPrice       = $('#pricing-tables-column-price').val(),
			pricingTablesColumnPeriod      = $('#pricing-tables-column-period').val(),
			pricingTablesColumnSignupTitle = $('#pricing-tables-column-signup-title').val(),
			pricingTablesColumnSignupUrl   = $('#pricing-tables-column-signup-url').val(),
			pricingTablesColumnContent     = $.trim( $('#pricing-tables-column-content').val() );

		shortcode = '[row][pricing_table'
		
		shortcode += ' column_count="' + pricingTablesColumnCount + '"';

		shortcode += ' type="' + pricingTablesType + '"';

		shortcode += ' title="' + pricingTablesColumnTitle + '"';

		shortcode += ' price="' + pricingTablesColumnPrice + '"';

		shortcode += ' period="' + pricingTablesColumnPeriod + '"';

		shortcode += ' sign_up_title="' + pricingTablesColumnSignupTitle + '"';

		shortcode += ' sign_up_url="' + pricingTablesColumnSignupUrl + '"';

	  shortcode += '] ' + pricingTablesColumnContent + ' [/pricing_table][/row]';

		/* -------------------------------------------------- */
		/*	Video Player
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'video-player' ) {

			var videoPlayerMp4	       = $('#video-player-mp4').val(),
				videoPlayerWebm	       = $('#video-player-webm').val(),
				videoPlayerOgg 	       = $('#video-player-ogg').val(),
				videoPlayerPoster      = $('#video-player-poster').val(),
				videoPlayerAspectRatio = $('#video-player-aspect-ratio').val();

			shortcode = '[video';

			if( videoPlayerMp4 )
				shortcode += ' mp4="' + videoPlayerMp4 + '"';

			if( videoPlayerWebm )
				shortcode += ' webm="' + videoPlayerWebm + '"';

			if( videoPlayerOgg )
				shortcode += ' ogg="' + videoPlayerOgg + '"';

			if( videoPlayerPoster )
				shortcode += ' poster="' + videoPlayerPoster + '"';

			if( videoPlayerAspectRatio )
				shortcode += ' aspect_ratio="' + videoPlayerAspectRatio + '"';

			shortcode += ']';

		/* -------------------------------------------------- */
		/*	Audio Player
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'audio-player' ) {

			var audioPlayerMp3 = $('#audio-player-mp3').val(),
				audioPlayerOgg = $('#audio-player-ogg').val();

			shortcode = '[audio';

			if(audioPlayerMp3) shortcode += ' mp3="' + audioPlayerMp3 + '"';

			if(audioPlayerOgg) shortcode += ' ogg="' + audioPlayerOgg + '"';

			shortcode += ']';

		/* -------------------------------------------------- */
		/*	Alert Boxes
		/* -------------------------------------------------- */

		} else if(alertBoxShortcode) {

			var alertBoxContent = $('#alert-boxes-content').val();

			if( $currentShortcode === 'alert-success' )
				shortcode = '[success]' + alertBoxContent + '[/success]';

			if( $currentShortcode === 'alert-warning' )
				shortcode = '[warning]' + alertBoxContent + '[/warning]';

			if( $currentShortcode === 'alert-notice' )
				shortcode = '[notice]' + alertBoxContent + '[/notice]';

			if( $currentShortcode === 'alert-error' )
				shortcode = '[error]' + alertBoxContent + '[/error]';
		
		/* -------------------------------------------------- */
		/*	Layout
		/* -------------------------------------------------- */

		} else if(layoutShortcode) {

			var layoutContent = $('#layout-content').val(),
			  layoutContent2 = $('#layout-content-2').val(),
			  layoutContent3 = $('#layout-content-3').val();

			if( $currentShortcode === 'one-half' )
				shortcode = '[row][one_half]' + layoutContent + '[/one_half][/row]';

			if( $currentShortcode === 'one-third' )
				shortcode = '[row][one_third]' + layoutContent + '[/one_third][/row]';

			if( $currentShortcode === 'one-fourth' )
				shortcode = '[row][one_fourth]' + layoutContent + '[/one_fourth][/row]';
				
		  if( $currentShortcode === 'two-third' )
				shortcode = '[row][two]' + layoutContent2 + '[/two][third]' + layoutContent3 + '[/third][/row]';

		/* -------------------------------------------------- */
		/*	Project Carousel
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'testimonials' ) {

			var testimonialsLimit       = parseInt( $('#testimonials-limit').val() );

			shortcode = '[row][testimonials';

			if( testimonialsLimit )
				shortcode += ' limit="' + testimonialsLimit + '"';

			shortcode += '][/row]';

		/* -------------------------------------------------- */
		/*	Clients
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'clients' ) {

			var clientsLimit       = parseInt( $('#clients-limit').val() ),
			  clientsColumns       = parseInt( $('#clients-column').val() );

			shortcode = '[row][clients';
      
      shortcode += ' columns="' + clientsColumns + '"';
      
			if( clientsLimit )
				shortcode += ' limit="' + clientsLimit + '"';

			shortcode += '][/row]';

		/* -------------------------------------------------- */
		/*	Portfolio
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'portfolio' ) {

			var portfolioColumns      = $('#portfolio-columns').val();

			shortcode = '[portfolio';

			shortcode += ' columns="' + portfolioColumns + '"';

			shortcode += ']';

		/* -------------------------------------------------- */
		/*	Slider
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'post-carousel' ) {

			var postLimit       = $('#post-limit').val();

			shortcode = '[row][post';
			
			if( postLimit )
				shortcode += ' limit="' + postLimit + '"';

			shortcode += '][/row]';

		/* -------------------------------------------------- */
		/*	Project Carousel
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'slider' ) {
      
      var sliderStyle    = $('#slider-style').val();

			shortcode = '[slider';
			
			shortcode += ' style="' + sliderStyle + '"';

			shortcode += ']';

		/* -------------------------------------------------- */
		/*	Team member
		/* -------------------------------------------------- */

		} else if( $currentShortcode === 'team-member' ) {

			var teamMemberColumn           = $('#team-member-column').val();

			shortcode = '[row][team_member';

			shortcode += ' column="' + teamMemberColumn + '"';

			shortcode += '][/row]';

		/* -------------------------------------------------- */
		/*	Fullwidth
		/* -------------------------------------------------- */
		
		} else if( $currentShortcode === 'fullwidth' ) {

			var fullContent = $('#fullwidth-content').val(),
			  fullAlign = $('#fullwidth-align').val(), 
			  backContent = $('#fullwidth-back').val();

			shortcode = '[fullwidth background="' + backContent + '" align="' + fullAlign + '"]' + fullContent + '[/fullwidth]';


		} 
		
		// Insert shortcode and remove popup
		tinyMCE.activeEditor.execCommand('mceInsertContent', false, shortcode);
		tb_remove();

	});

	// Show current shortcode
	function gb_framework_show_option( option ) {

		$('.option').hide();
		$( option ).show();

	}

})( jQuery );