<?php


/* ---------------------------------------------------------------------- */
/*	Basic Theme Settings
/* ---------------------------------------------------------------------- */


define( 'GB_BASE_DIR', TEMPLATEPATH . '/' );
define( 'GB_BASE_URL', get_template_directory_uri() . '/' );

if( !isset( $content_width ) )
	$content_width = 1170;

if( !function_exists('gb_framework_setup') ) {

	function gb_framework_setup() {

    // Menu
    add_theme_support( 'menus' );
		
		// Post formats
		add_theme_support( 'post-formats', array( 'gallery', 'link', 'image', 'quote', 'video', 'audio' ) );

		// Post thumbnails
		add_theme_support('post-thumbnails');

		add_image_size( 'blog-post', 1170, null, true );
		add_image_size( 'blog-post-thumb', 300, null, true );
		add_image_size( 'blog-post-thumb-footer', 49, 49, true );
		add_image_size( 'fullwidth', 1170, null, true );
		add_image_size( 'img-admin-item', 200, 100, true );

		// Add default posts and comments RSS feed links to head
		add_theme_support('automatic-feed-links');

		// Make theme available for translation
		load_theme_textdomain( 'gb_framework', GB_BASE_DIR . 'languages' );

		$locale = get_locale();
		$locale_file = GB_BASE_DIR . "languages/$locale.php";

		if( is_readable( $locale_file ) )
			require_once( $locale_file );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'primary_nav' => __( 'Primary Navigation', 'gb_framework' )
		) );

	}
}
add_action('after_setup_theme', 'gb_framework_setup');







/* ---------------------------------------------------------------------- */
/*	Load Parts
/* ---------------------------------------------------------------------- */

if (is_admin()) {
// Add theme options
include( GB_BASE_DIR . 'functions/options/options.php' );

// Automatic plugin activation
include( GB_BASE_DIR . 'functions/plugin-activation.php' );

// Custom file
include( GB_BASE_DIR . 'functions/custom/custom.php' );
}

// Add widgets
include( GB_BASE_DIR . 'functions/widgets.php' );

// Add shortcodes
include( GB_BASE_DIR . 'functions/shortcodes.php' );

// Add custom functions
include( GB_BASE_DIR . 'functions/custom-functions.php' );

// Add custom post types
include( GB_BASE_DIR . 'functions/custom-post-types.php' );






/* ---------------------------------------------------------------------- */
/*	Required/recommended plugins
/* ---------------------------------------------------------------------- */

