<?php
$absolute_path = __FILE__;
$path_to_file = explode('wp-content', $absolute_path);
$path_to_wp = $path_to_file[0];

//Access WordPress
require_once( $path_to_wp . '/wp-load.php' );
?>
<!DOCTYPE html>

<html lang="en">
<head>
	<meta charset="utf-8">
	<style>
		#main-shortcodes { width: 95%; }
		#aw-shortcodes label { font-weight: bold; }
		#aw-shortcodes label em { font-weight: normal; }
		#aw-shortcodes th { padding: 18px 10px; }
		#aw-shortcodes .red { color: red; }
	</style>
</head>
<body>

<div id="main-shortcodes">

	<table id="aw-shortcodes" class="form-table">

		<tbody>

			<!-- start dropdown -->
			<tr>

				<th class="label">

					<label for="shortcode-dropdown"><?php _e('All shortcodes', 'gb_framework'); ?></label>

				</th>

				<td class="field">
			
					<select name="shortcode-dropdown" id="shortcode-dropdown" class="widefat">
						<option value=""><?php _e('Select a Shortcode', 'gb_framework'); ?></option>
						<optgroup label="- <?php _e('General', 'gb_framework'); ?> - ">
							<option value="divider"><?php _e('Divider', 'gb_framework'); ?></option>
							<option value="button-code"><?php _e('Button', 'gb_framework'); ?></option>
							<option value="dropcap"><?php _e('Dropcap', 'gb_framework'); ?></option>
							<option value="list"><?php _e('List', 'gb_framework'); ?></option>
							<option value="quote"><?php _e('Quote', 'gb_framework'); ?></option>
							<option value="icon"><?php _e('Icon', 'gb_framework'); ?></option>
							<option value="skills"><?php _e('Skills', 'gb_framework'); ?></option>
							<option value="services"><?php _e('Services box', 'gb_framework'); ?></option>
							<option value="accordion-content"><?php _e('Toggle Content', 'gb_framework'); ?></option>
							<option value="content-tabs"><?php _e('Content Tabs', 'gb_framework'); ?></option>
							<option value="video-player"><?php _e('Video Player', 'gb_framework'); ?></option>
							<option value="audio-player"><?php _e('Audio Player', 'gb_framework'); ?></option>
						</optgroup>
						<optgroup label="- <?php _e('Alert Boxes', 'gb_framework'); ?> -">
							<option value="alert-error"><?php _e('Error', 'gb_framework'); ?></option>
							<option value="alert-success"><?php _e('Success', 'gb_framework'); ?></option>
							<option value="alert-warning"><?php _e('Warning', 'gb_framework'); ?></option>
							<option value="alert-notice"><?php _e('Notice', 'gb_framework'); ?></option>
						</optgroup>
						<optgroup label="- <?php _e('Layout', 'gb_framework'); ?> -">
							<option value="one-half"><?php _e('1/2', 'gb_framework'); ?></option>
							<option value="one-third"><?php _e('1/3', 'gb_framework'); ?></option>
							<option value="one-fourth"><?php _e('1/4', 'gb_framework'); ?></option>
							<option value="two-third"><?php _e('2/3', 'gb_framework'); ?></option>
						</optgroup>
						<optgroup label="- <?php _e('Template Tags', 'gb_framework'); ?> -">
							<option value="portfolio"><?php _e('Portfolio', 'gb_framework'); ?></option>
							<option value="slider"><?php _e('Slider', 'gb_framework'); ?></option>
							<option value="team-member"><?php _e('Team Members', 'gb_framework'); ?></option>
							<option value="testimonials"><?php _e('Testimonials', 'gb_framework'); ?></option>
							<option value="clients"><?php _e('Clients', 'gb_framework'); ?></option>
						</optgroup>
					</select>

				</td>

			</tr>
			<!-- end dropdown -->

			<!-- start divider -->
			<tr class="option divider">


			</tr>
			<!-- end divider -->


			<!-- start button-code -->
			<tr class="option button-code">

				<th class="label">

					<label for="button-code-content"><?php _e('Text', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<input type="text" name="button-code-content" id="button-code-content" value="" class="widefat">

				</td>

			</tr>

			<tr class="option button-code">

				<th class="label">

					<label for="button-code-url"><?php _e('URL', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<input type="text" name="button-code-url" id="button-code-url" value="" class="widefat">

				</td>

			</tr>

			<tr class="option button-code">

				<th class="label">

					<label for="button-code-target"><?php _e('Open link in a new window/tab', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<input type="checkbox" name="button-code-target" id="button-code-target" value="_blank">

				</td>

			</tr>

			<tr class="option button-code">

				<th class="label">

					<label for="button-code-align"><?php _e('Align', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<select name="button-code-align" id="button-code-align" class="widefat">
						<option value="" selected><?php _e('None', 'gb_framework'); ?></option>
						<option value="left"><?php _e('Left', 'gb_framework'); ?></option>
						<option value="center"><?php _e('Center', 'gb_framework'); ?></option>
						<option value="right"><?php _e('Right', 'gb_framework'); ?></option>
					</select>

				</td>

			</tr>
			
			<tr class="option button-code">

				<th class="label">

					<label for="button-code-back"><?php _e('Background', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<select name="button-code-back" id="button-code-back" class="widefat">
						<option value="light" selected><?php _e('Light', 'gb_framework'); ?></option>
						<option value="dark"><?php _e('Dark', 'gb_framework'); ?></option>
					</select>

				</td>

			</tr>
			<!-- end button-code -->

			<!-- start dropcap -->
			<tr class="option dropcap">

				<th class="label">

					<label for="dropcap-content"><?php _e('Text', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
					
					<input type="text" name="dropcap-content" id="dropcap-content" value="" class="widefat">

				</td>

			</tr>

			
			<!-- end dropcap -->

			

			<!-- start quote -->
			<tr class="option quote">

				<th class="label">

					<label for="quote-author"><?php _e('Author', 'gb_framework'); ?></label>

				</th>

				<td class="field">
					
					<input type="text" name="quote-author" id="quote-author" value="" class="widefat">

				</td>

			</tr>

			<tr class="option quote">

				<th class="label">

					<label for="quote-content"><?php _e('Content', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<textarea name="quote-content" id="quote-content" cols="30" rows="5" class="widefat"></textarea>

			</td>

			</tr>
			<!-- end quote -->
			
			
			<!-- start icon -->
			<tr class="option icon">

				<th class="label">

					<label for="icon-size"><?php _e('Icon size', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<select name="icon-size" id="icon-size" class="widefat">
						<option value="1" selected><?php _e('Small', 'gb_framework'); ?></option>
						<option value="2"><?php _e('Normal', 'gb_framework'); ?></option>
						<option value="3"><?php _e('Big', 'gb_framework'); ?></option>
					</select>

				</td>

			</tr>
			
			<tr class="option icon">

				<th class="label">

					<label for="icon-color"><?php _e('Icon color', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<select name="icon-color" id="icon-color" class="widefat">
						<option value="1" selected><?php _e('Site color', 'gb_framework'); ?></option>
						<option value="2"><?php _e('Text Color', 'gb_framework'); ?></option>
					</select>

				</td>

			</tr>
			
			<tr class="option icon">

				<th class="label">

					<label for="inicon"><?php _e('Icon', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
					
					<select name="inicon" id="inicon" class="widefat">
						<option value="" selected><?php _e('Select icon', 'gb_framework'); ?></option>
						<?php include( GB_BASE_DIR . '/functions/tinymce/icons.php' ); ?>
					</select>

				</td>

			</tr>
			<!-- end icon -->
			
			
			<!-- start skills -->
			<tr class="option skills">

				<th class="label">

					<label for="skills-title"><?php _e('Skill Title', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
					
					<input type="text" name="skills-title" id="skills-title" value="" class="widefat">

				</td>

			</tr>

			<tr class="option skills">

				<th class="label">

					<label for="skills-percent"><?php _e('Skill Percent', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
					
					<input type="text" name="skills-percent" id="skills-percent" value="" class="widefat"><em>(Only numbers! From 1 to 100)</em>

				</td>

			</tr>
			
			<tr class="option skills">

				<th class="label">

					<label for="skills-color"><?php _e('Skill Color', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
					
					<input type="text" name="skills-color" id="skills-color" value="#323A45" class="widefat">

				</td>

			</tr>
			<!-- end skills -->
			
			
			<!-- start services -->
			<tr class="option services">

				<th class="label">

					<label for="services-col"><?php _e('Columns', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<select name="services-col" id="services-col" class="widefat">
						<option value="2" selected><?php _e('1/2', 'gb_framework'); ?></option>
						<option value="3"><?php _e('1/3', 'gb_framework'); ?></option>
						<option value="4"><?php _e('1/4', 'gb_framework'); ?></option>
					</select>

				</td>

			</tr>
			
			<tr class="option services">

				<th class="label">

					<label for="services-icon"><?php _e('Icon', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
					
					<select name="services-icon" id="services-icon" class="widefat">
						<option value="" selected><?php _e('Select icon', 'gb_framework'); ?></option>
						<?php include( GB_BASE_DIR . '/functions/tinymce/icons.php' ); ?>
					</select>

				</td>

			</tr>

			<tr class="option services">

				<th class="label">

					<label for="services-type"><?php _e('Style', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<select name="services-type" id="services-type" class="widefat">
						<option value="1" selected><?php _e('Style 1', 'gb_framework'); ?></option>
						<option value="2"><?php _e('Style 2', 'gb_framework'); ?></option>
						<option value="3"><?php _e('Style 3', 'gb_framework'); ?></option>
					</select>

				</td>

			</tr>
			
			<tr class="option services">

				<th class="label">

					<label for="services-title"><?php _e('Title', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
					
					<input type="text" name="services-title" id="services-title" value="" class="widefat">

				</td>

			</tr>

			<tr class="option services">

				<th class="label">

					<label for="services-content"><?php _e('Content', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<textarea name="services-content" id="services-content" cols="30" rows="5" class="widefat"></textarea>

			</td>

			</tr>
			
			<tr class="option services">

				<th class="label">

					<label for="services-more"><?php _e('Read more title', 'gb_framework'); ?></label>

				</th>

				<td class="field">
					
					<input type="text" name="services-more" id="services-more" value="" class="widefat">

				</td>

			</tr>
			
			<tr class="option services">

				<th class="label">

					<label for="services-link"><?php _e('Read more link', 'gb_framework'); ?></label>

				</th>

				<td class="field">
					
					<input type="text" name="services-link" id="services-link" value="" class="widefat">

				</td>

			</tr>
			<!-- end services -->
			
			

			<!-- start list -->
			<tr class="option list">

				<th class="label">

					<label for="list-style"><?php _e('Icon', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<select name="list-icon" id="list-icon" class="widefat">
						<option value="none"><?php _e('None', 'gb_framework'); ?></option>
						<option value="chevron-sign-right" selected><?php _e('Arrow', 'gb_framework'); ?></option>
						<option value="ok-sign"><?php _e('Check', 'gb_framework'); ?></option>
						<option value="circle"><?php _e('Circle', 'gb_framework'); ?></option>
						<option value="plus-sign"><?php _e('Plus', 'gb_framework'); ?></option>
						<option value="minus-sign"><?php _e('Minus', 'gb_framework'); ?></option>
						<option value="star"><?php _e('Star', 'gb_framework'); ?></option>
					</select>

				</td>

			</tr>

			<tr class="option list">

				<th class="label">

					<label for="list-content"><?php _e('Content', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<textarea name="list-content" id="list-content" cols="30" rows="5" class="widefat"></textarea>

				</td>

			</tr>
			<!-- end list -->

			

			<!-- start accordion-content -->
			<tr class="option accordion-content">

				<th class="label">

					<label for="accordion-content-title"><?php _e('Title', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<input type="text" name="accordion-content-title" id="accordion-content-title" value="" class="widefat">

				</td>

			</tr>
			

			<tr class="option accordion-content">

				<th class="label">

					<label for="accordion-content-content"><?php _e('Content', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<textarea name="accordion-content-content" id="accordion-content-content" cols="30" rows="5" class="widefat"></textarea>

				</td>

			</tr>

			
			<!-- end accordion-content -->

			<!-- start content-tabs -->
			<tr class="option content-tabs">

				<th class="label">

					<label for="content-tabs-title"><?php _e('Title', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<input type="text" name="content-tabs-title" id="content-tabs-title" value="" class="widefat">

				</td>

			</tr>

			<tr class="option content-tabs">

				<th class="label">

					<label for="content-tabs-content"><?php _e('Content', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<textarea name="content-tabs-content" id="content-tabs-content" cols="30" rows="5" class="widefat"></textarea>

				</td>

			</tr>
			<!-- end content-tabs -->

			

			<!-- start video-player -->
			<tr class="option video-player">

				<th class="label">

					<label for="video-player-mp4"><?php _e('MP4 file URL', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<input type="text" name="video-player-mp4" id="video-player-mp4" value="" class="widefat">
					<em><?php _e('(For Safari, Internet Explorer 9, iPhone, iPad, Android, and Windows Phone 7)', 'gb_framework'); ?></em>

				</td>

			</tr>

			<tr class="option video-player">

				<th class="label">

					<label for="video-player-webm"><?php _e('WebM file URL', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<input type="text" name="video-player-webm" id="video-player-webm" value="" class="widefat">
					<em><?php _e('(For Firefox4, Opera, and Chrome)', 'gb_framework'); ?></em>

				</td>

			</tr>

			<tr class="option video-player">

				<th class="label">

					<label for="video-player-ogg"><?php _e('OGG file URL', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<input type="text" name="video-player-ogg" id="video-player-ogg" value="" class="widefat">
					<em><?php _e('(For older Firefox and Opera versions)', 'gb_framework'); ?></em>

				</td>

			</tr>

			<tr class="option video-player">

				<th class="label">

					<label for="video-player-poster"><?php _e('Preview image URL', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<input type="text" name="video-player-poster" id="video-player-poster" value="" class="widefat">

				</td>

			</tr>


			<tr class="option video-player">

				<th class="label">

					<label for="video-player-aspect-ratio"><?php _e('Aspect ratio', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<input type="text" name="video-player-aspect-ratio" id="video-player-aspect-ratio" value="1.7" class="widefat">

				</td>

			</tr>
			<!-- end video-player -->

			<!-- start audio-player -->
			<tr class="option audio-player">

				<th class="label">

					<label for="audio-player-mp3"><?php _e('MP3 File URL', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<input type="text" name="audio-player-mp3" id="audio-player-mp3" value="" class="widefat">
					<em><?php _e('(For Safari, Internet Explorer, Chrome)', 'gb_framework'); ?></em>

				</td>

			</tr>

			<tr class="option audio-player">

				<th class="label">

					<label for="audio-player-ogg"><?php _e('OGG File URL', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<input type="text" name="audio-player-ogg" id="audio-player-ogg" value="" class="widefat">
					<em><?php _e('(For Firefox, Opera, Chrome)', 'gb_framework'); ?></em>

				</td>

			</tr>
			<!-- end audio-player -->

			<!-- start alert-boxes -->
			<tr class="option alert-boxes">

				<th class="label">

					<label for="alert-boxes-content"><?php _e('Content', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<textarea name="alert-boxes-content" id="alert-boxes-content" cols="30" rows="5" class="widefat"></textarea>

				</td>

			</tr>
			<!-- end alert-boxes -->

			<!-- start layout -->
			<tr class="option layout">

				<th class="label">

					<label for="layout-content"><?php _e('Content', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<textarea name="layout-content" id="layout-content" cols="30" rows="5" class="widefat"></textarea>

				</td>

			</tr>
			<!-- end layout -->
			
			<!-- start layout 2/3 -->
			<tr class="option two-third">

				<th class="label">

					<label for="layout-content-2"><?php _e('Content 2', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<textarea name="layout-content-2" id="layout-content-2" cols="30" rows="5" class="widefat"></textarea>

				</td>

			</tr>
			
			<tr class="option two-third">

				<th class="label">

					<label for="layout-content-3"><?php _e('Content 3', 'gb_framework'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<textarea name="layout-content-3" id="layout-content-3" cols="30" rows="5" class="widefat"></textarea>

				</td>

			</tr>
			<!-- end layout 2/3 -->


			<!-- start testimonials -->
			<tr class="option testimonials">

				<th class="label">

					<label for="testimonials-limit"><?php _e('Limit', 'gb_framework'); ?> <em></label>

				</th>

				<td class="field">
				
					<input type="text" name="testimonials-limit" id="testimonials-limit" value="" class="widefat">
					<em><?php _e('(Only numbers! Default: 10)', 'gb_framework'); ?></em>

				</td>

			</tr>
			<!-- end testimonials -->
			
			
			<!-- start portfolio -->
			<tr class="option portfolio">

				<th class="label">

					<label for="portfolio-columns"><?php _e('Columns', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<select name="portfolio-columns" id="portfolio-columns" class="widefat">
						<option value="3"><?php _e('3', 'gb_framework'); ?></option>
						<option value="4"><?php _e('4', 'gb_framework'); ?></option>
					</select>
					
				</td>

			</tr>

			</tr>
			
			<!-- end portfolio -->

			<!-- start slider -->
			<tr class="option slider">

				<th class="label">

					<label for="slider-style"><?php _e('Slider style', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<select name="slider-style" id="slider-style" class="widefat">
						<option value="1"><?php _e('Normal', 'gb_framework'); ?></option>
					</select>
					
				</td>

			</tr>
			<!-- end slider -->

			<!-- start team-member -->
			<tr class="option team-member">

				<th class="label">

					<label for="team-member-column"><?php _e('Column', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<select name="team-member-column" id="team-member-column" class="widefat">
						<option value="2"><?php _e('1/2', 'gb_framework'); ?></option>
						<option value="3"><?php _e('1/3', 'gb_framework'); ?></option>
						<option value="4" selected><?php _e('1/4', 'gb_framework'); ?></option>
					</select>
					
				</td>

			</tr>
			<!-- end team-member -->
			
			
			<!-- start clients -->
			<tr class="option clients">

				<th class="label">

					<label for="clients-column"><?php _e('Column', 'gb_framework'); ?></label>

				</th>

				<td class="field">
				
					<select name="clients-column" id="clients-column" class="widefat">
						<option value="2"><?php _e('1/2', 'gb_framework'); ?></option>
						<option value="3"><?php _e('1/3', 'gb_framework'); ?></option>
						<option value="4"><?php _e('1/4', 'gb_framework'); ?></option>
						<option value="6" selected><?php _e('1/6', 'gb_framework'); ?></option>
					</select>
					
				</td>

			</tr>
			
			<tr class="option clients">

				<th class="label">

					<label for="clients-limit"><?php _e('Limit', 'gb_framework'); ?> <em></label>

				</th>

				<td class="field">
				
					<input type="text" name="clients-limit" id="clients-limit" value="" class="widefat">
					<em><?php _e('(Only numbers! Default: 6)', 'gb_framework'); ?></em>

				</td>

			</tr>
			<!-- end clients -->
			

			<!-- start insert -->
			<tr>

				<th class="label"></th>

				<td class="field">

					<p><button id="insert-shortcode" class="button-primary"><?php _e('Insert Shortcode', 'gb_framework'); ?></button></p>

				</td>

			</tr>
			<!-- end insert -->

		</tbody>

	</table>
	
</div><!-- end #main -->

<script>jQuery('.option').hide();</script>

</body>
</html>