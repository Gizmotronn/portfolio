<?php

/* ---------------------------------------------------------------------- */
/*	Columns
/* ---------------------------------------------------------------------- */

	/* -------------------------------------------------- */
	/*	One half
	/* -------------------------------------------------- */

	function gb_framework_one_half_sc( $atts, $content = null ) {
		
		$output = '<div class="span6">'.do_shortcode($content).'</div>';
		
		return $output;
		
	}
	add_shortcode('one_half', 'gb_framework_one_half_sc');

	
	/* -------------------------------------------------- */
	/*	One third
	/* -------------------------------------------------- */

	function gb_framework_one_third_sc( $atts, $content = null ) {

		$output = '<div class="span4">'.do_shortcode($content).'</div>';
		
		return $output;

	}
	add_shortcode('one_third', 'gb_framework_one_third_sc');


	/* -------------------------------------------------- */
	/*	One fourth
	/* -------------------------------------------------- */

	function gb_framework_one_fourth_sc( $atts, $content = null ) {

		$output = '<div class="span3">'. do_shortcode($content).'</div>';
		
		return $output;

	}
	add_shortcode('one_fourth', 'gb_framework_one_fourth_sc');

	
	/* -------------------------------------------------- */
	/*	Two third
	/* -------------------------------------------------- */

	function gb_framework_two_sc( $atts, $content = null ) {

		$output = '<div class="span9 filler">'.do_shortcode($content).'</div>';
		return $output;

	}
	add_shortcode('two', 'gb_framework_two_sc');
	
	function gb_framework_third_sc( $atts, $content = null ) {

		$output = '<div class="span3">'.do_shortcode($content).'</div>';
		
		return $output;

	}
	add_shortcode('third', 'gb_framework_third_sc');
	
	
	// Single row
	function gb_framework_rowcolumns_sc( $atts, $content = null ) {
		
		$output = '<div class="row-fluid">'.do_shortcode($content).'</div>';
		
		return $output;
		
	}
	add_shortcode('row', 'gb_framework_rowcolumns_sc');

	

/* ---------------------------------------------------------------------- */
/*	Alert Boxes
/* ---------------------------------------------------------------------- */

	/* -------------------------------------------------- */
	/*	Error
	/* -------------------------------------------------- */

	function gb_framework_error_sc( $atts, $content = null ) {

		$output = '<div class="notification error">
		        <p>'.$content.'</p>
		        </div>';
		        
		return $output;

	}
	add_shortcode('error', 'gb_framework_error_sc');

	/* -------------------------------------------------- */
	/*	Success
	/* -------------------------------------------------- */

	function gb_framework_success_sc( $atts, $content = null ) {

		$output = '<div class="notification success">
		        <p>' . $content . '</p>
		        </div>';
		        
		return $output;

	}
	add_shortcode('success', 'gb_framework_success_sc');

	/* -------------------------------------------------- */
	/*	Warning
	/* -------------------------------------------------- */

	function gb_framework_info_sc( $atts, $content = null ) {

		$output = '<div class="notification warning">
		        <p>' . $content . '</p>
		        </div>';
		        
		return $output;

	}
	add_shortcode('warning', 'gb_framework_info_sc');

	/* -------------------------------------------------- */
	/*	Notice
	/* -------------------------------------------------- */

	function gb_framework_notice_sc( $atts, $content = null ) {

		$output = '<div class="notification notice">
		        <p>' . $content . '</p>
		        </div>';
		        
		return $output;

	}
	add_shortcode('notice', 'gb_framework_notice_sc');


