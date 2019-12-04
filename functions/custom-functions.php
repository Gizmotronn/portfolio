<?php
ob_start();
/* ---------------------------------------------------------------------- */
/*	Latest Projects widget
/* ---------------------------------------------------------------------- */

if ( !function_exists('gb_framework_projects_feed') ) {
	function gb_framework_projects_feed( $project_count, $widget_id ) {
  
  
  global $post;
		
		$args = array('post_type'      => 'project',
					  'posts_per_page' => $project_count,
					  'order'          => 'DESC',
					  'orderby'        => 'date',
					  'post_status'    => 'publish'
				  );
		
			
		query_posts( $args );

		if( have_posts() ) :

			$output = '';

			while ( have_posts() ) : the_post();

				$image = get_post_meta($post->ID, 'isc_image1', true);
				$image_video = get_post_meta($post->ID, 'isc_image_video', true); 
				
				if(!empty($image) or !empty($image_video)) {
					  if(!empty($image)) { 
					      $finalImg = $image;  $finalLink = $image;
					  }else{
					      $finalImg = $image_video;
					  }
			  }else{
				    $finalImg = ''.get_template_directory_uri().'/img/no_img.jpg';
			  }
			  
			  $title_slide = get_post_field('post_title', $post->ID);
			  $permalink   = get_permalink( $post->ID );
			  
			  $terms = get_the_terms($post->id,"tagportifolio");
			   $project_categories_title = NULL;
			   $project_categories = NULL;
			   
			   $rt = 0;
			   if ( !empty($terms) ){
			     
			     foreach ( $terms as $term ) {
			       $rt++;
			       if($rt > 1){$separator = ',';} else{$separator = '';}
			       $project_categories .= strtolower($term->slug) . ' ';
			       $project_categories_title .= ''.$separator.' '.$term->name . '';
			     }
			   }
				
	  $output .= '<!-- Begin portfolio one -->
    <div class="latest-post">
    <a href="'.$permalink.'" title="'.$title_slide.'"><img src="'.$finalImg.'" alt="'.$title_slide.'" width="49" /></a> 
    <p><a href="'.$permalink.'" title="'.$title_slide.'">'.$title_slide.'</a></p>
    <span>'.$project_categories_title.'</span>
    </div>
    <div class="clearfix"></div>
		';	

			endwhile;

			wp_reset_query();

		endif;
  
  
  
		return $output;
	}
}



/* ---------------------------------------------------------------------- */
/*	Flickr Feed widget
/* ---------------------------------------------------------------------- */

if ( !function_exists('gb_framework_flickr_feed') ) {
	function gb_framework_flickr_feed( $flickr_id, $image_count, $widget_id ) {
		
	$images = '<script>
	$(window).load(function() {
	$(\'#flickrfeed'.md5($widget_id).'\').jflickrfeed({
		limit: '.$image_count.',
		qstrings: {
			id: \''.$flickr_id.'\'
		},
		itemTemplate: \'<div class="flickr_image"><a href="{{image_b}}" title="{{title}}" target="_blank" class="group3"><img src="{{image_s}}" alt="{{title}}" height="45" width="45"></a></div>\'
	});
  });	
  </script>';
		
		
		return '<div id="flickrfeed'.md5($widget_id).'">'.$images.'</div>';
	}
}







/* ---------------------------------------------------------------------- */
/*	Insert all custom CSS styles
/* ---------------------------------------------------------------------- */