if ( !function_exists('gb_framework_register_plugins') ) {

	function gb_framework_register_plugins() {

		$plugins = array(
			array(
				'name'     => 'Google Map Shortcode',
				'slug'     => 'google-map-shortcode',
				'required' => false
			),
			array(
				'name'     => 'Contact Form 7',
				'slug'     => 'contact-form-7',
				'required' => false
			)
		);

		$config = array(
			'domain'       		=> 'gb_framework',         		// Text domain - likely want to be the same as your theme.
			'default_path' 		=> '',                         	// Default absolute path to pre-packaged plugins
			'parent_menu_slug' 	=> 'themes.php', 				// Default parent menu slug
			'parent_url_slug' 	=> 'themes.php', 				// Default parent URL slug
			'menu'         		=> 'install-required-plugins', 	// Menu slug
			'has_notices'      	=> true,                       	// Show admin notices or not
			'is_automatic'    	=> false,					   	// Automatically activate plugins after installation or not
			'message' 			=> '',							// Message to output right before the plugins table
			'strings'      		=> array(
				'page_title'                       	=> __( 'Install Required Plugins', 'gb_framework' ),
				'menu_title'                       	=> __( 'Install Plugins', 'gb_framework' ),
				'installing'                       	=> __( 'Installing Plugin: %s', 'gb_framework' ), // %1$s = plugin name
				'oops'                             	=> __( 'Something went wrong with the plugin API.', 'gb_framework' ),
				'notice_can_install_required'     	=> _n_noop( 'This theme requires the following plugin: %1$s.', 'This theme requires the following plugins: %1$s.' ), // %1$s = plugin name(s)
				'notice_can_install_recommended'	=> _n_noop( 'This theme recommends the following plugin: %1$s.', 'This theme recommends the following plugins: %1$s.' ), // %1$s = plugin name(s)
				'notice_cannot_install'  			=> _n_noop( 'Sorry, but you do not have the correct permissions to install the %s plugin. Contact the administrator of this site for help on getting the plugin installed.', 'Sorry, but you do not have the correct permissions to install the %s plugins. Contact the administrator of this site for help on getting the plugins installed.' ), // %1$s = plugin name(s)
				'notice_can_activate_required'    	=> _n_noop( 'The following required plugin is currently inactive: %1$s.', 'The following required plugins are currently inactive: %1$s.' ), // %1$s = plugin name(s)
				'notice_can_activate_recommended'	=> _n_noop( 'The following recommended plugin is currently inactive: %1$s.', 'The following recommended plugins are currently inactive: %1$s.' ), // %1$s = plugin name(s)
				'notice_cannot_activate' 			=> _n_noop( 'Sorry, but you do not have the correct permissions to activate the %s plugin. Contact the administrator of this site for help on getting the plugin activated.', 'Sorry, but you do not have the correct permissions to activate the %s plugins. Contact the administrator of this site for help on getting the plugins activated.' ), // %1$s = plugin name(s)
				'notice_ask_to_update' 				=> _n_noop( 'The following plugin needs to be updated to its latest version to ensure maximum compatibility with this theme: %1$s.', 'The following plugins need to be updated to their latest version to ensure maximum compatibility with this theme: %1$s.' ), // %1$s = plugin name(s)
				'notice_cannot_update' 				=> _n_noop( 'Sorry, but you do not have the correct permissions to update the %s plugin. Contact the administrator of this site for help on getting the plugin updated.', 'Sorry, but you do not have the correct permissions to update the %s plugins. Contact the administrator of this site for help on getting the plugins updated.' ), // %1$s = plugin name(s)
				'install_link' 					  	=> _n_noop( 'Begin installing plugin', 'Begin installing plugins' ),
				'activate_link' 				  	=> _n_noop( 'Activate installed plugin', 'Activate installed plugins' ),
				'return'                           	=> __( 'Return to Required Plugins Installer', 'gb_framework' ),
				'plugin_activated'                 	=> __( 'Plugin activated successfully.', 'gb_framework' ),
				'complete' 							=> __( 'All plugins installed and activated successfully. %s', 'gb_framework' ), // %1$s = dashboard link
				'nag_type'							=> 'updated' // Determines admin notice type - can only be 'updated' or 'error'
			)
		);

		tgmpa( $plugins, $config );

	}
	add_action('tgmpa_register', 'gb_framework_register_plugins');
	
}



/* ---------------------------------------------------------------------- */
/*	Fixing shortcodes
/* ---------------------------------------------------------------------- */

function shortcode_empty_fix($content){   
    $array = array ('<p>[' => '[', ']</p>' => ']', ']<br />' => ']');
    $content = strtr($content, $array);
    return $content;
}
add_filter('the_content', 'shortcode_empty_fix');



/* ---------------------------------------------------------------------- */
/*	Theme scripts
/* ---------------------------------------------------------------------- */
if ( !function_exists('gb_framework_register_scripts') ) {
	function gb_framework_register_scripts() {

		if( !is_admin() ) {
			wp_deregister_script('jquery');
			wp_register_script( 'jquery',   GB_BASE_URL . 'js/jquery-1.8.2.min.js', array(), '1.8.2', false );
			wp_register_script( 'jflickrfeed',   GB_BASE_URL . 'js/jflickrfeed.min.js', array(), '1.0.2', false );
			
		}

	}
	add_action('init', 'gb_framework_register_scripts');
	
}

if ( !function_exists('gb_framework_enqueue_scripts') ) {

	function gb_framework_enqueue_scripts() {

		global $pagenow, $is_IE;

		if( !is_admin() && $pagenow !== 'wp-login.php' ) {

			wp_enqueue_script('jquery');
			wp_enqueue_script('jflickrfeed');

			// For Internet Explorer
			if( $is_IE ){
			
      }
			
		}

	}
	add_action('wp_print_scripts', 'gb_framework_enqueue_scripts');
	
}



