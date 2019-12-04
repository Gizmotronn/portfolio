<?php

/* ---------------------------------------------------------------------- */
/*	Portfolio Menu
/* ---------------------------------------------------------------------- */
add_action('init', 'gb_framework_project_custom');  
	function gb_framework_project_custom()
	{
	  $labels = array(
		'name' => __('Portfolio', 'post type general name', 'gb_framework'),
		'singular_name' => __('Portfolio', 'post type singular name', 'gb_framework'),
		'add_new' => __('Add New', 'project', 'gb_framework'),
		'add_new_item' => __('Add New Portfolio Item', 'gb_framework'),
		'edit_item' => __('Edit Portfolio Item', 'gb_framework'),
		'new_item' => __('New Portfolio Item', 'gb_framework'),
		'view_item' => __('View Portfolio', 'gb_framework'),
		'search_items' => __('Search Portfolio', 'gb_framework'),
		'not_found' =>  __('No Portfolio found', 'gb_framework'),
		'not_found_in_trash' => __('No Portfolio found in Trash', 'gb_framework'),
		'parent_item_colon' => '',
		'menu_name' => __('Portfolio', 'gb_framework')
	  );
	  
	 $args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'query_var' => true,
		'rewrite' => true,
		'capability_type' => 'post',
		'has_archive' => true,
		'hierarchical' => false,
		'menu_position' => 14500,
		'supports' => array('title','editor','author','excerpt'),
		'menu_icon' => GB_BASE_URL . 'functions/img/portfolio.png'
	  );
	  register_post_type('project',$args);
	  
	  
	}
	
	/*--- Custom Messages ---*/
	add_filter('post_updated_messages', 'project_updated_messages');
	function project_updated_messages( $messages ) {
	  global $post, $post_ID;
	  $messages['project'] = array(
		0 => '',
		1 => sprintf( __('Project updated. <a href="%s">View project</a>'), esc_url( get_permalink($post_ID) ) ),
		4 => __('Project updated.'),
		5 => isset($_GET['revision']) ? sprintf( __('Project restored to revision from %s'), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		6 => sprintf( __('Project published. <a href="%s">View project</a>'), esc_url( get_permalink($post_ID) ) ),
		7 => __('Project saved.'),
		8 => sprintf( __('Project submitted. <a target="_blank" href="%s">Preview project</a>'), esc_url( add_query_arg( 'preview', 'true', get_permalink($post_ID) ) ) ),
		9 => sprintf( __('Project scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview project</a>'),
		  date_i18n( __( 'M j, Y @ G:i' ), strtotime( $post->post_date ) ), esc_url( get_permalink($post_ID) ) ),
		10 => sprintf( __('Project draft updated. <a target="_blank" href="%s">Preview project</a>'), esc_url( add_query_arg( 'preview', 'true', get_permalink($post_ID) ) ) ),
	  );
	  return $messages;
	}
	
	
	
	
	
	
	
	
	
	
	
/* ---------------------------------------------------------------------- */
/*	Slider Menu
/* ---------------------------------------------------------------------- */
	add_action('init', 'gb_framework_slider_custom');  
	function gb_framework_slider_custom()
	{
	  $labels = array(
		'name' => __('Slider', 'post type general name', 'gb_framework'),
		'singular_name' => __('Slider', 'post type singular name', 'gb_framework'),
		'all_items' => __( 'View Slides', 'gb_framework'),
		'add_new' => __('Add New', 'slider', 'gb_framework'),
		'add_new_item' => __('Add New Slide Item', 'gb_framework'),
		'edit_item' => __('Edit Slide Item', 'gb_framework'),
		'new_item' => __('New Slide Item', 'gb_framework'),
		'view_item' => __('View Slide', 'gb_framework'),
		'search_items' => __('Search Slides', 'gb_framework'),
		'not_found' =>  __('No Slider found', 'gb_framework'),
		'not_found_in_trash' => __('No Slider found in Trash', 'gb_framework'),
		'parent_item_colon' => '',
		'menu_name' => __('Slider', 'gb_framework')
	  );
	  
	 $args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'query_var' => true,
		'rewrite' => true,
		//'capability_type' => 'post',
		//'has_archive' => true,
		'hierarchical' => false,
		'menu_position' => 14500,
		'supports' => false,
		'exclude_from_search' => true,
		'menu_icon' => GB_BASE_URL . 'functions/img/slider.png'
	  );
	  register_post_type('slider',$args); 
	}
	
	/*--- Custom Messages ---*/
	add_filter('post_updated_messages', 'slider_updated_messages');
	function slider_updated_messages( $messages ) {
	  global $post, $post_ID;
	  $messages['slider'] = array(
		0 => '', 
		1 => sprintf( __('Slider updated.'), esc_url( get_permalink($post_ID) ) ),
		4 => __('Slider updated.'),
		5 => isset($_GET['revision']) ? sprintf( __('Slider restored to revision from %s'), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		6 => sprintf( __('Slider published.'), esc_url( get_permalink($post_ID) ) ),
		7 => __('Slider saved.'),
		8 => sprintf( __('Slider submitted.'), esc_url( add_query_arg( 'preview', 'false', get_permalink($post_ID) ) ) ),
		9 => sprintf( __('Slider scheduled for: <strong>%1$s</strong>.'),
		  date_i18n( __( 'M j, Y @ G:i' ), strtotime( $post->post_date ) ), esc_url( get_permalink($post_ID) ) ),
		10 => sprintf( __('Slider draft updated.'), esc_url( add_query_arg( 'preview', 'false', get_permalink($post_ID) ) ) ),
	  );
	  return $messages;
	}
	
	
	
	
	


/* ---------------------------------------------------------------------- */
/*	Team Menu
/* ---------------------------------------------------------------------- */
	add_action('init', 'gb_framework_team_custom');  
	function gb_framework_team_custom()
	{
	  $labels = array(
		'name' => __('Team', 'post type general name', 'gb_framework'),
		'singular_name' => __('Team', 'post type singular name', 'gb_framework'),
		'all_items' => __( 'View Team', 'gb_framework'),
		'add_new' => __('Add New', 'slider', 'gb_framework'),
		'add_new_item' => __('Add New Team Member', 'gb_framework'),
		'edit_item' => __('Edit Team Member', 'gb_framework'),
		'new_item' => __('New Team Member', 'gb_framework'),
		'view_item' => __('View Team', 'gb_framework'),
		'search_items' => __('Search', 'gb_framework'),
		'not_found' =>  __('No Team Member found', 'gb_framework'),
		'not_found_in_trash' => __('No Team Member found in Trash', 'gb_framework'),
		'parent_item_colon' => '',
		'menu_name' => __('Team', 'gb_framework')
	  );
	  
	 $args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'query_var' => true,
		'rewrite' => true,
		'capability_type' => 'post',
		//'has_archive' => true,
		'hierarchical' => false,
		'menu_position' => 14500,
		'supports' => array('title','editor','thumbnail'),
		'exclude_from_search' => true,
		'menu_icon' => GB_BASE_URL . 'functions/img/team.png'
	  );
	  register_post_type('team',$args);
	}
	
	/*--- Custom Messages ---*/
	add_filter('post_updated_messages', 'team_updated_messages');
	function team_updated_messages( $messages ) {
	  global $post, $post_ID;
	  $messages['team'] = array(
		0 => '', 
		1 => sprintf( __('Team member updated.'), esc_url( get_permalink($post_ID) ) ),
		4 => __('Team member updated.'),
		5 => isset($_GET['revision']) ? sprintf( __('Team member to revision from %s'), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		6 => sprintf( __('Team member published.'), esc_url( get_permalink($post_ID) ) ),
		7 => __('Team member saved.'),
		8 => sprintf( __('Team member submitted.'), esc_url( add_query_arg( 'preview', 'false', get_permalink($post_ID) ) ) ),
		9 => sprintf( __('Team member scheduled for: <strong>%1$s</strong>.'),
		  date_i18n( __( 'M j, Y @ G:i' ), strtotime( $post->post_date ) ), esc_url( get_permalink($post_ID) ) ),
		10 => sprintf( __('Team member draft updated.'), esc_url( add_query_arg( 'preview', 'false', get_permalink($post_ID) ) ) ),
	  );
	  return $messages;
	}
	
	
	
	
	
	
	
	
/* ---------------------------------------------------------------------- */
/*	Clients Menu
/* ---------------------------------------------------------------------- */
	add_action('init', 'gb_framework_clients_custom');  
	function gb_framework_clients_custom()
	{
	  $labels = array(
		'name' => __('Clients', 'post type general name', 'gb_framework'),
		'singular_name' => __('Client', 'post type singular name', 'gb_framework'),
		'all_items' => __( 'View Clients', 'gb_framework'),
		'add_new' => __('Add New', 'slider', 'gb_framework'),
		'add_new_item' => __('Add New Client', 'gb_framework'),
		'edit_item' => __('Edit Client', 'gb_framework'),
		'new_item' => __('New Client', 'gb_framework'),
		'view_item' => __('View Clients', 'gb_framework'),
		'search_items' => __('Search', 'gb_framework'),
		'not_found' =>  __('No Clients found', 'gb_framework'),
		'not_found_in_trash' => __('No Clients found in Trash', 'gb_framework'),
		'parent_item_colon' => '',
		'menu_name' => __('Clients', 'gb_framework')
	  );
	  
	 $args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'query_var' => true,
		'rewrite' => true,
		//'capability_type' => 'post',
		//'has_archive' => true,
		'hierarchical' => false,
		'menu_position' => 14500,
		'supports' => false,
		'exclude_from_search' => true,
		'menu_icon' => GB_BASE_URL . 'functions/img/clients.png'
	  );
	  register_post_type('clients',$args);
	}
	
	/*--- Custom Messages ---*/
	add_filter('post_updated_messages', 'clients_updated_messages');
	function clients_updated_messages( $messages ) {
	  global $post, $post_ID;
	  $messages['clients'] = array(
		0 => '', 
		1 => sprintf( __('Client updated.'), esc_url( get_permalink($post_ID) ) ),
		4 => __('Client updated.'),
		5 => isset($_GET['revision']) ? sprintf( __('Team member to revision from %s'), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		6 => sprintf( __('Client published.'), esc_url( get_permalink($post_ID) ) ),
		7 => __('Client saved.'),
		8 => sprintf( __('Client submitted.'), esc_url( add_query_arg( 'preview', 'false', get_permalink($post_ID) ) ) ),
		9 => sprintf( __('Client scheduled for: <strong>%1$s</strong>.'),
		  date_i18n( __( 'M j, Y @ G:i' ), strtotime( $post->post_date ) ), esc_url( get_permalink($post_ID) ) ),
		10 => sprintf( __('Client draft updated.'), esc_url( add_query_arg( 'preview', 'false', get_permalink($post_ID) ) ) ),
	  );
	  return $messages;
	}
	
	
	
	
	
	
	
	
	
/* ---------------------------------------------------------------------- */
/*	Testimonials Menu
/* ---------------------------------------------------------------------- */
	add_action('init', 'gb_framework_testimonials_custom');  
	function gb_framework_testimonials_custom()
	{
	  $labels = array(
		'name' => __('Testimonials', 'post type general name', 'gb_framework'),
		'singular_name' => __('Testimonial', 'post type singular name', 'gb_framework'),
		'all_items' => __( 'View Testimonials', 'gb_framework'),
		'add_new' => __('Add New', 'slider', 'gb_framework'),
		'add_new_item' => __('Add New Testimonial', 'gb_framework'),
		'edit_item' => __('Edit Testimonial', 'gb_framework'),
		'new_item' => __('New Testimonial', 'gb_framework'),
		'view_item' => __('View Testimonials', 'gb_framework'),
		'search_items' => __('Search', 'gb_framework'),
		'not_found' =>  __('No Testimonials found', 'gb_framework'),
		'not_found_in_trash' => __('No Testimonials found in Trash', 'gb_framework'),
		'parent_item_colon' => '',
		'menu_name' => __('Testimonials', 'gb_framework')
	  );
	  
	 $args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'query_var' => true,
		'rewrite' => true,
		//'capability_type' => 'post',
		//'has_archive' => true,
		'hierarchical' => false,
		'menu_position' => 14500,
		'supports' => false,
		'exclude_from_search' => true,
		'menu_icon' => GB_BASE_URL . 'functions/img/testimonials.png'
	  );
	  register_post_type('testimonials',$args);
	}
	
	/*--- Custom Messages ---*/
	add_filter('post_updated_messages', 'testimonials_updated_messages');
	function testimonials_updated_messages( $messages ) {
	  global $post, $post_ID;
	  $messages['testimonials'] = array(
		0 => '', 
		1 => sprintf( __('Testimonial updated.'), esc_url( get_permalink($post_ID) ) ),
		4 => __('Testimonial updated.'),
		5 => isset($_GET['revision']) ? sprintf( __('Testimonial to revision from %s'), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		6 => sprintf( __('Testimonial published.'), esc_url( get_permalink($post_ID) ) ),
		7 => __('Testimonial saved.'),
		8 => sprintf( __('Testimonial submitted.'), esc_url( add_query_arg( 'preview', 'false', get_permalink($post_ID) ) ) ),
		9 => sprintf( __('Testimonial scheduled for: <strong>%1$s</strong>.'),
		  date_i18n( __( 'M j, Y @ G:i' ), strtotime( $post->post_date ) ), esc_url( get_permalink($post_ID) ) ),
		10 => sprintf( __('Testimonial draft updated.'), esc_url( add_query_arg( 'preview', 'false', get_permalink($post_ID) ) ) ),
	  );
	  return $messages;
	}
	

?>