/* ---------------------------------------------------------------------- */
/*	General
/* ---------------------------------------------------------------------- */

	/* -------------------------------------------------- */
	/*	Divider
	/* -------------------------------------------------- */

	function gb_framework_divider_sc( $atts, $content = null ) {

		$output = '<hr />';
		
		return $output;
	
	}
	add_shortcode('divider', 'gb_framework_divider_sc');

	/* -------------------------------------------------- */
	/*	Divider with text
	/* -------------------------------------------------- */

	function gb_framework_dividertext_sc( $atts, $content = null ) {

		$output = '<div class="row-fluid">
            <div class="section-title">
	            <div class="section-title-back2"><span>'.do_shortcode($content).'</span></div>
	            <div class="section-title-back"></div> 
	          </div>
	          </div>';
	
	return $output;
	
	}
	add_shortcode('dividertext', 'gb_framework_dividertext_sc');

	/* -------------------------------------------------- */
	/*	Button
	/* -------------------------------------------------- */

	function gb_framework_button_sc( $atts, $content = null ) {
    
		extract( shortcode_atts( array(
			'url'    => '',
			'target' => '_self',
			'color'  => '',
			'align'  => '',
			'style'  => ''
		), $atts ) );
		
		$output = '';

		if( $align != '' ){
			$output .= '<div class="align-'.$align.'">';
	  }
			
		$output .= '<div class="clearfix"></div><a class="button ' . esc_attr( $style ) . '  ' . esc_attr( $color ) . '" href="' . esc_url( $url ) . '" target="' . esc_attr( $target ) . '">';


		$output .= $content;

		$output .= '</a>';
		
		if( $align != '' ) {
			$output .= '</div>
			<div class="clearfix"></div>';
		}

		return $output;
	
	}
	add_shortcode('button', 'gb_framework_button_sc');

	/* -------------------------------------------------- */
	/*	Dropcap
	/* -------------------------------------------------- */

	function gb_framework_dropcap_sc( $atts, $content = null ) {
    
    $content = preg_replace('/^([\<\sa-z\d\/\>]*)(([a-z\&\;]+)|([\"\'\w]))/', '$1<span class="dropcap">$2</span>', $content);
    
		$output = '<div class="clearfix"></div>'.$content.'<div class="clearfix"></div>';
		
		return $output;

	}
	add_shortcode('dropcap', 'gb_framework_dropcap_sc');


	/* -------------------------------------------------- */
	/*	List
	/* -------------------------------------------------- */

	function gb_framework_list_sc( $atts, $content = null ) {

		extract( shortcode_atts( array(
			'icon'  => ''
		), $atts ) );

		$output = '<div class="clearfix"></div>
		        <div class="align-left2" style="width:20px;"><i class="icon-'.esc_attr($icon).' p-color"></i></div>
		        <div class="align-left2">'.$content.'</div>
		        <div class="clearfix"></div>';
		        
		return $output;

	}
	add_shortcode('list', 'gb_framework_list_sc');

	/* -------------------------------------------------- */
	/*	Quote
	/* -------------------------------------------------- */

	function gb_framework_quote_sc( $atts, $content = null ) {

		extract( shortcode_atts( array(
			'author' => ''
		), $atts ) );

		$output = '<blockquote>';

		$output .= '<p>'.$content.'</p>';

		if( $author )
			$output .= '<small>'.esc_attr($author).'</small>';

		$output .= '</blockquote>';

		return $output;

	}
	add_shortcode('quote', 'gb_framework_quote_sc');
	
	
	
	/* -------------------------------------------------- */
	/*	Icon
	/* -------------------------------------------------- */

	function gb_framework_icon_sc( $atts, $content = null ) {

		extract( shortcode_atts( array(
			'size' => '',
			'color' => ''
		), $atts ) );
		
		$span = '';
		if($size == 1){$span = '';}
		if($size == 2){$span = 'icon-3x';}
		if($size == 3){$span = 'icon-4x';}
		
		$colori = 'p-color';
		if($color == 1){$colori = 'p-color';}
		if($color == 2){$colori = '';}
		
		$output = '<i class="'.esc_attr($content).' '.$span.' '. $colori.'"></i>';
    
		return $output;

	}
	add_shortcode('icon', 'gb_framework_icon_sc');
	
	
	
	/* -------------------------------------------------- */
	/*	Skill
	/* -------------------------------------------------- */

	function gb_framework_skill_sc( $atts, $content = null ) {

		extract( shortcode_atts( array(
			'percent' => '',
			'color' => '#323A45'
		), $atts ) );
		
      $output = '';
			$output .= '<div class="chart">
                <div class="percentage" data-percent="'.esc_attr($percent).'" data-bar-color="'.$color.'"><span>'.esc_attr($percent).'</span>%</div>
                <div>' . $content . '</div>
                </div>
		';
    
		return $output;

	}
	add_shortcode('skill', 'gb_framework_skill_sc');
	
	
	
	/* -------------------------------------------------- */
	/*	Services box
	/* -------------------------------------------------- */

	function gb_framework_services_sc( $atts, $content = null ) {

		extract( shortcode_atts( array(
			'columns' => '',
			'icon'   => '',
			'style'   => '',
			'more_title'   => '',
			'more_link'   => '',
			'title'   => ''
		), $atts ) );
		
		$span = '3';
		if($columns == 2){$span = '6';}
		if($columns == 3){$span = '4';}
		if($columns == 4){$span = '3';}
		
		$moreLink = '';
		if($more_link != ''){$moreLink = '<p><a href="'.$more_link.'">'.$more_title.' <i class="icon-chevron-sign-right"></i></a></p>';}

		$output = '';

		if( $style == 1 ){
			$output .= '<!-- Begin service -->
    <div class="span'.esc_attr($span).'"> 
      <div class="services-p1">
        <div class="i-icon-services size3b"><i class="'.esc_attr($icon).' icon-3x"></i></div><br/>
        <h2>'.$title.'</h2>
        <p>'.$content.'</p>
        '.$moreLink.'
      </div>
    </div>
		';
    }
    if( $style == 2 ){
			$output .= '<!-- Begin service -->
    <div class="span'.esc_attr($span).'"> 
      <div class="feature-services">
				<div class="feature-services-circle"><i class="'.esc_attr($icon).' icon-2x"></i></div>
				<div class="feature-services-description">
					<h4>'.$title.'</h4>
					<p>'.$content.'</p>
					'.$moreLink.'
				</div>
			</div>
    </div>
		';
    }
    
    if( $style == 3 ){
			$output .= '<!-- Begin service -->
      <div class="margin-services">
      <div class="feature-services">
				<div class="feature-services-circle"><i class="'.esc_attr($icon).' icon-2x"></i></div>
				<div class="feature-services-description">
					<h4>'.$title.'</h4>
					<p>'.$content.'</p>
					'.$moreLink.'
				</div>
			</div>
			</div>
		';
    }

		return $output;

	}
	add_shortcode('services', 'gb_framework_services_sc');
	

	

	/* -------------------------------------------------- */
	/*	Accordion Content
	/* -------------------------------------------------- */
	
	
	function gb_framework_accordion_sc( $atts, $content = null ) {

		if( !isset( $GLOBALS['accordion_groups'] ) )
			$GLOBALS['accordion_groups'] = 0;
			
		$GLOBALS['accordion_groups']++;

		$GLOBALS['toggle_content_count'] = 0;

		$toggle_count = 1;
		$countToogle  = 0;

		do_shortcode( $content );

		if( is_array( $GLOBALS['toggle'] ) ) {

			foreach( $GLOBALS['toggle'] as $toggle_content ) {
			
			$countToogle++;
			if($countToogle != 1){$showData = ''; $showDiv = 'height: 0px;';} else{$showData = 'in'; $showDiv = 'height: auto;';}

				$tabs[] = '<!--accordion element -->
			<div class="accordion-group">
			  <div class="accordion-heading">
			    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion'.$GLOBALS['accordion_groups'].'" href="#ab'.$countToogle.'' . md5($toggle_content['title']) . '">'.$toggle_content['title'].'</a>
			    <div class="clearfix"></div>
			  </div>
			  <div style="'.$showDiv.'" id="ab'.$countToogle.''. md5($toggle_content['title']).'" class="accordion-body '.$showData.' collapse">
			    <div class="accordion-inner">
			      '.do_shortcode($toggle_content['content']).'
			    </div>
			  </div>
			 </div>';

			}

			$return = "\n". '<div class="accordion" id="accordion'.$GLOBALS['accordion_groups'].'">' . implode( "\n", $tabs ) . '</div>' . "\n" . '' . "\n";
		}
		
		$GLOBALS['toggle'] = null;

		return $return;

	}
	add_shortcode('accordion', 'gb_framework_accordion_sc');

	// Single toggle
	function gb_framework_toggle_content_sc( $atts, $content = null ) {

		extract( shortcode_atts( array(
			'title' => ''
		), $atts) );

		$i = $GLOBALS['toggle_content_count'];

		$GLOBALS['toggle'][$i] = array( 'title' => sprintf( $title, $GLOBALS['toggle_content_count'] ), 'content' => $content );

		$GLOBALS['toggle_content_count']++;

	}
	add_shortcode('toggle_content', 'gb_framework_toggle_content_sc');

	
	/* -------------------------------------------------- */
	/*	Content Tabs
	/* -------------------------------------------------- */

	// Tabs container
	function gb_framework_content_tabgroup_sc( $atts, $content = null ) {

		if( !isset( $GLOBALS['tabs_groups'] ) )
			$GLOBALS['tabs_groups'] = 0;
			
		$GLOBALS['tabs_groups']++;

		$GLOBALS['tab_count'] = 0;

		$tabs_count = 0;

		do_shortcode( $content );

		if( is_array( $GLOBALS['tabs'] ) ) {

			foreach( $GLOBALS['tabs'] as $tab ) {
        
        $tabs_count++;
        if($tabs_count == 1){$active = 'class="active"'; $active2 = 'active';} else{$active = ''; $active2 = '';}
				$tabs[] = '<li '.$active.'><a href="#tab-'.$GLOBALS['tabs_groups'].'-'.$tabs_count.'">'.$tab['title'].'</a></li>';
				$panes[] = '<div id="tab-'.$GLOBALS['tabs_groups'].'-'.$tabs_count.'" class="tab-pane '.$active2.'">' . do_shortcode($tab['content']) . '</div>';

			}

			$return = "\n". '<ul class="nav nav-tabs" id="tabs-'.$GLOBALS['tabs_groups'].'">' . implode( "\n", $tabs ) . '</ul>' . "\n" . '<div class="tab-content">'.implode( "\n", $panes ).'</div>
			<script>
     $(\'#tabs-'.$GLOBALS['tabs_groups'].' a\').click(function (e) {
     e.preventDefault();
     $(this).tab(\'show\');
    })
    </script>
			' . "\n";
		}
		
		$GLOBALS['tabs'] = null;

		return $return;

	}
	add_shortcode('tabgroup', 'gb_framework_content_tabgroup_sc');

	// Single tab
	function gb_framework_content_tab_sc( $atts, $content = null ) {

		extract( shortcode_atts( array(
			'title' => ''
		), $atts) );

		$i = $GLOBALS['tab_count'];

		$GLOBALS['tabs'][$i] = array( 'title' => sprintf( $title, $GLOBALS['tab_count'] ), 'content' => $content );

		$GLOBALS['tab_count']++;

	}
	add_shortcode('tab', 'gb_framework_content_tab_sc');

