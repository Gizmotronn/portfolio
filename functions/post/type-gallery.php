    
    
    
    <!-- Post -->
	  <div id="post-<?php the_ID() ?>" class="post">
	  
	  <div class="post-left">
	  
	  
	  <div class="margin-left-100">
	  <ul class="bx-wrapper blogslide">
	  <?php
		if (has_post_thumbnail( $post->ID )){
		$postImage = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
		?>
		<li> 
		<?php if( !is_single() ) {?> 
		    <a href="<?php the_permalink() ?>" title="<?php the_title() ?>"><img src="<?php echo $postImage; ?>" alt="<?php the_title() ?>" /></a>
		<?php }else{ ?>
			  <a href="<?php echo $postImage; ?>" class="group3" title="<?php the_title() ?>"><img src="<?php echo $postImage; ?>" alt="<?php the_title() ?>" /></a>
		<?php } ?>
		</li>
		<?php } ?>
    
    <?php $image1 = get_post_meta($post->ID, 'isc_video_gallery1_post', true); 
    if($image1 != ''){
    ?>
    <?php if( !is_single() ) {?> 
		    <a href="<?php the_permalink() ?>" title="<?php the_title() ?>"><img src="<?php echo $image1; ?>" alt="<?php the_title() ?>" /></a>
		<?php }else{ ?>
			  <a href="<?php echo $image1; ?>" class="group3" title="<?php the_title() ?>"><img src="<?php echo $image1; ?>" alt="<?php the_title() ?>" /></a>
		<?php } ?>
    <?php } ?>
    <?php $image2 = get_post_meta($post->ID, 'isc_video_gallery2_post', true); 
    if($image2 != ''){
    ?>
    <?php if( !is_single() ) {?> 
		    <a href="<?php the_permalink() ?>" title="<?php the_title() ?>"><img src="<?php echo $image2; ?>" alt="<?php the_title() ?>" /></a>
		<?php }else{ ?>
			  <a href="<?php echo $image2; ?>" class="group3" title="<?php the_title() ?>"><img src="<?php echo $image2; ?>" alt="<?php the_title() ?>" /></a>
		<?php } ?>
    <?php } ?>
    <?php $image3 = get_post_meta($post->ID, 'isc_video_gallery3_post', true); 
    if($image3 != ''){
    ?>
    <?php if( !is_single() ) {?> 
		    <a href="<?php the_permalink() ?>" title="<?php the_title() ?>"><img src="<?php echo $image3; ?>" alt="<?php the_title() ?>" /></a>
		<?php }else{ ?>
			  <a href="<?php echo $image3; ?>" class="group3" title="<?php the_title() ?>"><img src="<?php echo $image3; ?>" alt="<?php the_title() ?>" /></a>
		<?php } ?>
    <?php } ?>
    <?php $image4 = get_post_meta($post->ID, 'isc_video_gallery4_post', true); 
    if($image4 != ''){
    ?>
    <?php if( !is_single() ) {?> 
		    <a href="<?php the_permalink() ?>" title="<?php the_title() ?>"><img src="<?php echo $image4; ?>" alt="<?php the_title() ?>" /></a>
		<?php }else{ ?>
			  <a href="<?php echo $image4; ?>" class="group3" title="<?php the_title() ?>"><img src="<?php echo $image4; ?>" alt="<?php the_title() ?>" /></a>
		<?php } ?>
    <?php } ?>
    <?php $image5 = get_post_meta($post->ID, 'isc_video_gallery5_post', true); 
    if($image5 != ''){
    ?>
    <?php if( !is_single() ) {?> 
		    <a href="<?php the_permalink() ?>" title="<?php the_title() ?>"><img src="<?php echo $image5; ?>" alt="<?php the_title() ?>" /></a>
		<?php }else{ ?>
			  <a href="<?php echo $image5; ?>" class="group3" title="<?php the_title() ?>"><img src="<?php echo $image5; ?>" alt="<?php the_title() ?>" /></a>
		<?php } ?>
    <?php } ?>
    <?php $image6 = get_post_meta($post->ID, 'isc_video_gallery6_post', true); 
    if($image6 != ''){
    ?>
    <?php if( !is_single() ) {?> 
		    <a href="<?php the_permalink() ?>" title="<?php the_title() ?>"><img src="<?php echo $image6; ?>" alt="<?php the_title() ?>" /></a>
		<?php }else{ ?>
			  <a href="<?php echo $image6; ?>" class="group3" title="<?php the_title() ?>"><img src="<?php echo $image6; ?>" alt="<?php the_title() ?>" /></a>
		<?php } ?>
    <?php } ?>
    
    </ul>
    </div>
    
		
			<div class="post-title">
			  <div class="align-left2">
			  <h2><?php if( !is_single() ) {?><a href="<?php the_permalink() ?>" title="<?php the_title() ?>" rel="bookmark"><?php } ?><?php the_title() ?><?php if( !is_single() ) {?> </a> <?php } ?></h2>
			  <div class="post-meta">
				  <span><i class="icon-picture"></i></span>
				  <span><i class="icon-calendar"></i> <?php the_time('j'); ?> <?php the_time('F Y'); ?></span>
				  <span><i class="icon-user"></i> <?php the_author(); ?></span>
				  <span><i class="icon-folder-open"></i> <?php the_category(', '); ?></span>
          <span><i class="icon-comment"></i> <?php comments_popup_link(''.__('Post Comment','gb_framework').'', '1 '.__('Comment','gb_framework').'', '% '.__('Comments','gb_framework').'') ?></span>
			  </div>
			  </div>
			  <div class="clearfix"></div>
			</div>

			<div class="post-desc">
				<?php the_content(''.__('Continue Reading','gb_framework').' <i class="icon-chevron-sign-right"></i>'); ?>
			</div>
			
		
		</div>
		<div class="clearfix"></div>
	  </div>
	  <div class="clearfix"></div>
	  <!-- End Post -->