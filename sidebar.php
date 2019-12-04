	<div id="sidebar">		

<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar() ) : ?>

<?php endif; ?>

<?php if ( !is_active_sidebar('blog-widget-area') ) dynamic_sidebar('blog-widget-area'); ?>
<?php if ( is_active_sidebar('sidebar-widget-area') ) dynamic_sidebar('sidebar-widget-area'); ?>

	</div><!-- #sidebar -->