/* ---------------------------------------------------------------------- */
/*	Pricing Table
/* ---------------------------------------------------------------------- */

// Pricing table container
function gb_framework_pricing_table_sc( $atts, $content = null ) {

	extract( shortcode_atts( array(
		'column_count'    => '4',
		'type'            => '1',
		'title'           => '',
		'price'           => '',
		'period'          => '',
		'sign_up_title'   => '',
		'sign_up_url'     => ''
	), $atts) );
	
	do_shortcode( $content );

	$span = '4';
	if($column_count == 2){$span = '6';}
	if($column_count == 3){$span = '4';}
	if($column_count == 4){$span = '3';}
	
	$typep = '';
	if($type == 1){$typep = '';}
	if($type == 2){$typep = 'most-popular';}
	
	if($sign_up_title != ''){$signUp = '<ul><li><a href="'.$sign_up_url.'" class="button light">'.$sign_up_title.'</a></li></ul>';}
	else{$signUp = '';}
		
      $output = '';
			$output .= '<!-- Begin price column -->
      <div class="span'.esc_attr($span).'"> 
      <div class="pricing">
      <div class="price-plan '.$typep.'">
        <h2>' . $title . '</h2>
        <div class="price">
          <div class="inside"> <span class="amt">'.$price.'</span> <span class="sub">/'.$period.'</span> </div>
        </div>
        <div class="info">
          ' . $content . '
          '.$signUp.'
        </div>
      </div>
    </div>
    </div>
		';


	return $output;
	

}
add_shortcode('pricing_table', 'gb_framework_pricing_table_sc');



