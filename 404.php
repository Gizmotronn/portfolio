<?php get_header() ?>


<!-- Part 1: Wrap all page content here -->
<section class="wrap">
  <!-- Begin page content -->
  <div class="container">

	<div class="row-fluid">
	
	  

    
    
		<div id="post-0" class="align-center">
		  <br/><br/><br/><br/>
		  <p><i class="icon-warning-sign icon-5x p-color"></i></p>
			<h2 class="post-title"><?php _e('404 Not Found','gb_framework'); ?></h2>
			<div class="post-content">
				<p><?php _e('Apologies, but we were unable to find what you were looking for. Perhaps  searching will help.','gb_framework'); ?></p>
			</div>
			<form id="error404-searchform" method="get" action="<?php bloginfo('home') ?>">
				<div align="center">
					<input id="error404-s" name="s" type="text" value="<?php echo wp_specialchars(stripslashes($_GET['s']), true) ?>" size="70" />
					<input id="error404-searchsubmit" name="searchsubmit" type="submit" value="<?php _e('Search in site','gb_framework'); ?>" />
				</div>
			</form>
			<br/><br/><br/><br/>
		</div><!-- .post -->
		
    
    
    
    </div>
		
	</div><!-- Row page -->

	
	</div><!-- Content page -->
</section><!-- Wrap page -->

<?php get_footer() ?>