/* ---------------------------------------------------------------------- */
/*	Theme style
/* ---------------------------------------------------------------------- */
if ( !function_exists('gb_framework_register_style') ) {
function gb_framework_register_style() {	
		 
		 // Register 
		 wp_register_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css');
		 wp_register_style('awesome', get_template_directory_uri() . '/parts/font-awesome/css/font-awesome.min.css');
		 wp_register_style('bootstrap-responsive', get_template_directory_uri() . '/css/bootstrap-responsive.min.css');
		 wp_register_style('main-styles', get_template_directory_uri() . '/style.css');
		 wp_register_style("shortcodes", get_template_directory_uri() . "/css/shortcodes.css");
		 wp_register_style("bxslider", get_template_directory_uri() . "/parts/bxslider/jquery.bxslider.css");
		 wp_register_style("responsive", get_template_directory_uri() . "/css/responsive.css");
		 wp_register_style("iview", get_template_directory_uri() . "/parts/camera/css/camera.css");
		 wp_register_style("colorbox", get_template_directory_uri() . "/parts/colorbox/colorbox.css");
		 wp_register_style("pie", get_template_directory_uri() . "/parts/pie/jquery.easy-pie-chart.css");
		 wp_register_style("meanmenu", get_template_directory_uri() . "/css/meanmenu.css");
		 wp_register_style("animate", get_template_directory_uri() . "/css/animate.min.css");
		 wp_register_style("woocommerce", get_template_directory_uri() . "/css/woocommerce.css");
		 wp_register_style("ie8", get_template_directory_uri() . "/css/IE.css");
		 wp_register_style("ie7", get_template_directory_uri() . "/parts/font-awesome/css/font-awesome-ie7.min.css");
		 
		 // Enqueue
		 wp_enqueue_style('bootstrap'); 
		 wp_enqueue_style('awesome'); 
		 wp_enqueue_style('bootstrap-responsive'); 
		 wp_enqueue_style('main-styles'); 
		 wp_enqueue_style('shortcodes');
		 wp_enqueue_style('bxslider'); 
		 wp_enqueue_style('responsive');
		 wp_enqueue_style('iview');
		 wp_enqueue_style('colorbox');
		 wp_enqueue_style('meanmenu');
		 wp_enqueue_style('animate');
		 wp_enqueue_style('woocommerce');
		 wp_enqueue_style('pie');
		 wp_enqueue_style('ie8');
		 wp_enqueue_style('ie7');
		 
		 //IE 
		 global $wp_styles;
		 $wp_styles->add_data("ie8", 'conditional', 'lt IE 9');
		 $wp_styles->add_data("ie7", 'conditional', 'IE 7');
}

add_action('wp_print_styles', 'gb_framework_register_style');
}







/* ---------------------------------------------------------------------- */
/*	Admin Theme scripts
/* ---------------------------------------------------------------------- */
if ( !function_exists('gb_framework_admin_scripts') ) {
	// Backend Scripts
	function gb_framework_admin_scripts( $hook ) {
   
    wp_register_script( 'custom_meta_boxes', GB_BASE_URL . 'js/custom-meta-boxes.js', array('jquery'), false, true );
		wp_enqueue_script('custom_meta_boxes');
    
		if( $hook == 'post.php' || $hook == 'post-new.php' ) {
			wp_register_script( 'tinymce_scripts', GB_BASE_URL . 'functions/tinymce/js/scripts.js', array('jquery'), false, true );
			wp_enqueue_script('tinymce_scripts');
		}

	}
	add_action('admin_enqueue_scripts', 'gb_framework_admin_scripts');
	
}