/* ---------------------------------------------------------------------- */
/*	HTML5 Video
/* ---------------------------------------------------------------------- */
function gb_framework_video_sc( $atts ) {

	extract( shortcode_atts( array(
		'mp4'          => '',
		'webm'         => '',
		'ogg'          => '',
		'track'        => '',
		'poster'       => '',
		'aspect_ratio' => '1.7',
		'preload'      => false,
		'autoplay'     => false,
	), $atts ) );

	global $post;

	if ( $mp4 )
		$mp4 = '<source src="'.$mp4.'" type="video/mp4" />';

	if ( $webm )
		$webm = '<source src="'.$webm.'" type="video/webm" />';

	if ( $ogg )
		$ogg = '<source src="'.$ogg.'" type="video/ogg" />';

	if ( $track)
		$track = '<track kind="subtitles" src="'.$track.'" srclang="en" label="English">';

	if ( $poster)
		$poster = ' poster="'.$poster.'"';

	if ( $preload )
		$preload = 'preload="'.$preload.'"';

	if ( $autoplay )
		$autoplay = 'autoplay';

	$output = "<video id='video-js-id-$post->ID' class='video-js vjs-default-skin' width='100%' controls {$preload} {$autoplay} {$poster} data-aspect-ratio='{$aspect_ratio}'>
			{$mp4}
			{$webm}
			{$ogg}
			{$track}
		</video>";

	return $output;

}
add_shortcode('video', 'gb_framework_video_sc');

