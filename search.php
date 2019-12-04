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
	
    <?php if (have_posts()) : ?>
    
    <?php while ( have_posts() ) : the_post() ?>
    
		
		
		<?php get_template_part( 'functions/post/type', get_post_format() ); ?>
    
    
	  <?php endwhile ?>
	  
	  <div class="navigation">
			<div class="navleft"><?php next_posts_link('<i class="icon-chevron-sign-right"></i> '.__('Older Posts','gb_framework').'', '0') ?></div>
			<div class="navright"><?php previous_posts_link(''.__('Newer Posts','gb_framework').' <i class="icon-chevron-sign-right"></i>', '0') ?></div>
			<div class="clearfix"></div>
		</div>
		
		<?php else : ?>

		<div id="post-0" class="post">
			<h2 class="post-title"><?php _e('Nothing Found','gb_framework');?></h2>
			<div class="post-content">
				<p><?php _e('Sorry, but nothing matched your search criteria. Please try again with some different keywords.','gb_framework');?></p>
			</div>
			<form id="searchform" method="get" action="<?php bloginfo('home') ?>">
				<div>
					<input id="s" name="s" type="text" value="<?php echo wp_specialchars(stripslashes($_GET['s']), true) ?>" size="40" />
					<input id="searchsubmit" name="searchsubmit" type="submit" value="<?php _e('Find','gb_framework');?>" />
				</div>
			</form>
		</div><!-- .post -->

	  <?php endif; ?>
	  
		    
    </div>
		
	</div><!-- Row page -->

	
	</div><!-- Content page -->
</section><!-- Wrap page -->



<?php get_footer() ?>