/* ---------------------------------------------------------------------- */
/*	Show portfolio page link
/* ---------------------------------------------------------------------- */
function get_portfolio_link($post_id) {
    global $wpdb;
    $results = $wpdb->get_results("SELECT post_id FROM $wpdb->postmeta
    WHERE meta_key='_wp_page_template' AND meta_value='portfolio.php'");
    foreach ($results as $result) {
        $page_id = $result->post_id;
    }
    return get_page_link($page_id);
} 







/* ---------------------------------------------------------------------- */
/*	Show custom slider list
/* ---------------------------------------------------------------------- */
add_filter('manage_edit-slider_columns', 'gb_columns_home_slider');  
function gb_columns_home_slider($columns){
	unset($columns['title']);  
	$column_image = array( 'slide_image' => __('Image', 'gb_framework') );
	$column_title = array( 'slide_title' => __('Slide Title', 'gb_framework') );
	$column_action = array( 'slide_action' => __('Options', 'gb_framework') );
	$columns = array_slice( $columns, 0, 1, true ) + $column_image + array_slice( $columns, 1, NULL, true );
	$columns = array_slice( $columns, 0, 2, true ) + $column_title + array_slice( $columns, 2, NULL, true );
	$columns = array_slice( $columns, 0, 3, true ) + $column_action + array_slice( $columns, 3, NULL, true );
	return $columns;
}  

add_action('manage_posts_custom_column',  'gb_slider_custom_columns', 10, 2);  

function gb_slider_custom_columns($name, $post_id){  
    global $post;
	switch ($name) {
	    case 'slide_image':
	        $image_slide = get_post_meta($post_id, 'isc_image_slide', true);
	        if( !empty($image_slide) ) {
	            echo '<a href="'.get_admin_url() . 'post.php?post=' . $post_id.'&action=edit"><img width="200" src="' . $image_slide . '" /></a>';
	        } else {
	            echo '<a href="'.get_admin_url() . 'post.php?post=' . $post_id.'&action=edit"><img width="200" src="' . GB_BASE_URL . 'images/no_slide.jpg" /></a>';
	        }
	    break; 
		
		case 'slide_title':
			$slide_title = get_post_meta($post_id, 'isc_title_slide', true);
	        echo '<br/><p><b>'.$slide_title.'</b></p>';
	    break;  
		
		case 'slide_action':
			echo '<br/><br/>';
			if ( get_post_status ( $post_id ) == 'trash' ){	
                echo '<span class="delete"><a class="submitdelete" href="'.get_delete_post_link( $post_id, '', true ).'" title="'.__('Delete', 'gb_framework').'">'.__('Delete', 'gb_framework').'</a></span>';
            }else{
                echo '<a href="'.get_admin_url() . 'post.php?post='.$post_id.'&action=edit" title="'.__('Edit', 'gb_framework').'">'.__('Edit', 'gb_framework').'</a> | ';	
                echo '<span class="delete"><a class="submitdelete" href="'.get_delete_post_link( $post_id, '', true ).'" title="'.__('Delete', 'gb_framework').'">'.__('Delete', 'gb_framework').'</a></span>';
            }
	    break;  
		   
		default:
			break;
	}  
}  




/* ---------------------------------------------------------------------- */
/*	Show custom team list
/* ---------------------------------------------------------------------- */
add_filter('manage_edit-team_columns', 'gb_columns_team_member');  
function gb_columns_team_member($columns){
	unset($columns['title']);  
	$column_image = array( 'team_image' => __('Image', 'gb_framework') );
	$column_title = array( 'team_title' => __('Title and Description', 'gb_framework') );
	$column_action = array( 'team_action' => __('Options', 'gb_framework') );
	$columns = array_slice( $columns, 0, 1, true ) + $column_image + array_slice( $columns, 1, NULL, true );
	$columns = array_slice( $columns, 0, 2, true ) + $column_title + array_slice( $columns, 2, NULL, true );
	$columns = array_slice( $columns, 0, 3, true ) + $column_action + array_slice( $columns, 3, NULL, true );
	return $columns;
}  

add_action('manage_posts_custom_column',  'gb_team_custom_columns', 10, 2);  

function gb_team_custom_columns($name, $post_id){  
    global $post;
	switch ($name) {
	    case 'team_image':
	        $image_slide = get_post_meta($post_id, 'isc_image_slide', true);
	        if(has_post_thumbnail( $post->ID ) ) {
	            echo '<a href="'.get_admin_url() . 'post.php?post=' . $post_id.'&action=edit">'.get_the_post_thumbnail($post_id, 'img-admin-item', array('title' => '')).'</a>';
	        } else {
	            echo '<a href="'.get_admin_url() . 'post.php?post=' . $post_id.'&action=edit"><img width="200" src="' . GB_BASE_URL . 'functions/images/no_user.png" /></a>';
	        }
	    break; 
	    
	    case 'team_title':
			$team_title = get_post_field('post_title', $post_id);
			$team_caption = get_post_field('post_content', $post_id);
	        echo '<br/><p><b>'.$team_title.'</b><br/>'.$team_caption.'</p>';
	    break;  
		
		case 'team_action':
			echo '<br/><br/>';
			if ( get_post_status ( $post_id ) == 'trash' ){
                //echo '<a href="'.wp_nonce_url( ''.get_admin_url().'post.php?post='.$post_id.'&action=untrash', 'untrash-'.$post_id ).'" title="Restore">Restore</a> | ';	
                echo '<span class="delete"><a class="submitdelete" href="'.get_delete_post_link( $post_id, '', true ).'" title="'.__('Delete', 'gb_framework').'">'.__('Delete', 'gb_framework').'</a></span>';
            }else{
                echo '<a href="'.get_admin_url() . 'post.php?post='.$post_id.'&action=edit" title="'.__('Edit', 'gb_framework').'">'.__('Edit', 'gb_framework').'</a> | ';	
                echo '<span class="delete"><a class="submitdelete" href="'.get_delete_post_link( $post_id, '', true ).'" title="'.__('Delete', 'gb_framework').'">'.__('Delete', 'gb_framework').'</a></span>';
            }
	    break;  
				   
		default:
			break;
	}  
}  





/* ---------------------------------------------------------------------- */
/*	Show custom clients list
/* ---------------------------------------------------------------------- */
add_filter('manage_edit-clients_columns', 'gb_columns_clients');  
function gb_columns_clients($columns){
	unset($columns['title']);  
	$column_image = array( 'clients_image' => __('Image', 'gb_framework') );
	$column_url = array( 'clients_url' => __('Client Name and URL', 'gb_framework') );
	$column_action = array( 'clients_action' => __('Options', 'gb_framework') );
	$columns = array_slice( $columns, 0, 1, true ) + $column_image + array_slice( $columns, 1, NULL, true );
	$columns = array_slice( $columns, 0, 2, true ) + $column_url + array_slice( $columns, 2, NULL, true );
	$columns = array_slice( $columns, 0, 3, true ) + $column_action + array_slice( $columns, 3, NULL, true );
	return $columns;
}  

add_action('manage_posts_custom_column',  'gb_clients_custom_columns', 10, 2);  

function gb_clients_custom_columns($name, $post_id){  
    global $post;
	switch ($name) {
	    case 'clients_image':
	        $image_slide = get_post_meta($post_id, 'isc_image_clients', true);
	        if( !empty($image_slide) ) {
	            echo '<a href="'.get_admin_url() . 'post.php?post=' . $post_id.'&action=edit"><img width="200" src="' . $image_slide . '" /></a>';
	        } else {
	            echo '<a href="'.get_admin_url() . 'post.php?post=' . $post_id.'&action=edit"><img width="200" src="' . GB_BASE_URL . 'functions/img/no_img.jpg" /></a>';
	        }
	    break; 
		
		case 'clients_url':
			$clients_name = get_post_meta($post_id, 'isc_name_clients', true);
			$clients_url  = get_post_meta($post_id, 'isc_url_clients', true);
	        echo '<p>'.$clients_name.'</p>
	              <p>'.$clients_url.'</p>';
	    break;  
		
		case 'clients_action':
			echo '<br/>';
			if ( get_post_status ( $post_id ) == 'trash' ){
                //echo '<a href="'.wp_nonce_url( ''.get_admin_url().'post.php?post='.$post_id.'&action=untrash', 'untrash-'.$post_id ).'" title="Restore">Restore</a> | ';	
                echo '<span class="delete"><a class="submitdelete" href="'.get_delete_post_link( $post_id, '', true ).'" title="'.__('Delete', 'gb_framework').'">'.__('Delete', 'gb_framework').'</a></span>';
            }else{
                echo '<a href="'.get_admin_url() . 'post.php?post='.$post_id.'&action=edit" title="'.__('Edit', 'gb_framework').'">'.__('Edit', 'gb_framework').'</a> | ';	
                echo '<span class="delete"><a class="submitdelete" href="'.get_delete_post_link( $post_id, '', true ).'" title="'.__('Delete', 'gb_framework').'">'.__('Delete', 'gb_framework').'</a></span>';
            }
	    break;  
		   
		default:
			break;
	}  
}  






/* ---------------------------------------------------------------------- */
/*	Show testimonials team list
/* ---------------------------------------------------------------------- */
add_filter('manage_edit-testimonials_columns', 'gb_columns_testimonials');  
function gb_columns_testimonials($columns){
	unset($columns['title']);  
	$column_title = array( 'testimonial_title' => __('Client and Testimonial', 'gb_framework') );
	$column_action = array( 'testimonial_action' => __('Options', 'gb_framework') );
	$columns = array_slice( $columns, 0, 1, true ) + $column_title + array_slice( $columns, 1, NULL, true );
	$columns = array_slice( $columns, 0, 2, true ) + $column_action + array_slice( $columns, 2, NULL, true );
	return $columns;
}  

add_action('manage_posts_custom_column',  'gb_testimonials_custom_columns', 10, 2);  

function gb_testimonials_custom_columns($name, $post_id){  
    global $post;
	switch ($name) {
	    
	    case 'testimonial_title':
			$testimonial_title = get_post_meta($post_id, 'isc_name_testimonials', true);
			$testimonial_caption = get_post_meta($post_id, 'isc_content_testimonials', true);
	        echo '<br/><p><b>'.$testimonial_title.'</b><br/>'.$testimonial_caption.'</p>';
	    break;  
		
		case 'testimonial_action':
			echo '<br/><br/>';
			if ( get_post_status ( $post_id ) == 'trash' ){
                //echo '<a href="'.wp_nonce_url( ''.get_admin_url().'post.php?post='.$post_id.'&action=untrash', 'untrash-'.$post_id ).'" title="Restore">Restore</a> | ';	
                echo '<span class="delete"><a class="submitdelete" href="'.get_delete_post_link( $post_id, '', true ).'" title="'.__('Delete', 'gb_framework').'">'.__('Delete', 'gb_framework').'</a></span>';
            }else{
                echo '<a href="'.get_admin_url() . 'post.php?post='.$post_id.'&action=edit" title="'.__('Edit', 'gb_framework').'">'.__('Edit', 'gb_framework').'</a> | ';	
                echo '<span class="delete"><a class="submitdelete" href="'.get_delete_post_link( $post_id, '', true ).'" title="'.__('Delete', 'gb_framework').'">'.__('Delete', 'gb_framework').'</a></span>';
            }
	    break;  
				   
		default:
			break;
	}  
}  


/**
 * WooCommerce Extra Feature
 * --------------------------
 *
 * Change number of related products on product page
 * Set your own value for 'posts_per_page'
 *
 */ 
function woo_related_products_limit() {
  global $product;
	
	$args = array(
		'post_type'        		=> 'product',
		'no_found_rows'    		=> 1,
		'posts_per_page'   		=> 4,
		'ignore_sticky_posts' 	=> 1,
		'orderby'             	=> $orderby,
		'post__in'            	=> $related,
		'post__not_in'        	=> array($product->id)
	);
	return $args;
}
add_filter( 'woocommerce_related_products_args', 'woo_related_products_limit' );


// Redefine woocommerce_output_related_products()
function woocommerce_output_related_products() {
woocommerce_related_products(4,4); // Display 4 products in rows of 2
}


?>