<?php $checkOpt = get_option('alexio'); ?>

<!-- Begin page Footer -->
<footer>
  <section class="wrap-footer">
  <div class="container container-footer">
      
    <div class="row-fluid">
          <div class="align-left"><p><?php echo $checkOpt['is_copyright_text']; ?></p></div>
          
          <div class="align-right">
          <p>
          <?php if($checkOpt['is_facebook'] == 1) { ?>
          <a href="<?php echo $checkOpt['is_facebook_url']; ?>" class="social-icon"><i class="icon-facebook-sign"></i></a>
          <?php } ?>
          <?php if($checkOpt['is_twitter'] == 1) { ?>
          <a href="<?php echo $checkOpt['is_twitter_url']; ?>" class="social-icon"><i class="icon-twitter-sign"></i></a>
          <?php } ?>
          <?php if($checkOpt['is_linkedin'] == 1) { ?>
          <a href="<?php echo $checkOpt['is_linkedin_url']; ?>" class="social-icon"><i class="icon-linkedin-sign"></i></a>
          <?php } ?>
          <?php if($checkOpt['is_google'] == 1) { ?>
          <a href="<?php echo $checkOpt['is_google_url']; ?>" class="social-icon"><i class="icon-google-plus-sign"></i></a>
          <?php } ?>
          <?php if($checkOpt['is_pinterest'] == 1) { ?>
          <a href="<?php echo $checkOpt['is_pinterest_url']; ?>" class="social-icon"><i class="icon-pinterest-sign"></i></a>
          <?php } ?>
          </p>
          </div>
          
    </div>
    
    
  </div>
  </section>
  
  
  
  

  
  
  

</footer>


<!-- Placed at the end of the document so the pages load faster -->


<?php wp_footer() ?>


<?php
if(!empty($checkOpt['is_google_code'])) { ?>
	<script type="text/javascript">
	<?php echo $checkOpt['is_google_code']; ?>
	</script>
<?php } ?>


<!-- Back To Top Button -->
<div id="backtotop"><a href="#"></a></div>

</body>
</html>