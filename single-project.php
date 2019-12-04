<?php get_header() ?>



<!-- Part 1: Wrap all page content here -->
<section class="wrap">
  <!-- Begin page content -->
  <div class="container full">

	
	  
		<?php if(have_posts()) : while(have_posts()) : the_post(); ?>
    
    
    <?php
    $image1       = get_post_meta($post->ID, 'isc_image1', true);
    $image2       = get_post_meta($post->ID, 'isc_image2', true);
    $image3       = get_post_meta($post->ID, 'isc_image3', true);
    $image4       = get_post_meta($post->ID, 'isc_image4', true);
	$image5       = get_post_meta($post->ID, 'isc_image5', true);
	$image6       = get_post_meta($post->ID, 'isc_image6', true);
	$image7       = get_post_meta($post->ID, 'isc_image7', true);
	$image8       = get_post_meta($post->ID, 'isc_image8', true);
	$image9       = get_post_meta($post->ID, 'isc_image9', true);
	$image10       = get_post_meta($post->ID, 'isc_image10', true);
		$imageVideo   = get_post_meta($post->ID, 'isc_image_video', true); 
    $videoEmbed   = get_post_meta($post->ID, 'isc_video_embed', true);
		$videoM4v     = get_post_meta($post->ID, 'isc_video_url', true);
		$videoOgv     = get_post_meta($post->ID, 'isc_video2_url', true);
		$title        = get_post_field('post_title', $post->ID);
		$content      = get_post_field('post_content', $post->ID);
		?>
		
		<?php 
				// Get links for next and previous project
				ob_start();

					next_post_link( '%link', '%title' );
					$next_post_link = ob_get_contents();
					$next_post_link = preg_match( '/(?<=href\=")[^"]+?(?=")/', $next_post_link, $next_post );

				ob_clean();

					previous_post_link( '%link', '%title' );
					$previous_post_link = ob_get_contents();
					$previous_post_link = preg_match( '/(?<=href\=")[^"]+?(?=")/', $previous_post_link, $prev_post );

				ob_end_clean();

			 ?>
		
     
   <div class="row-fluid">
   
   
		 
		
		<?php
		if(!empty($videoEmbed) or !empty($videoM4v) or !empty($videoOgv)) { 
		    if(!empty($videoEmbed)) { 
		        $pattern1     = '/width="\d+"/i';
            $replacement1 = 'width="100%"';
            $variable1    = preg_replace($pattern1, $replacement1, html_entity_decode($videoEmbed));

            $pattern12     = '/height="\d+"/i';
            $replacement12 = 'height="450px"';
            $variable12    = preg_replace($pattern12, $replacement12, $variable1);
		        echo $variable12;
		    }else{
		    ?>
		    
		    <video id="example_video_<?php echo $post->ID; ?>" controls preload="none" width="100%" height="400" poster="<?php echo get_post_meta($post->ID, 'isc_image_video', true); ?>">
        <source src="<?php echo $videoM4v; ?>" type='video/mp4' />
        <?php if($videoOgv != ''){ ?>
				<source src="<?php echo $videoOgv; ?>" type='video/ogg' />
				<?php } ?>
        </video>
		      
		      
		<?php  
		    }
		}else{
		?>
		
		<ul class="bx-wrapper imgslide">
		
		<?php
		if(!empty($image1)) { ?>
		<li><a href="<?php echo $image1; ?>" class="group1" title="<?php echo $title ?>"><img src="<?php echo $image1; ?>" alt="<?php echo $title; ?>" /></a></li>
		<?php }?>
		<?php
		if(!empty($image2)) { ?>
		<li><a href="<?php echo $image2; ?>" class="group1" title="<?php echo $title ?>"><img src="<?php echo $image2; ?>" alt="<?php echo $title; ?>" /></a></li>
		<?php }?>
		<?php
		if(!empty($image3)) { ?>
		<li><a href="<?php echo $image3; ?>" class="group1" title="<?php echo $title ?>"><img src="<?php echo $image3; ?>" alt="<?php echo $title; ?>" /></a></li>
		<?php }?>
		<?php
		if(!empty($image4)) { ?>
		<li><a href="<?php echo $image4; ?>" class="group1" title="<?php echo $title ?>"><img src="<?php echo $image4; ?>" alt="<?php echo $title; ?>" /></a></li>
		<?php }?>
		<?php
		if(!empty($image5)) { ?>
		<li><a href="<?php echo $image5; ?>" class="group1" title="<?php echo $title ?>"><img src="<?php echo $image5; ?>" alt="<?php echo $title; ?>" /></a></li>
		<?php }?>
		<?php
		if(!empty($image6)) { ?>
		<li><a href="<?php echo $image6; ?>" class="group1" title="<?php echo $title ?>"><img src="<?php echo $image6; ?>" alt="<?php echo $title; ?>" /></a></li>
		<?php }?>
		<?php
		if(!empty($image7)) { ?>
		<li><a href="<?php echo $image7; ?>" class="group1" title="<?php echo $title ?>"><img src="<?php echo $image7; ?>" alt="<?php echo $title; ?>" /></a></li>
		<?php }?>
		<?php
		if(!empty($image8)) { ?>
		<li><a href="<?php echo $image8; ?>" class="group1" title="<?php echo $title ?>"><img src="<?php echo $image8; ?>" alt="<?php echo $title; ?>" /></a></li>
		<?php }?>
		<?php
		if(!empty($image9)) { ?>
		<li><a href="<?php echo $image9; ?>" class="group1" title="<?php echo $title ?>"><img src="<?php echo $image9; ?>" alt="<?php echo $title; ?>" /></a></li>
		<?php }?>
		<?php
		if(!empty($image10)) { ?>
		<li><a href="<?php echo $image10; ?>" class="group1" title="<?php echo $title ?>"><img src="<?php echo $image10; ?>" alt="<?php echo $title; ?>" /></a></li>
		<?php }?>
		</ul>
		
		<?php } ?>
		
		
		<br/><br/>
    <?php the_content() ?>
		
		
    
    <?php endwhile; endif; ?>
		
    
    
	</div><!-- Row page -->
	
	
	
	
<!-- Related projects -->
<?php if(have_posts()) : while(have_posts()) : the_post(); ?>
  <br/><br/>
  <div class="row-fluid">
  <div class="section-title">
	            <div class="section-title-back2"><span><?php _e('Related projects','gb_framework');?></span></div>
	            <div class="section-title-back"></div> 
	        </div>
            <div class="clearfix"></div>
  </div>
  
  <!-- Begin portfolio -->
  <div class="row-fluid">
  
  
  
  <?php 
  $numberPortfolio = 0;
	 $portfolio = new WP_Query( 
	 array( 
	 'post_type' => 'project', 		
	 'post__not_in' => array($post->ID), 
	 'posts_per_page' => 3, 
	 'order' => 'DESC', 
	 'orderby' => 'date' 
	 ) ); 
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
				
			  
			  <?php $permalink = get_permalink( $post->ID ); ?>
		
		<!-- Begin portfolio one -->
    <div class="span4 portfolio-item">
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
      
      
    
				
				
		<?php endwhile; ?>
		<?php else: ?>

	<?php endif; ?>
	<?php wp_reset_postdata(); ?>
  
  </div>
  
  <?php endwhile; endif; ?>
<!-- Related projects -->



	
	</div><!-- Content page -->
</section><!-- Wrap page -->




<?php get_footer() ?>

