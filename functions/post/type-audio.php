    <!-- Post -->
	  <div id="post-<?php the_ID() ?>" class="post">
	  
	  
	  <div class="post-left">
	  
	  <?php $videoMP4 = get_post_meta($post->ID, 'isc_audio_url_post', true); 
	        $videoOGV = get_post_meta($post->ID, 'isc_audio2_url_post', true);
    if($videoMP4 != '' OR $videoOGV != ''){
    ?>
    
    
    
        <div class="post-img">
        
        <audio id="example_audio_<?php echo $post->ID; ?>" controls preload="none" width="100%" >
        <source src="<?php echo $videoMP4; ?>" type='audio/mpeg' />
        <?php if($videoOGV != ''){ ?>
				<source src="<?php echo $videoOGV; ?>" type='audio/ogg' />
				<?php } ?>
        </audio>
        
        </div>



    <?php } ?>
	  
		
			<div class="post-title">
			  
			  <div class="align-left2">
			  <h2><?php if( !is_single() ) {?><a href="<?php the_permalink() ?>" title="<?php the_title() ?>" rel="bookmark"><?php } ?><?php the_title() ?><?php if( !is_single() ) {?> </a> <?php } ?></h2>
			  <div class="post-meta">
				  <span><i class="icon-music"></i></span>
				  <span><i class="icon-calendar"></i> <?php the_time('j'); ?> <?php the_time('F Y'); ?></span>
				  <span><i class="icon-user"></i> <?php the_author(); ?></span>
				  <span><i class="icon-folder-open"></i> <?php the_category(', '); ?></span>
          <span><i class="icon-comment"></i> <?php comments_popup_link(''.__('Post Comment','gb_framework').'', '1 '.__('Comment','gb_framework').'', '% '.__('Comments','gb_framework').'') ?></span>
			  </div>
			  </div>
			  <div class="clearfix"></div>
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