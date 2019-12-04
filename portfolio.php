<?php
/*
Template Name: Portfolio
*/
?>

<?php get_header() ?>

<?php
$checkOpt          = get_option('alexio');
$portfolio_columns = 4;
$columsP           = '4';
$check_portfolio_columns = get_post_meta($post->ID, 'isc_portfolio_columns', true);
if($check_portfolio_columns == 2){$portfolio_columns = 6;}
if($check_portfolio_columns == 3){$portfolio_columns = 4;}
if($check_portfolio_columns == 4){$portfolio_columns = 3;}


?>

<?php $styleP = get_post_meta($post->ID, 'isc_portfolio_style', true); ?>


<!-- Part 1: Wrap all page content here -->
<section class="wrap">
  <!-- Begin page content -->
  <div class="container">
  
  
  
  

	<!-- Begin portfolio -->
  <div class="row-fluid">
  
  
  
  <?php 
  $numberPortfolio = 0;
	 $portfolio = new WP_Query( array( 'post_type' => 'project', 'posts_per_page' => -1, 'order' => 'DESC', 'orderby' => 'date' ) ); 
	 if( $portfolio->have_posts() ) : ?>
	
		<?php while( $portfolio->have_posts() ) : $portfolio->the_post(); ?>
				
				<?php $numberPortfolio++; ?>
				
				<?php $image = get_post_meta($post->ID, 'isc_image1', true);
				      $image_video = get_post_meta($post->ID, 'isc_image_video', true); 
				      ?>
				
				<?php
				if(!empty($image) or !empty($image_video)) { ?>
									  <?php if(!empty($image)) { ?>
									  <?php $finalImg = $image;  $finalLink = $image; ?>
									  <?php }else{ ?>
									  <?php $finalImg = $image_video; ?>
									  <?php } ?>
								 <?php }else{ ?>
				<?php $finalImg = ''.get_template_directory_uri().'/images/no_img_p.jpg'; ?>
				<?php } ?>
				
				
				<?php $title_slide = get_post_field('post_title', $post->ID); ?>
				
				<?php 
				
			   $terms = get_the_terms($post->id,"tagportifolio");
			   $project_categories_title = NULL;
			   $project_categories = NULL;
			   
			   if ( !empty($terms) ){
			     foreach ( $terms as $term ) {
			       $project_categories .= strtolower($term->slug) . ' ';
			       $project_categories_title .= $term->name . ' ';
			     }
			   }

			  ?>
			  
			  <?php $permalink = get_permalink( $post->ID ); ?>
			  
			  <?php if($numberPortfolio%$check_portfolio_columns==0){$tr = '</div><div class="row-fluid">';} else{$tr = '';} ?>
		
		<!-- Begin portfolio one -->
    <div class="span<?php echo $portfolio_columns; ?>">
      <ul class="grid cs-style-3 animate-portfolio" >
		    <li>
					<figure>
					<a href="<?php echo $permalink; ?>"><img src="<?php echo $finalImg; ?>" alt="<?php echo $title_slide; ?>" /></a>
						<figcaption>
							<h3><?php echo $title_slide; ?></h3>
							<a href="<?php echo $permalink; ?>" class="info"><?php _e('Project Details','gb_framework');?></a>
						</figcaption>
					</figure>
				</li>
				</ul>
      </div>
      <?php echo $tr; ?>
      
    
				
				
		<?php endwhile; ?>
		<?php else: ?>

	<?php endif; ?>
	<?php wp_reset_postdata(); ?>
  
  </div>
  
 
  <div class="row-fluid">
  <?php if(have_posts()) : while(have_posts()) : the_post(); ?>
				
				<?php the_content(); ?>
	
		<?php endwhile; endif; ?>
  </div>
  

  </div>
</section>
<div class="clearfix"></div>

<?php get_footer() ?>