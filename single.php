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
	

    
    
    <?php the_post(); ?>
    
		<?php get_template_part( 'functions/post/type', get_post_format() ); ?>
    
<?php $checkOpt = get_option('alexio'); ?> 


<?php
if($checkOpt['is_blog_tags'] == 1) { ?>  
<div class="post-tags">
<?php the_tags( '<p>'.__('Tags','gb_framework').': ', ', ', '</p>'); ?>
</div>
<?php } ?>

<?php
if($checkOpt['is_autor_bio'] == 1) { ?>   
<!--BEGIN .author-bio-->
<div class="author-bio">
			<?php echo get_avatar( get_the_author_meta('email'), '60' ); ?>
<div class="author-info">
<h3 class="author-title"><?php _e('Written by','gb_framework');?> <?php the_author_link(); ?></h3>
<p class="author-description"><?php the_author_meta('description'); ?>

<br/>Website: <a href="<?php the_author_meta('user_url');?>"><?php the_author_meta('user_url');?></a>

</p>
</div>
</div>
<!--END .author-bio-->
<?php } ?>


    
    
    <?php comments_template(); ?>	
		
		
    
    </div>
		
	</div><!-- Row page -->

	
	</div><!-- Content page -->
</section><!-- Wrap page -->




<?php get_footer() ?>

