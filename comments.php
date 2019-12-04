<?php
/**
 * @package WordPress
 * @subpackage Default_Theme
 */

// Do not delete these lines
	if (!empty($_SERVER['SCRIPT_FILENAME']) && 'comments.php' == basename($_SERVER['SCRIPT_FILENAME']))
		die (''.__('Please do not load this page directly. Thanks!').'');

	if ( post_password_required() ) { ?>
		<p><?php _e('This post is password protected. Enter the password to view comments.','gb_framework'); ?></p>
	<?php
		return;
	}
?>

<!-- You can start editing here. -->

<?php if ( have_comments() ) : ?>
	<div class="comments-nr">
	  <h5 id="comments"><?php comments_number(''.__('No Comments').'', ''.__('1 Comment').'', '% '.__('Comments').'' );?></h5>
	</div>

	<div class="navigation">
		<div class="navleft"><?php previous_comments_link() ?></div>
		<div class="navright"><?php next_comments_link() ?></div>
		<div class="clearfix"></div>
	</div>

	<ul class="comment-show">
		<?php wp_list_comments(array('avatar_size' => 70)); ?>
	</ul>

 <?php else : // this is displayed if there are no comments so far ?>

	<?php if ( comments_open() ) : ?>
		<!-- If comments are open, but there are no comments. -->

	 <?php else : // comments are closed ?>
		<!-- If comments are closed. -->
		<!--<p class="nocomments">Comments are closed.</p>-->

	<?php endif; ?>
<?php endif; ?>


<?php if ( comments_open() ) : ?>

<div id="respond">

<br/>
<h3><?php comment_form_title( __('Leave a comment','gb_framework'), __('Leave a comment to ','') . '%s' ); ?> <span class="cancel-comment-reply"><small><?php cancel_comment_reply_link(__('Cancel reply','gb_framework')); ?></small></span>
</h3>

<p><?php echo __('Your email address will not be published.','gb_framework'); ?> </p>


<?php if ( get_option('comment_registration') && !is_user_logged_in() ) : ?>
<p><?php _e('You must be','gb_framework'); ?> <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?redirect_to=<?php echo urlencode(get_permalink()); ?>"><?php _e('logged in','gb_framework'); ?></a> <?php _e('to post a comment.','gb_framework'); ?></p>
<?php else : ?>

<div class="comments-sec" id="respond">

<div class="form_comment" id="comment-form">

<br/>
<h5 class="section-title"><?php _e('Post Comment','gb_framework'); ?></h5>
<br/>
<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">

<?php if ( is_user_logged_in() ) : ?>

<p><?php echo __('Logged in as','gb_framework'); ?> <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $user_identity; ?></a>. <a href="<?php echo wp_logout_url(get_permalink()); ?>" title="Log out of this account"><?php echo __('Log out','gb_framework'); ?> &raquo;</a></p>

<?php else : ?>


		<label for="author"><small><?php echo __('Name','gb_framework') ?> <?php if ($req) echo "<span>*</span>"; ?></small></label><input type="text" name="author" id="author" value="<?php echo esc_attr($comment_author); ?>" size="22" tabindex="1" <?php if ($req) echo "aria-required='true'"; ?> />
	
	
	
		<label for="email"><small><?php echo __('Mail','gb_framework'); ?> <?php if ($req) echo "<span>*</span>"; ?></small></label><input type="text" name="email" id="email" value="<?php echo esc_attr($comment_author_email); ?>" size="22" tabindex="2" <?php if ($req) echo "aria-required='true'"; ?> />
	
	
	
		<label for="url"><small><?php echo __('Website', 'gb_framework'); ?> </small></label><input type="text" name="url" id="url" value="<?php echo esc_attr($comment_author_url); ?>" size="22" tabindex="3" />
	
	


<?php endif; ?>


<textarea name="comment" id="comment" cols="100%" rows="10" tabindex="4"></textarea>

<input name="submit" type="submit" id="submit" tabindex="5" value="<?php _e('Submit Your Comment','gb_framework'); ?>" />

</div>
</div>
<?php comment_id_fields(); ?>

<?php do_action('comment_form', $post->ID); ?>

</form>

<?php endif; // If registration required and not logged in ?>
</div>

<?php endif; // if you delete this the sky will fall on your head ?>