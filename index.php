<html>
	<head>
		<title>Caitlyn's Portfolio</title>
		<style><?= file_get_contents( 'css/index.min.css' ) ?></style>
	</head>
	<body>
		<?php include( 'sections/start/start.php' ) ?>
		<?php include( 'sections/about/about.php' ) ?>
		<?php include( 'sections/portfolio/portfolio.php' ) ?>
		<?php include( 'sections/footer/footer.php' ) ?>
		<script><?= file_get_contents( 'js/dist/index.min.js' ) ?></script>
	</body>
</html>