if ( !function_exists('gb_framework_insert_custom_styles') ) {
	function gb_framework_insert_custom_styles() {

    $checkOpt        = get_option('alexio');
    
		$color1          = $checkOpt['is_color1'];
		
		$bodyFont    = 0;
		$headerFont  = 0;
		$slideFont   = 0;
		$footerFont  = 0;
		if($checkOpt['is_use_font'] == 1){
		    if($checkOpt['is_font_body'] != ''){
		        $bodyFont    = 1;
		    }
		    if($checkOpt['is_font_header'] != ''){
		        $headerFont    = 1;
		    }
		    if($checkOpt['is_font_slider'] != ''){
		        $slideFont    = 1;
		    }
		    if($checkOpt['is_font_footer'] != ''){
		        $footerFont    = 1;
		    }
		}

?>

<style>


<?php
if($checkOpt['is_img_back'] != ''){
?>

<?php
$img_repeat = 'top center no-repeat fixed';
if($checkOpt['is_img_rep'] == '1'){$img_repeat = 'top center no-repeat fixed';}
if($checkOpt['is_img_rep'] == '2'){$img_repeat = 'top center no-repeat';}
if($checkOpt['is_img_rep'] == '3'){$img_repeat = 'top center';}
?>

<?php 
if($checkOpt['is_img_back'] != ''){
?>
body {background:#ffffff  url(<?php echo $checkOpt['is_img_back']; ?>) <?php echo $img_repeat; ?>;}
<?php } ?>





<?php } ?>


<?php if($headerFont == 1){ ?>
@import url("http://fonts.googleapis.com/css?family=<?php echo $checkOpt['is_font_header']; ?>");
<?php } ?>

<?php if($slideFont == 1){ ?>
@import url("http://fonts.googleapis.com/css?family=<?php echo $checkOpt['is_font_slider']; ?>");
<?php } ?>

<?php if($bodyFont == 1){ ?>
@import url("http://fonts.googleapis.com/css?family=<?php echo $checkOpt['is_font_body']; ?>");
<?php } ?>

<?php if($footerFont == 1){ ?>
@import url("http://fonts.googleapis.com/css?family=<?php echo $checkOpt['is_font_footer']; ?>");
<?php } ?>


/* Main styles */
<?php if($bodyFont == 1){ 
$font_name1 = $checkOpt['is_font_body'];
$font_name1 = str_replace("+", " ", $font_name1);
$font_name1 = explode(":", $font_name1);
$font_name1 = $font_name1[0];
?>
body {
	font-family: '<?php echo $font_name1; ?>';
}
<?php } ?>


<?php if($headerFont == 1){ 
$font_name2 = $checkOpt['is_font_header'];
$font_name2 = str_replace("+", " ", $font_name2);
$font_name2 = explode(":", $font_name2);
$font_name2 = $font_name2[0];
?>
header {
	font-family: '<?php echo $font_name2; ?>';
}
<?php } ?>


<?php if($slideFont == 1){ 
$font_name3 = $checkOpt['is_font_slider'];
$font_name3 = str_replace("+", " ", $font_name3);
$font_name3 = explode(":", $font_name3);
$font_name3 = $font_name3[0];
?>
.camera_caption {
	font-family: '<?php echo $font_name3; ?>';
}
<?php } ?>


<?php if($footerFont == 1){ 
$font_name4 = $checkOpt['is_font_footer'];
$font_name4 = str_replace("+", " ", $font_name4);
$font_name4 = explode(":", $font_name4);
$font_name4 = $font_name4[0];
?>
footer {
	font-family: '<?php echo $font_name4; ?>';
}
<?php } ?>

<?php if($checkOpt['is_scroll'] != 1){ ?>
.fullwidth-portfolio {width:99.91%;}

<?php } ?>
a, a:hover {color:<?php echo $color1; ?>;}

input[type="submit"], .navleft a, .navright a, .button.light, .button.white:hover, .button.dark, .button.dark:hover, #portfolio-navigation a, #portfolio-navigation a:hover, .blog-last:hover, .button.white1, .more-link, .post-type, .banner .btn { border:3px solid <?php echo $color1; ?>; }

.grid figcaption a {border:2px solid <?php echo $color1; ?>;}
 
.p-color, .social-icon, .widget li a, .i-icon-services, .fullwidth-color .services-p1:hover .i-icon-services, .testimonialbox-name  { color:<?php echo $color1; ?>; }
#filters a:hover, .selected, footer .social-icon, .woocommerce .price ins, .woocommerce .amount {color:<?php echo $color1; ?> !important;}
 
.link-post, .author-info, .button.light:hover, .button.dark, .feature-services-circle, #portfolio-navigation a:hover, .cbp-qtprogress, .pricing .price-plan.most-popular, .info-box, .fullwidth-color, .button.white1:hover, nav ul ul li a:hover, .banner .btn:hover, ul li.sale .onsale, .woocommerce span.onsale, .woocommerce a.button, .woocommerce button.button, .woocommerce input[type="submit"].button, .woocommerce button.button.alt, .woocommerce ul li a.add_to_cart_button:hover, .woocommerce a.button:hover, .woocommerce button.button:hover, .woocommerce input[type="submit"].button:hover, .woocommerce button.button.alt:hover, .woocommerce ul li.product:hover a.add_to_cart_button, .woocommerce ul li a.add_to_cart_button { background:<?php echo $color1; ?>; }
 
.quote-post { background: <?php echo $color1; ?> url('<?php echo get_template_directory_uri(); ?>/images/quote.png') no-repeat; background-position: 98% 80%;}
#backtotop a, #backtotop a:hover {background-color:<?php echo $color1; ?>;}





</style>

<?php
}
	add_action('wp_head', 'gb_framework_insert_custom_styles');
}






/* ---------------------------------------------------------------------- */
/*	Insert all JavaScript Footer
/* ---------------------------------------------------------------------- */

if ( !function_exists('gb_framework_insert_javascript_footer') ) {
	function gb_framework_insert_javascript_footer() {

    $checkOpt = get_option('alexio');
   
echo '<script src="'.get_template_directory_uri().'/js/custom.js"></script>
<script type="text/javascript">
			
</script>
<script src="'.get_template_directory_uri().'/js/bootstrap.js"></script>
<script src="'.get_template_directory_uri().'/parts/bxslider/jquery.bxslider.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
$(\'.blogslide\').bxSlider({
  infiniteLoop: false,
	hideControlOnEnd: true,
  pager: false,
  autoStart: true,
  auto: true,
  pause: 10000,
  speed: 500,
  captions: false
});
$(\'.imgslide\').bxSlider({
  infiniteLoop: false,
	hideControlOnEnd: true,
  pager: true,
  autoStart: false,
  auto: true,
  pause: 10000,
  speed: 500,
  captions: false,
  easing: null
});
$(\'#bxslidertest\').bxSlider({
  mode: \'vertical\',
  slideMargin: 3,
  auto:true,
  controls: false,
  pager: true
}); 
});            
</script>
';