/* ---------------------------------------------------------------------- */
/*	HTML5 Audio
/* ---------------------------------------------------------------------- */
function gb_framework_audio_sc( $atts ) {

	extract( shortcode_atts( array(
		'mp3'      => '',
		'ogg'      => '',
		'width'    => '',
		'height'   => '',
		'preload'  => false,
		'autoplay' => false,
	), $atts ) );

	global $post;

	if ( $mp3 )
		$mp3 = '<source src="'.$mp3.'" type="audio/mp3" />';

	if ( $ogg )
		$ogg = '<source src="'.$ogg.'" type="audio/ogg" />';

	if ( $preload )
		$preload = 'preload="'.$preload.'"';

	if ( $autoplay )
		$autoplay = 'autoplay';

	$output = "<audio id='AudioPlayerV1-id-$post->ID' class='AudioPlayerV1' width='100%' height='29' controls {$preload} {$autoplay} >
					{$mp3}
					{$ogg}
				</audio>";

	return $output;

}
add_shortcode('audio', 'gb_framework_audio_sc');

/* ---------------------------------------------------------------------- */
/*	Template Tags
/* ---------------------------------------------------------------------- */

	/* -------------------------------------------------- */
	/*	Testimonials
	/* -------------------------------------------------- */

	function gb_framework_testimonials_sc( $atts ) {

		$atts = extract( shortcode_atts( array(
			'limit'        => 10
		), $atts ) );

		global $post;

		$args = array('post_type'      => 'testimonials',
					  'posts_per_page' => esc_attr( $limit ),
					  'order'          => 'DESC',
					  'orderby'        => 'date',
					  'post_status'    => 'publish'
				  );
		
		query_posts( $args );

		if( have_posts() ) {

			$output = '';

			$output .= '<div id="cbp-qtrotator" class="cbp-qtrotator">';

			while( have_posts() ) {
			
				the_post();

				$image        = get_post_meta($post->ID, 'isc_image_clientst', true);
				
					  if(!empty($image)) { 
					      $finalImg = '<img src="'.$image.'" alt="" />'; 
					  }else{
					      $finalImg = '';
					  }
			  
				
				$output .= '<div class="cbp-qtcontent">
						<blockquote>
						  <p>'.get_post_meta($post->ID, 'isc_content_testimonials', true).'</p>
						  <footer>'.get_post_meta($post->ID, 'isc_name_testimonials', true).' | '.get_post_meta($post->ID, 'isc_company_testimonials', true).'
						  </footer>
						  '.$finalImg .'
						</blockquote>
					</div>';


			}

			$output .= '</div>';

		}

		wp_reset_query();

		return $output;

	}
	add_shortcode('testimonials', 'gb_framework_testimonials_sc');

	/* -------------------------------------------------- */
	/*	Portfolio
	/* -------------------------------------------------- */

	function gb_framework_portfolio_sc( $atts ) {

		$atts = extract( shortcode_atts( array(
			'columns'    => ''
		), $atts ) );
		
		$finalColumns = '4';
		$finalLimit   = '9';
		if($columns == 4){$finalColumns = '3';}
		if($columns == 4){$finalLimit   = '12';}

		global $post;
		
		$args = array('post_type'      => 'project',
					  'posts_per_page' => esc_attr( $finalLimit ),
					  'order'          => 'DESC',
					  'orderby'        => 'date',
					  'post_status'    => 'publish'
				  );
		
	  $output = '';
	  
		query_posts( $args );

		if( have_posts() ) :

			$output .= '
    
    
    ';
      $i = 0;
			while ( have_posts() ) : the_post();
			$i++;

				$image        = get_post_meta($post->ID, 'isc_image1', true);
				$image_video  = get_post_meta($post->ID, 'isc_image_video', true); 
				
				if(!empty($image) or !empty($image_video)) {
					  if(!empty($image)) { 
					      $finalImg = $image;  $finalLink = $image;
					  }else{
					      $finalImg = $image_video;
					  }
			  }else{
				    $finalImg = ''.get_template_directory_uri().'/images/no_img_p.jpg';
			  }
			  
			  $title_slide  = get_post_field('post_title', $post->ID);
			  $permalink    = get_permalink( $post->ID );
			  
			  $terms = get_the_terms($post->id,"tagportifolio");
			   $project_categories_title = NULL;
			   $project_categories = NULL;
			   
			   if ( !empty($terms) ){
			     foreach ( $terms as $term ) {
			       $project_categories .= strtolower($term->slug) . ' ';
			       $project_categories_title .= $term->name . ' ';
			     }
			   }
				
		if($i%$columns==0){$tr = '</div><div class="row-fluid">';} else{$tr = '';}
		$output .= '<!-- Begin portfolio one -->
		    <div class="span'.$finalColumns.'">
		    <ul class="grid cs-style-3 animate-portfolio">
		    <li>
					<figure>
					<a href="'.$permalink.'"><img src="'.$finalImg.'" alt="'.$title_slide.'" /></a>
						<figcaption>
							<h3>'.$title_slide.'</h3>
							<a href="'.$permalink.'">'.__('Project Details','gb_framework').'</a>
						</figcaption>
					</figure>
				</li>
				</ul>
				</div>
				'.$tr.'
		';	

			endwhile;

			wp_reset_query();
			
		$output .= '
				
		<div class="clearfix"></div>
    ';

		endif;

		return $output;

	}
	add_shortcode('portfolio', 'gb_framework_portfolio_sc');
	
	
	/* -------------------------------------------------- */
	/*	Post
	/* -------------------------------------------------- */

	function gb_framework_post_sc( $atts ) {

		$atts = extract( shortcode_atts( array(
			'limit'        => 3
		), $atts ) );
		
		$args = array('posts_per_page' => esc_attr( $limit ),
					  'post_type'      => 'post',
					  'order'          => 'DESC',
					  'orderby'        => 'date',
					  'post_status'    => 'publish'
				  );

		query_posts( $args );

		if( have_posts() ):

			$output = '';

			while( have_posts() ): the_post();
			
			$post_id = get_the_ID();
			
			if (has_post_thumbnail( $post_id )){
		      $postImage = wp_get_attachment_url( get_post_thumbnail_id($post_id) );
		  }else{
		      $postImage = ''.get_template_directory_uri().'/images/no_img_blog.jpg';
		  }
		  
		  $permalink  = get_permalink( $post_id );
		  $time       = get_the_date( '', $post_id );
		  $author     = get_the_author();
		  $postTitle  = get_post_field('post_title', $post_id);
		  
		  $iconPost = 'icon-file-text';
		  if(get_post_format($post_id) == 'audio'){$iconPost    = 'icon-music';}
		  if(get_post_format($post_id) == 'gallery'){$iconPost  = 'icon-picture';}
		  if(get_post_format($post_id) == 'link'){$iconPost     = 'icon-link';}
		  if(get_post_format($post_id) == 'quote'){$iconPost    = 'icon-quote-right';}
		  if(get_post_format($post_id) == 'video'){$iconPost    = 'icon-film';}
		  if(get_post_format($post_id) == 'image'){$iconPost    = 'icon-picture';}

			$output .= '<!-- Begin blog one -->
      <div class="blog-last">
        <div class="post-last-left"><div class="i-icon-blog size3b"><i class="'.$iconPost.' icon-2x"></i></div></div>
        <div class="post-last-left"><a href="'.$permalink.'" title="'.$postTitle.'"><h2>'.$postTitle.'</h2></a></div>
        <div class="post-last-right"><div class="last-blog-date">'.__('by','gb_framework').' '.$author.' on '.$time.'</div></div>
        <div class="clearfix"></div>
      </div>';
				
			endwhile;

		endif;

		wp_reset_query();

		return $output;

	}
	add_shortcode('post', 'gb_framework_post_sc');
	

	/* -------------------------------------------------- */
	/*	Slider
	/* -------------------------------------------------- */

	function gb_framework_slider_sc( $atts, $content = null ) {
    
    $atts = extract( shortcode_atts( array(
			'style'    => 1
		), $atts ) );
		
		global $post;

		$args = array('post_type'      => 'slider',
					  'posts_per_page' => '60',
					  'order'          => 'ASC',
					  'orderby'        => 'date',
					  'post_status'    => 'publish'
				  );

		query_posts( $args );
		
		if($style == 1678){
		    $slideHeader = '</div><!-- Row page --> </div><!-- Content page --></section><!-- Wrap page --><!--Info Slide --><section id="wrap-slide2">';
		    $slideFooter = '</section><!-- Part 1: Wrap all page content here --><section id="wrap-after"><!-- Begin page content --><div class="container "><div class="row-fluid">';
		}else{
		    $slideHeader = '';
		    $slideFooter = '';
		}
		
		$output = ''.$slideHeader.'
		<div class="camera_wrap camera_black_skin" id="camera_wrap_2">
    ';
    
    $nrSlide = '';
    $nr = 0;
		if( have_posts() ) while ( have_posts() ) : the_post();

			$nr++;
			$image        = get_post_meta($post->ID, 'isc_image_slide', true);
			$title_slide  = get_post_meta($post->ID, 'isc_title_slide', true);
			
			
			
			if(!empty($image)){$finalImage = $image;}
			else{$finalImage = '' . get_template_directory_uri() . 'images/no_slide.jpg';}
			
			if(!empty($title_slide)) {$buttonSlide = '<div class="camera_caption fadeFromBottom">'.$title_slide.'</div>';}
			else{$buttonSlide = '';}

			$output .= '
			<div data-thumb="" data-src="'.$finalImage.'">
                    '.$buttonSlide.'
            </div>
            ';

		endwhile;

		wp_reset_query();
		
		$output .= '
		
</div>
		'.$slideFooter.'';

		return $output;

	}
	add_shortcode('slider', 'gb_framework_slider_sc');

	/* -------------------------------------------------- */
	/*	Team Member
	/* -------------------------------------------------- */

	function gb_framework_team_member_sc( $atts, $content = null ) {

		extract( shortcode_atts( array(
			'column'        => '4'
		), $atts ) );
		
		$span = '4';
		if($column == 2){$span = '6';}
		if($column == 3){$span = '4';}
		if($column == 4){$span = '3';}

		global $post;

		$args = array('post_type'      => 'team',
					  'posts_per_page' => '5',
					  'order'          => 'DESC',
					  'orderby'        => 'date',
					  'post_status'    => 'publish'
				  );

		$social_links = array('isc_fb_team', 'isc_tw_team', 'isc_li_team', 'isc_gp_team', 'isc_pi_team');

		query_posts( $args );
    
    $output = '';
		if( have_posts() ) while ( have_posts() ) : the_post();

				if( has_post_thumbnail() ) {
					$image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
				}else{
				  $image = ''.get_template_directory_uri().'/images/no_user.png';
				}
				
				if(get_post_meta($post->ID, 'isc_fb_team', true) != ''){$facebook = '<a href="'.get_post_meta($post->ID, 'isc_fb_team', true).'" class="social-icon"><i class="icon-facebook"></i></a>';}
				else{$facebook = ' ';}
				if(get_post_meta($post->ID, 'isc_tw_team', true) != ''){$twitter = '<a href="'.get_post_meta($post->ID, 'isc_tw_team', true).'" class="social-icon"><i class="icon-twitter"></i></a> ';}
				else{$twitter = ' ';}
				if(get_post_meta($post->ID, 'isc_li_team', true) != ''){$linkedin = '<a href="'.get_post_meta($post->ID, 'isc_li_team', true).'" class="social-icon"><i class="icon-linkedin"></i></a> ';}
				else{$linkedin = ' ';}
				if(get_post_meta($post->ID, 'isc_gp_team', true) != ''){$google = '<a href="'.get_post_meta($post->ID, 'isc_gp_team', true).'" class="social-icon"><i class="icon-google-plus"></i></a> ';}
				else{$google = ' ';}
				if(get_post_meta($post->ID, 'isc_pi_team', true) != ''){$pinterest = '<a href="'.get_post_meta($post->ID, 'isc_pi_team', true).'" class="social-icon"><i class="icon-pinterest"></i></a> ';}
				else{$pinterest = ' ';}

				$output .= '
				<!-- Begin team one -->
    <div class="span'.$span.'"> 
      <div class="team-code">
        <div class="team-code-img"><img src="'.$image.'" alt="'.get_post_field('post_title', $post->ID).'" class="img-circle" /></div>
        <div class="sub-icon-team">
          <h2>'.get_post_field('post_title', $post->ID).'</h2>
          <p>'.get_post_meta($post->ID, 'isc_job_team', true).'</p>
          <p>'.get_post_field('post_content', $post->ID).'</p>
              '.$facebook.'
              '.$twitter.'
              '.$linkedin.'
              '.$google.'
              '.$pinterest.'
        </div>
      </div>
    </div>';

		endwhile;

		wp_reset_query();

		return $output;

	}
	add_shortcode('team_member', 'gb_framework_team_member_sc');
	
	
	/* -------------------------------------------------- */
	/*	Clients
	/* -------------------------------------------------- */

	function gb_framework_clients_sc( $atts ) {

		$atts = extract( shortcode_atts( array(
			'limit'        => 6,
			'columns'        => ''
		), $atts ) );
		
		$span = '2';
		if($columns == 2){$span = '6';}
		if($columns == 3){$span = '4';}
		if($columns == 4){$span = '3';}
		if($columns == 6){$span = '2';}

		global $post;

		$args = array('post_type'      => 'clients',
					  'posts_per_page' => esc_attr( $limit ),
					  'order'          => 'DESC',
					  'orderby'        => 'date',
					  'post_status'    => 'publish'
				  );
		
		query_posts( $args );

		if( have_posts() ) {

			$output = '';
			
			$output .= '';
      
			while( have_posts() ) {
			
				the_post();
        
        $nameClient    = get_post_meta($post->ID, 'isc_name_clients', true);
        $imgClient     = get_post_meta($post->ID, 'isc_image_clients', true);
        $urlClient     = get_post_meta($post->ID, 'isc_url_clients', true);
        if($urlClient != ''){$finalClient = '<a href="'.$urlClient.'" title="'.$nameClient.'"><img src="'.$imgClient.'" alt="'.$nameClient.'" /></a>';}
        else{$finalClient = '<img src="'.$imgClient.'" alt="'.$nameClient.'" />';}

				$output .= '<div class="span'.$span.'"> <div class="clients-box">';
					
					$output .= ''.$finalClient.'';

				$output .= '</div><div class="clearfix"></div></div><!-- end client -->';

			}
			
			$output .= '';

		}

		wp_reset_query();

		return $output;

	}
	add_shortcode('clients', 'gb_framework_clients_sc');

