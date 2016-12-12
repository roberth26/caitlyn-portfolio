<?php require_once( './components/menu/Menu.php' ) ?>
<?php require_once( './components/section/Section.php' ) ?>

<?php
Section([
	'class' => 'start',
	'id' => 'start',
	'content' => function() { ?>
		<div class="start__container">
			<?= file_get_contents( './assets/logo.svg' ) ?>
		</div>
		<?php
			Menu([
				[
					'label' => 'About Me',
					'path' => '#/about'
				],
				[
					'label' => 'My Work',
					'path' => '#/portfolio'
				],
				[
					'label' => 'Contact Me',
					'path' => '#/contact'
				]
			]);
		?>
	<?php }
]);
?>