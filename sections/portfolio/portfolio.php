<?php require_once( './components/section/Section.php' ) ?>
<?php require_once( './components/portfolio/Portfolio.php' ) ?>

<?php
Section([
	'class' => 'portfolio',
	'id' => 'portfolio',
	'content' => function() { ?>
		<div class="portfolio__container">
			<h1 class="portfolio__title">My Work</h1>
			<?php Portfolio() ?>
		</div>
	<?php }
]);
?>

<script>
	window.__PORTFOLIO_DATA__ = <?= file_get_contents( './portfolio_data.json' ) ?>;
</script>