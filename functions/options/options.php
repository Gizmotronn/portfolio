<?php
/*
 *
 * Set the text domain for the theme or plugin.
 *
 */
define('Redux_TEXT_DOMAIN', 'gb_framework');

/*
 *
 * Require the framework class before doing anything else, so we can use the defined URLs and directories.
 * If you are running on Windows you may have URL problems which can be fixed by defining the framework url first.
 *
 */
//define('Redux_OPTIONS_URL', site_url('path the options folder'));
if(!class_exists('Redux_Options')) {
    require_once(dirname(__FILE__) . '/defaults.php');
}

/*
 *
 * Custom function for filtering the sections array. Good for child themes to override or add to the sections.
 * Simply include this function in the child themes functions.php file.
 *
 * NOTE: the defined constansts for URLs, and directories will NOT be available at this point in a child theme,
 * so you must use get_template_directory_uri() if you want to use any of the built in icons
 *
 */
function add_another_section($sections) {
    //$sections = array();
    $sections[] = array(
        'title' => __('A Section added by hook', Redux_TEXT_DOMAIN),
        'desc' => __('<p class="description">This is a section created by adding a filter to the sections array. Can be used by child themes to add/remove sections from the options.</p>', Redux_TEXT_DOMAIN),
		'icon' => 'paper-clip',
		'icon_class' => 'icon-large',
        // Leave this as a blank section, no options just some intro text set above.
        'fields' => array()
    );

    return $sections;
}
//add_filter('redux-opts-sections-twenty_eleven', 'add_another_section');


/*
 *
 * Custom function for filtering the args array given by a theme, good for child themes to override or add to the args array.
 *
 */
function change_framework_args($args) {
    //$args['dev_mode'] = false;

    return $args;
}
//add_filter('redux-opts-args-twenty_eleven', 'change_framework_args');


/*
 *
 * Most of your editing will be done in this section.
 *
 * Here you can override default values, uncomment args and change their values.
 * No $args are required, but they can be over ridden if needed.
 *
 */
