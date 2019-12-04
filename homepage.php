<?php
/*
Template Name: Homepage
*/
?>

<?php get_header() ?>



<!-- Part 1: Wrap all page content here -->
<section class="wrap">
  <!-- Begin page content -->
  <div class="container">

	<div class="row-fluid">
	
		<?php the_post() ?>
		<?php the_content() ?>
		
		
		
		
		
	</div><!-- Row page -->
	
	
	</div><!-- Content page -->
</section><!-- Wrap page -->

<?php get_footer() ?>