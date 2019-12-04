<?php get_header() ?>


<?php
if( get_option('show_on_front') == 'page') {
	$posts_page_id    = get_option( 'page_for_posts');
	$posts_page       = get_page( $posts_page_id);
	$posts_page_title = $posts_page->post_id;
}
else $posts_page_id = '';
?>



<!-- Part 1: Wrap all page content here -->
<section class="wrap">
  <!-- Begin page content -->
  <div class="container">

	<div class="row-fluid">
	
	  
    <?php while ( have_posts() ) : the_post() ?>
    
		
		
		<?php get_template_part( 'functions/post/type', get_post_format() ); ?>
    
    
	  <?php endwhile ?>
	  
	  <div class="navigation">
			<div class="navleft"><?php next_posts_link('<i class="icon-chevron-sign-right"></i> '.__('Older Posts','gb_framework').'', '0') ?></div>
			<div class="navright"><?php previous_posts_link(''.__('Newer Posts','gb_framework').' <i class="icon-chevron-sign-right"></i>', '0') ?></div>
			<div class="clearfix"></div>
		</div>
	  
		
    
    
    
    </div>
	
	</div><!-- Row page -->

	
	</div><!-- Content page -->
</section><!-- Wrap page -->









  

<?php get_footer() ?>