function setup_framework_options() {
    $args = array();

    // Setting dev mode to true allows you to view the class settings/info in the panel.
    // Default: true
    //$args['dev_mode'] = true;

	// Set the icon for the dev mode tab.
	// If $args['icon_type'] = 'image', this should be the path to the icon.
	// If $args['icon_type'] = 'iconfont', this should be the icon name.
	// Default: info-sign
	//$args['dev_mode_icon'] = 'info-sign';

	// Set the class for the dev mode tab icon.
	// This is ignored unless $args['icon_type'] = 'iconfont'
	// Default: null
	$args['dev_mode_icon_class'] = 'icon-large';

    // If you want to use Google Webfonts, you MUST define the api key.
    //$args['google_api_key'] = 'xxxx';

    // Define the starting tab for the option panel.
    // Default: '0';
    //$args['last_tab'] = '0';

    // Define the option panel stylesheet. Options are 'standard', 'custom', and 'none'
    // If only minor tweaks are needed, set to 'custom' and override the necessary styles through the included custom.css stylesheet.
    // If replacing the stylesheet, set to 'none' and don't forget to enqueue another stylesheet!
    // Default: 'standard'
    //$args['admin_stylesheet'] = 'standard';

    // Add HTML before the form.
    //$args['intro_text'] = __('<p>This text is displayed above the options panel. It isn\'t required, but more info is always better! The intro_text field accepts all HTML.</p>', Redux_TEXT_DOMAIN);

    // Add content after the form.
    //$args['footer_text'] = __('<p>This text is displayed below the options panel. It isn\'t required, but more info is always better! The footer_text field accepts all HTML.</p>', Redux_TEXT_DOMAIN);

    // Set footer/credit line.
    //$args['footer_credit'] = __('<p>This text is displayed in the options panel footer across from the WordPress version (where it normally says \'Thank you for creating with WordPress\'). This field accepts all HTML.</p>', Redux_TEXT_DOMAIN);

    

    // Enable the import/export feature.
    // Default: true
    //$args['show_import_export'] = false;

	// Set the icon for the import/export tab.
	// If $args['icon_type'] = 'image', this should be the path to the icon.
	// If $args['icon_type'] = 'iconfont', this should be the icon name.
	// Default: refresh
	//$args['import_icon'] = 'refresh';

	// Set the class for the import/export tab icon.
	// This is ignored unless $args['icon_type'] = 'iconfont'
	// Default: null
	$args['import_icon_class'] = 'icon-large';

    // Set a custom option name. Don't forget to replace spaces with underscores!
    $args['opt_name'] = 'Alexio';

    // Set a custom menu icon.
    //$args['menu_icon'] = '';

    // Set a custom title for the options page.
    // Default: Options
    $args['menu_title'] = __('Alexio', Redux_TEXT_DOMAIN);

    // Set a custom page title for the options page.
    // Default: Options
    $args['page_title'] = __('Alexio', Redux_TEXT_DOMAIN);

    // Set a custom page slug for options page (wp-admin/themes.php?page=***).
    // Default: redux_options
    $args['page_slug'] = 'alexio_options';

    // Set a custom page capability.
    // Default: manage_options
    //$args['page_cap'] = 'manage_options';

    // Set the menu type. Set to "menu" for a top level menu, or "submenu" to add below an existing item.
    // Default: menu
    //$args['page_type'] = 'submenu';

    // Set the parent menu.
    // Default: themes.php
    // A list of available parent menus is available at http://codex.wordpress.org/Function_Reference/add_submenu_page#Parameters
    //$args['page_parent'] = 'options-general.php';

    // Set a custom page location. This allows you to place your menu where you want in the menu order.
    // Must be unique or it will override other items!
    // Default: null
    //$args['page_position'] = null;

    // Set a custom page icon class (used to override the page icon next to heading)
    //$args['page_icon'] = 'icon-themes';

	// Set the icon type. Set to "iconfont" for Font Awesome, or "image" for traditional.
	// Redux no longer ships with standard icons!
	// Default: iconfont
	//$args['icon_type'] = 'image';
	//$args['dev_mode_icon_type'] = 'image';
	//$args['import_icon_type'] == 'image';

    // Disable the panel sections showing as submenu items.
    // Default: true
    //$args['allow_sub_menu'] = false;

    

    $sections = array();

    
/* ---------------------------------------------------------------------- */
/*	General Settings
/* ---------------------------------------------------------------------- */
    $sections[] = array(
		'icon' => 'cog',
		'icon_class' => 'icon-large',
        'title' => __('General Settings', Redux_TEXT_DOMAIN),
        'fields' => array(
            array(
                'id' => 'is_logo', // The item ID must be unique
                'type' => 'upload', // Built-in field types include:
                // text, textarea, editor, checkbox, multi_checkbox, radio, radio_img, button_set,
                // select, multi_select, color, date, divide, info, upload
                'title' => __('Logo', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Upload .gif or .png image for website logo.', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN)
                //'validate' => '', // Built-in validation includes:
                //  email, html, html_custom, no_html, js, numeric, comma_numeric, url, str_replace, preg_replace
                //'msg' => 'custom error message', // Override the default validation error message for specific fields
                //'std' => '', // This is the default value and is used to set an option on theme activation.
                //'class' => '' // Set custom classes for elements if you want to do something a little different
                //'rows' => '6' // Set the number of rows shown for the textarea. Default: 6
			),
            array(
                'id' => 'is_favicon',
                'type' => 'upload',
                'title' => __('Favicon', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Upload .gif or .png image (16x16 pixels).', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN)
            ),
            array(
                'id' => 'is_css',
                'type' => 'textarea',
                'title' => __('Custom CSS', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Enter any class style here.', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN),
                'validate' => 'html'
            ),
            array(
                'id' => 'is_google_code',
                'type' => 'textarea',
                'title' => __('Custom JavaScript Code', Redux_TEXT_DOMAIN),
                'sub_desc' => __('You can enter any JavaScript code or Google Analytics Code', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN), // See http://codex.wordpress.org/Function_Reference/wp_kses
                'validate' => 'html'
            )
            
        )
    );



/* ---------------------------------------------------------------------- */
/*	Theme Style
/* ---------------------------------------------------------------------- */
    $sections[] = array(
		'icon' => 'magic',
		'icon_class' => 'icon-large',
        'title' => __('Style', Redux_TEXT_DOMAIN),
        'desc' => __('', Redux_TEXT_DOMAIN),
        'fields' => array(
            array(
                'id' => 'is_color1',
                'type' => 'color',
                'title' => __('Accent Color', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Change this color to alter the accent color globally for your site.', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN),
                'std' => '#000000' 
            ),
            array(
                'id' => 'is_fixed_menu',
                'type' => 'checkbox',
                'title' => __('Fixed Menu', Redux_TEXT_DOMAIN),
                'sub_desc' => __('', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN),
                'switch' => 'true',
                'std' => '1'
            ),
            array(
                'id' => 'is_animate_content',
                'type' => 'checkbox',
                'title' => __('Show animated content', Redux_TEXT_DOMAIN),
                'sub_desc' => __('', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN),
                'switch' => 'true',
                'std' => '1'
            ),
            array(
                'id' => 'is_scroll',
                'type' => 'checkbox',
                'title' => __('Smooth Scrolling', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Enable or disable smooth scrolling.', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN),
                'switch' => 'true',
                'std' => '1'
            ),
			
            array(
                'id' => 'is_img_back',
                'type' => 'upload',
                'title' => __('Background image', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Upload .gif or .png image for website background.', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN)
            ),
            array(
                'id' => 'is_img_rep',
                'type' => 'select',
                'title' => __('Background style', Redux_TEXT_DOMAIN),
                'sub_desc' => __('', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN),
                'options' => array('1' => 'Fixed', '2' => 'No Repeat', '3' => 'Repeat'),
                'std' => '1'
            ),
			
        )
    );


/* ---------------------------------------------------------------------- */
/*	Theme Typography
/* ---------------------------------------------------------------------- */
    $sections[] = array(
		'icon' => 'font',
		'icon_class' => 'icon-large',
        'title' => __('Typography', Redux_TEXT_DOMAIN),
        'desc' => __('', Redux_TEXT_DOMAIN),
        'fields' => array(
            array(
                'id' => 'is_use_font',
                'type' => 'checkbox_hide_all',
                'title' => __('Use Custom Google Fonts?', Redux_TEXT_DOMAIN),
                'sub_desc' => __('If you want to use customization font for websites click "ON" and select the wanted font for each section of the website.', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN),
                'switch' => 'true',
                'std' => '0'
            ),
            array(
                'id' => 'is_font_body',
                'type' => 'google_webfonts',
                'title' => __('Body', Redux_TEXT_DOMAIN),
                'sub_desc' => __('', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN)
            ),
            array(
                'id' => 'is_font_header',
                'type' => 'google_webfonts',
                'title' => __('Header', Redux_TEXT_DOMAIN),
                'sub_desc' => __('', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN)
            ),
            array(
                'id' => 'is_font_slider',
                'type' => 'google_webfonts',
                'title' => __('Home Slider Text', Redux_TEXT_DOMAIN),
                'sub_desc' => __('', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN)
            ),
            array(
                'id' => 'is_font_footer',
                'type' => 'google_webfonts',
                'title' => __('Footer', Redux_TEXT_DOMAIN),
                'sub_desc' => __('', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN)
            )
        )
    );



/* ---------------------------------------------------------------------- */
/*	Home Slider
/* ---------------------------------------------------------------------- */
    $sections[] = array(
		'icon' => 'picture',
		'icon_class' => 'icon-large',
        'title' => __('Home Slider', Redux_TEXT_DOMAIN),
        'desc' => __('', Redux_TEXT_DOMAIN),
        'fields' => array(
            array(
                'id' => 'is_slider_spedd',
                'type' => 'text',
                'title' => __('Slider Speed', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Time to change image.', Redux_TEXT_DOMAIN),
                'desc' => __('only numeric in milliseconds (10000 - default).', Redux_TEXT_DOMAIN),
                'validate' => 'numeric'
            )
            
        )
    );



/* ---------------------------------------------------------------------- */
/*	Blog Settings
/* ---------------------------------------------------------------------- */
    $sections[] = array(
		'icon' => 'edit',
		'icon_class' => 'icon-large',
        'title' => __('Blog Settings', Redux_TEXT_DOMAIN),
        'desc' => __('', Redux_TEXT_DOMAIN),
        'fields' => array(
            array(
                'id' => 'is_autor_bio',
                'type' => 'checkbox',
                'title' => __('Show author bio', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Select if you want to display author biography in the blog post page.', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN),
                'switch' => 'true',
                'std' => '1'
            ),
            array(
                'id' => 'is_blog_tags',
                'type' => 'checkbox',
                'title' => __('Show tags', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Select if you want to display tags in the blog post page.', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN),
                'switch' => 'true',
                'std' => '1'
            )
            
        )
    );
    
    

/* ---------------------------------------------------------------------- */
/*	Footer Settings
/* ---------------------------------------------------------------------- */
    $sections[] = array(
		'icon' => 'file-alt',
		'icon_class' => 'icon-large',
        'title' => __('Footer Settings', Redux_TEXT_DOMAIN),
        'desc' => __('', Redux_TEXT_DOMAIN),
        'fields' => array(
            array(
                'id' => 'is_copyright_text',
                'type' => 'textarea',
                'title' => __('Copyright text', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Enter the text that appears at the bottom in the footer.', Redux_TEXT_DOMAIN),
                'desc' => __('', Redux_TEXT_DOMAIN),
                'validate' => 'html'
            ),
            array(
                'id' => 'is_facebook',
                'type' => 'checkbox_hide_below',
                'title' => __('Facebook Icon', Redux_TEXT_DOMAIN), 
                'sub_desc' => '',
                'desc' => '',
                'next_to_hide' => '1'
            ),
            array(
                'id' => 'is_facebook_url', 
                'type' => 'text', 
                'title' => __('Facebook URL', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Enter your Facebook URL.', Redux_TEXT_DOMAIN),
                'desc' => ''
			      ),
			      
			      array(
                'id' => 'is_twitter',
                'type' => 'checkbox_hide_below',
                'title' => __('Twitter Icon', Redux_TEXT_DOMAIN), 
                'sub_desc' => '',
                'desc' => '',
                'next_to_hide' => '1'
            ),
            array(
                'id' => 'is_twitter_url', 
                'type' => 'text', 
                'title' => __('Twitter URL', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Enter your Twitter URL.', Redux_TEXT_DOMAIN),
                'desc' => ''
			      ),
			      
			      array(
                'id' => 'is_linkedin',
                'type' => 'checkbox_hide_below',
                'title' => __('LinkedIn Icon', Redux_TEXT_DOMAIN), 
                'sub_desc' => '',
                'desc' => '',
                'next_to_hide' => '1'
            ),
            array(
                'id' => 'is_linkedin_url', 
                'type' => 'text', 
                'title' => __('LinkedIn URL', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Enter your LinkedIn URL.', Redux_TEXT_DOMAIN),
                'desc' => ''
			      ),
			      
			      array(
                'id' => 'is_google',
                'type' => 'checkbox_hide_below',
                'title' => __('Google+ Icon', Redux_TEXT_DOMAIN), 
                'sub_desc' => '',
                'desc' => '',
                'next_to_hide' => '1'
            ),
            array(
                'id' => 'is_google_url', 
                'type' => 'text', 
                'title' => __('Google+ URL', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Enter your Google+ URL.', Redux_TEXT_DOMAIN),
                'desc' => ''
			      ),
			      
			      array(
                'id' => 'is_pinterest',
                'type' => 'checkbox_hide_below',
                'title' => __('Pinterest Icon', Redux_TEXT_DOMAIN), 
                'sub_desc' => '',
                'desc' => '',
                'next_to_hide' => '1'
            ),
            array(
                'id' => 'is_pinterest_url', 
                'type' => 'text', 
                'title' => __('Pinterest URL', Redux_TEXT_DOMAIN),
                'sub_desc' => __('Enter your Pinterest URL.', Redux_TEXT_DOMAIN),
                'desc' => ''
			      )
        )
    );
    

    $tabs = array();

    if (function_exists('wp_get_theme')){
        $theme_data = wp_get_theme();
        $item_uri = $theme_data->get('ThemeURI');
        $description = $theme_data->get('Description');
        $author = $theme_data->get('Author');
        $author_uri = $theme_data->get('AuthorURI');
        $version = $theme_data->get('Version');
        //$tags = $theme_data->get('Tags');
    }else{
        $theme_data = get_theme_data(trailingslashit(get_stylesheet_directory()) . 'style.css');
        $item_uri = $theme_data['URI'];
        $description = $theme_data['Description'];
        $author = $theme_data['Author'];
        $author_uri = $theme_data['AuthorURI'];
        $version = $theme_data['Version'];
        //$tags = $theme_data['Tags'];
     }

    $item_info = '<div class="redux-opts-section-desc">';
    $item_info .= '<p class="redux-opts-item-data description item-uri">' . __('<strong>Theme URL:</strong> ', Redux_TEXT_DOMAIN) . '<a href="' . $item_uri . '" target="_blank">' . $item_uri . '</a></p>';
    $item_info .= '<p class="redux-opts-item-data description item-author">' . __('<strong>Author:</strong> ', Redux_TEXT_DOMAIN) . ($author_uri ? '<a href="' . $author_uri . '" target="_blank">' . $author . '</a>' : $author) . '</p>';
    $item_info .= '<p class="redux-opts-item-data description item-version">' . __('<strong>Version:</strong> ', Redux_TEXT_DOMAIN) . $version . '</p>';
    $item_info .= '<p class="redux-opts-item-data description item-description">' . $description . '</p>';
    //$item_info .= '<p class="redux-opts-item-data description item-tags">' . __('<strong>Tags:</strong> ', Redux_TEXT_DOMAIN) . implode(', ', $tags) . '</p>';
    $item_info .= '</div>';

    $tabs['item_info'] = array(
		'icon' => 'info-sign',
		'icon_class' => 'icon-large',
        'title' => __('Theme Information', Redux_TEXT_DOMAIN),
        'content' => $item_info
    );

    if(file_exists(trailingslashit(dirname(__FILE__)) . 'README.html')) {
        $tabs['docs'] = array(
			'icon' => 'book',
			'icon_class' => 'icon-large',
            'title' => __('Documentation', Redux_TEXT_DOMAIN),
            'content' => nl2br(file_get_contents(trailingslashit(dirname(__FILE__)) . 'README.html'))
        );
    }

    global $Redux_Options;
    $Redux_Options = new Redux_Options($sections, $args, $tabs);

}
add_action('init', 'setup_framework_options', 0);

/*
 *
 * Custom function for the callback referenced above
 *
 */
function my_custom_field($field, $value) {
    print_r($field);
    print_r($value);
}

/*
 *
 * Custom function for the callback validation referenced above
 *
 */
function validate_callback_function($field, $value, $existing_value) {
    $error = false;
    $value =  'just testing';
    /*
    do your validation

    if(something) {
        $value = $value;
    } elseif(somthing else) {
        $error = true;
        $value = $existing_value;
        $field['msg'] = 'your custom error message';
    }
    */

    $return['value'] = $value;
    if($error == true) {
        $return['error'] = $field;
    }
    return $return;
}
