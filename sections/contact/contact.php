<?php require_once( './components/section/Section.php' ) ?>
<?php require_once( './components/form/Form.php' ) ?>

<?php
Section([
	'class' => 'contact',
	'id' => 'contact',
	'content' => function() { ?>
		<div class="contact__container">
			<div class="contact__col">
				<div class="contact__form">
					<?php Form() ?>				
				</div>
			</div>
			<div class="contact__col"></div>
		</div>
	<?php }
]);
?>