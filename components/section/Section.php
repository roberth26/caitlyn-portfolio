<?php
$GLOBALS[ 'section_count' ] = 0;

function Section( $props = [] ) { ?>
	<?php $GLOBALS[ 'section_count' ]++ ?>
	<section
		class="section <?= $props[ 'class' ] ?>"
		id="<?= $props[ 'id' ] ?>"
		style="z-index: <?= 100 - $GLOBALS[ 'section_count' ] ?>;"
	>
		<h1 class="section__title"></h1>
		<?php call_user_func( $props[ 'content' ] ) ?>
		<div class="section__bottom"></div>
	</section>
<?php } ?>