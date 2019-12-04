    <!-- Post -->
	  <div id="post-<?php the_ID() ?>" class="post">
	  
	  
	  <div class="post-left">	  
		
			<div class="post-title">
			  <div class="align-left2">
			  <h2><?php if( !is_single() ) {?><a href="<?php the_permalink() ?>" title="<?php the_title() ?>" rel="bookmark"><?php } ?><?php the_title() ?><?php if( !is_single() ) {?> </a> <?php } ?></h2>
			  <div class="post-meta">
				  <span><i class="icon-link"></i></span>
				  <span><i class="icon-calendar"></i> <?php the_time('j'); ?> <?php the_time('F Y'); ?></span>
				  <span><i class="icon-user"></i> <?php the_author(); ?></span>
				  <span><i class="icon-folder-open"></i> <?php the_category(', '); ?></span>
          <span><i class="icon-comment"></i> <?php comments_popup_link(''.__('Post Comment','gb_framework').'', '1 '.__('Comment','gb_framework').'', '% '.__('Comments','gb_framework').'') ?></span>
			  </div>
			  </div>
			  <div class="clearfix"></div>
			</div>

			<div class="post-desc">
			  			
				<?php $linkPost = get_post_meta($post->ID, 'isc_link_post', true); 
        if($linkPost != ''){
        ?>
        <div class="link-post"><h3><a href="<?php echo $linkPost; ?>" target="_blank"><?php echo $linkPost; ?></a></h3></div>
        <?php } ?>
        <?php if( !is_single() ) {?> <?php }else{ ?>
			  <?php the_content(); ?>
			  <?php } ?>
			</div>
			
		
		</div>
		<div class="clearfix"></div>
	  </div>
	  <div class="clearfix"></div>
	  <!-- End Post -->