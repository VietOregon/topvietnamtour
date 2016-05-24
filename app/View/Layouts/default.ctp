<!DOCTYPE html>
<html>
	<head>
		<!-- meta data -->
		<meta http-equiv="Content-Type" content="text/html;
		charset=utf-8">
		<title>Real Estate Professional</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="format-detection" content="telephone=no">
		<!-- End meta data -->
		<!-- styles -->
		<?php echo $this->element ( 'css' ); ?>


		<script type="text/javascript" src="js/topvietnamtour/jquery-1.11.2.min.js"></script>
		<script type="text/javascript" charset="UTF-8" src="http://maps.googleapis.com/maps-api-v3/api/js/23/10/common.js"></script>
		<script type="text/javascript" charset="UTF-8" src="http://maps.googleapis.com/maps-api-v3/api/js/23/10/util.js"></script>
		<script type="text/javascript" charset="UTF-8" src="http://maps.googleapis.com/maps-api-v3/api/js/23/10/stats.js"></script>
	</head>
	<body>
		<?php echo $this->element('header')?>
		<div class="mm-page">
			<?php echo $this->fetch('content')?>
			<?php echo $this->element('footer'); ?>
		</div>
		<!--  ==== Start Scroll Top ==== -->
		<div class="top">
			<a href="#" class="scrollup" style="display: inline;"></a>
		</div>
		<!--  ==== End Scroll Top ==== -->
		<?php echo $this->element ( 'js' ); ?>
	</body>
</html>