echo '<script type=\'text/javascript\' src=\''.get_template_directory_uri().'/parts/camera/scripts/jquery.mobile.customized.min.js\'></script>
    <script type=\'text/javascript\' src=\''.get_template_directory_uri().'/parts/camera/scripts/jquery.easing.1.3.js\'></script> 
    <script type=\'text/javascript\' src=\''.get_template_directory_uri().'/parts/camera/scripts/camera.min.js\'></script> 
    
    <script type="text/javascript">


			$(\'#camera_wrap_2\').camera({
				height: \'400px\',
				loader: \'pie\',
				fx: \'simpleFade\',
				transPeriod: 1500,
				pagination: false,
				thumbnails: false,';
if(!empty($checkOpt['is_slider_spedd'])) {
					echo 'time: '.$checkOpt['is_slider_spedd'].'';
				}else{
				echo 'time: 10000';
				}
				echo '
			});
	</script>

';





echo '<script src="'.get_template_directory_uri().'/parts/colorbox/jquery.colorbox-min.js"></script>
<script type="text/javascript">
			$(document).ready(function(){
				//Examples of how to assign the Colorbox event to elements
				$(".group1").colorbox({rel:\'group1\', transition:"fade"});
				$(".group2").colorbox({rel:\'group2\', transition:"fade"});
				$(".group3").colorbox({rel:\'group3\', transition:"fade"});
			});
</script>
';


echo '
<script src="'.get_template_directory_uri().'/js/modernizr.custom.js"></script>
<script src="'.get_template_directory_uri().'/js/jquery.cbpQTRotator.min.js"></script>
<script>
			$( function() {
				$( \'#cbp-qtrotator\' ).cbpQTRotator();
			} );
</script>
';



echo '<!-- isotope JS file -->
<script src="'.get_template_directory_uri().'/js/jquery.isotope.min.js"></script>
';



echo '
<!-- Menu JS file -->
<!--[if !(IE 8)]><!-->
<script src="'.get_template_directory_uri().'/js/jquery.meanmenu.js"></script>
<script type="text/javascript">
jQuery(document).ready(function () {
    jQuery(\'.menu-header nav\').meanmenu();
});
</script>
<!--<![endif]-->
';




echo '
<!-- Skills JS file -->
<script src="'.get_template_directory_uri().'/parts/pie/jquery.easy-pie-chart.js"></script>
<script type="text/javascript">
            var initPieChart = function() {
                $(\'.percentage\').easyPieChart({
                    animate: 1000,
                    onStep: function(value) {
                        this.$el.find(\'span\').text(~~value);
                    }
                });
                $(\'.updateEasyPieChart\').on(\'click\', function(e) {
                  e.preventDefault();
                  $(\'.percentage, .percentage-light\').each(function() {
                    $(this).data(\'easyPieChart\').update(Math.round(100*Math.random()));
                  });
                });
            };
</script>
';




if($checkOpt['is_fixed_menu'] == 1) {
echo '
<script type="text/javascript">
$(document).ready( function() {
    $(window).scroll( function() {
        if ($(window).scrollTop() > $(\'header\').offset().top)
            $(\'#site-menu\').addClass(\'floating\');
        else
            $(\'#site-menu\').removeClass(\'floating\');
    } );

} );
</script>
';
}




if($checkOpt['is_scroll'] == 1){
echo '
<!-- Scroll JS file -->
<script src="'.get_template_directory_uri().'/js/jquery.nicescroll.min.js"></script>
<script type="text/javascript">
$(document).ready(
			function() {  
				$("body").niceScroll();
			}
		);
</script>
';
}



if($checkOpt['is_animate_content'] == 1) {
echo '
<script src="'.get_template_directory_uri().'/js/waypoints.min.js"></script>
<script src="'.get_template_directory_uri().'/js/animate.js"></script>
';
}





}
	add_action('wp_footer', 'gb_framework_insert_javascript_footer');
}


?>