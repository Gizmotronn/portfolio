    
    
    <!-- Post -->
	  <div id="post-<?php the_ID() ?>" class="post">
	  
	  
	  <div class="post-left">
	  	  
	  <?php
		if (has_post_thumbnail( $post->ID )){
		$postImage = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
		?>
		<div class="post-img">
		
		<?php if( !is_single() ) {?> 
		    <a href="<?php the_permalink() ?>" title="<?php the_title() ?>"><img src="<?php echo $postImage; ?>" alt="<?php the_title() ?>" /></a>
		<?php }else{ ?>
			  <a href="<?php echo $postImage; ?>" class="group3" title="<?php the_title() ?>"><img src="<?php echo $postImage; ?>" alt="<?php the_title() ?>" /></a>
		<?php } ?>
		
		</div>
		<?php } ?>
		
			<div class="post-title">
			  <h2><?php if( !is_single() ) {?><a href="<?php the_permalink() ?>" title="<?php the_title() ?>" rel="bookmark"><?php } ?><?php the_title() ?><?php if( !is_single() ) {?> </a> <?php } ?></h2>
			  <div class="post-meta">
				  <span>
			    <?php
		      if (has_post_thumbnail( $post->ID )){ ?>
			    <i class="icon-picture"></i>
			    <?php }else{ ?>
			    <i class="icon-file"></i>
			    <?php } ?>
			    </span>
				  <span><i class="icon-calendar"></i> <?php the_time('j'); ?> <?php the_time('F Y'); ?></span>
				  <span><i class="icon-user"></i> <?php the_author(); ?></span>
				  <span><i class="icon-folder-open"></i> <?php the_category(', '); ?></span>
          <span><i class="icon-comment"></i> <?php comments_popup_link(''.__('Post Comment','gb_framework').'', '1 '.__('Comment','gb_framework').'', '% '.__('Comments','gb_framework').'') ?></span>
			  </div>
			</div>

			<div class="post-desc">
			  <?php if( !is_single() ) {?> <?php the_content(''.__('Continue Reading','gb_framework').' <i class="icon-chevron-sign-right"></i>'); ?> <?php }else{ ?>
			  <?php the_content(); ?>
			  <?php } ?>
				
			</div>
			
			
			</div>
			<div class="clearfix"></div>
		
	  </div>
	  <div class="clearfix"></div>
	  <!-- End Post -->