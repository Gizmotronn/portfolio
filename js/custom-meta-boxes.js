jQuery(document).ready(function($){
	
	$('#post-formats-select input').change(checkFormatPost);
	
	function checkFormatPost(){
		var formatPost = $('#post-formats-select input:checked').attr('value');
		
		if(typeof formatPost != 'undefined'){
			
			
			$('#post-body div[id^=gb-post-format-]').hide();
			$('#post-body #gb-post-format-'+formatPost+'').stop(true,true).fadeIn(200);
					
		}
	
	}
	
	$(window).load(function(){
		checkFormatPost();
	})
	
	
	
	/*///////////////////////////*/
	$('#page_template').change(checkFormatPage);
	
	function checkFormatPage(){
		var formatPage = $('#page_template option:selected').val();
		
		if(typeof formatPage != 'undefined'){
			
			var formatPageNew = formatPage.replace(".php", "php");
			
			if(formatPageNew == 'portfoliophp'){
			$('#post-body #page-slider-settings').hide();
			}else{
			$('#post-body #page-slider-settings').stop(true,true).fadeIn(200);
			}
			
			$('#post-body div[id^=gb-page-setting-]').hide();
			$('#post-body div[id^=gb-page-format-]').hide();
			$('#post-body #gb-page-format-'+formatPageNew+'').stop(true,true).fadeIn(200);
					
		}
	
	}
	
	$(window).load(function(){
		checkFormatPage();
	})
	
		
    
});



