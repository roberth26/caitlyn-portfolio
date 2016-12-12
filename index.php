<?php
require_once( './components/navigation/Navigation.php' );
?>

<html class="wf-loading">
	<head>
		<title>Caitlyn's Portfolio</title>
		<style><?= file_get_contents( './css/index.min.css' ) ?></style>
	</head>
	<body>
		<?php
			Navigation([
				[
					'label' => 'Start',
					'path' => '#/start',
					'elementSelector' => '#start'
				],
				[
					'label' => 'About',
					'path' => '#/about',
					'elementSelector' => '#about'
				],
				[
					'label' => 'Portfolio',
					'path' => '#/portfolio',
					'elementSelector' => '#portfolio'
				],
				[
					'label' => 'Contact',
					'path' => '#/contact',
					'elementSelector' => '#contact'
				]
			]);
		?>
		<?php require_once( './sections/start/start.php' ) ?>
		<?php require_once( './sections/about/about.php' ) ?>
		<?php require_once( './sections/portfolio/portfolio.php' ) ?>
		<?php require_once( './sections/contact/contact.php' ) ?>
		<?php require_once( './sections/footer/footer.php' ) ?>
		<script><?= file_get_contents( './js/dist/index.min.js' ) ?></script>
	</body>
</html>