/* ---------------------------------------------------------------------- */
/*	Misc
/* ---------------------------------------------------------------------- */

	
	/* -------------------------------------------------- */
	/*	Fullwidth Content
	/* -------------------------------------------------- */

	function gb_framework_fullwidth_content_sc( $atts, $content = null ) {
    
    extract( shortcode_atts( array(
			'background'       => ''
		), $atts ) );
		
		
		$output = '</div><!-- Row page -->
		           </div><!-- Content page -->
               </section><!-- Wrap page -->
               <section class="fullwidth-color">
                 <div class="container">
                   <div class="row-fluid">
                     <div class="index-text">
                       '.do_shortcode($content).'
                     </div>
                   </div>
                 </div>
               </section>
               <div class="clearfix"></div>
               <!-- Part 1: Wrap all page content here -->
               <section class="wrap">
               <!-- Begin page content -->
               <div class="container">
	             <div class="row-fluid">
               ';

		return $output;

	}
	add_shortcode('fullwidth', 'gb_framework_fullwidth_content_sc');
	

	

/* ---------------------------------------------------------------------- */
/*	TinyMCE Buttons
/* ---------------------------------------------------------------------- */

function add_shortcodes_button() {

	if ( !current_user_can('edit_posts') && !current_user_can('edit_pages') )
		return;

	if ( get_user_option('rich_editing') == 'true' ) {
		add_filter('mce_external_plugins', 'add_shortcodes_tinymce_plugin');
		add_filter('mce_buttons', 'register_shortcodes_button');
	}

}
add_action('init', 'add_shortcodes_button');

function register_shortcodes_button( $buttons ) {

	array_push( $buttons, '|', 'gb_framework_shortcodes' );

	return $buttons;

}

function add_shortcodes_tinymce_plugin( $plugin_array ) {

	$plugin_array['gb_framework_shortcodes'] = GB_BASE_URL . 'functions/tinymce/tinymce.js';

	return $plugin_array;

}

function my_refresh_mce( $ver ) {

	$ver += 3;

	return $ver;

}
add_filter('tiny_mce_version', 'my_refresh_mce');