    <!-- Post -->
	  <div id="post-<?php the_ID() ?>" class="post">
	  
	  
	  <div class="post-left">
	  
	  	  
	  <?php $videoMP4 = get_post_meta($post->ID, 'isc_video_url_post', true); 
	        $videoOGV = get_post_meta($post->ID, 'isc_video2_url_post', true);
	        $videoEmbed = get_post_meta($post->ID, 'isc_video_embed', true);
	        if($videoEmbed != ''){ ?>
	        <?php
	        $pattern1 = '/width="\d+"/i';
          $replacement1 = 'width="100%"';
          $variable1 = preg_replace($pattern1, $replacement1, html_entity_decode($videoEmbed));

          $pattern12 = '/height="\d+"/i';
          $replacement12 = 'height="450px"';
          $variable12 = preg_replace($pattern12, $replacement12, $variable1);
	        ?>
	        <div class="post-img">
	        <?php echo html_entity_decode($variable12); ?>
	        </div>
	        <?php }else{
    if($videoMP4 != '' OR $videoOGV != ''){
    ?>
        <div class="post-img">
        <video id="example_video_<?php echo $post->ID; ?>" controls preload="none" width="100%" height="400" poster="<?php echo get_post_meta($post->ID, 'isc_video_image_post', true); ?>">
        <source src="<?php echo $videoMP4; ?>" type='video/mp4' />
        <?php if($videoOGV != ''){ ?>
				<source src="<?php echo $videoOGV; ?>" type='video/ogg' />
				<?php } ?>
        </video>
        </div>

    <?php } } ?>
	  
		
			<div class="post-title">
			  
			  <div class="align-left2">
			  <h2><?php if( !is_single() ) {?><a href="<?php the_permalink() ?>" title="<?php the_title() ?>" rel="bookmark"><?php } ?><?php the_title() ?><?php if( !is_single() ) {?> </a> <?php } ?></h2>
			  <div class="post-meta">
				  <span><i class="icon-film"></i></span>
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