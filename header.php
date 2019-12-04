<!DOCTYPE html>
<!--[if IE 6]>
<html id="ie6" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 7]>
<html id="ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html id="ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 6) | !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="utf-8">

<?php $checkOpt = get_option('alexio'); ?>

<?php
if(!empty($checkOpt['is_favicon'])) { ?>
	<link rel="shortcut icon" href="<?php echo $checkOpt['is_favicon']?>" />
<?php } ?>

<!-- Mobile Specific
 ================================================== -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- SEO Specific
 ================================================== -->
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
<meta name="description" content="<?php bloginfo('description') ?>" />
<meta name="generator" content="WordPress <?php bloginfo('version') ?>" /><!-- Please leave for stats -->

<title><?php bloginfo('name'); ?> <?php if ( is_single() ) { ?> &raquo; Blog Archive <?php } ?> <?php wp_title(); ?></title>

<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> Comments RSS Feed" href="<?php bloginfo('comments_rss2_url') ?>"  />

<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />	




<?php wp_head() ?>


 

<!-- Java Script
 ================================================== -->
<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 10]>
<script src="<?php echo get_template_directory_uri(); ?>/parts/html5shiv/html5shiv.js"></script>
<![endif]-->


<?php
if(!empty($checkOpt['is_css'])) { ?>
	<style>
	<?php echo $checkOpt['is_css']; ?>
	</style>
<?php } ?>


    
</head>
<body onload="initPieChart();">



<!-- Begin page Header -->
  <header>
  

<!-- Begin Menu -->
  
  <section id="site-menu">
    <div class="wrap">
    <div class="container">
    <div class="logo-header">
      <?php if(!empty($checkOpt['is_logo'])) { ?>
      <a href="<?php echo get_settings('home'); ?>" title="<?php bloginfo('name'); ?>"><img src="<?php echo $checkOpt['is_logo']; ?>" width="50" alt="<?php bloginfo('name'); ?>" /></a>
      <?php }else{ ?>
      <div class="logo-site-text"><a href="<?php echo get_settings('home'); ?>" title="<?php bloginfo('name'); ?>"><?php bloginfo('name'); ?></a></div>
      <?php } ?>
    </div>
      <div class="menu-header">
      
      <?php if(has_nav_menu('primary_nav')) { ?>
      
      <nav>
        <?php wp_nav_menu( array( 'sort_column' => 'menu_order', 'container_class' => 'primary_nav' ) ); ?>
			</nav>
			
			<?php } else{ ?>
			
			<?php 
			echo '<div class="logo-site-text">No menu!</div>';
			}
			?>
      
      </div>
      <div class="clearfix"></div>
    
    </div>
    </div>
  </section>
  
  
  
  
  
  
  <?php
  if ( is_page_template('homepage.php') ) { }
  else{
  ?>
  
  <?php
  if ( is_front_page() ) { ?>
  
  
  
  <?php
  } else { ?>
  
  
  
    <section class="wrap-slide-page">
	  <div class="wrap">
	  <div class="container">
        <h1><?php wp_title("",true); ?> </h1>
      <div class="clearfix"></div>
    </div>
    </div>
	</section>
	
  <?php } ?>
  <?php } ?>
  
  

  </header>
  
  