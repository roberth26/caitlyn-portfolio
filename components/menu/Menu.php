<?php function Menu( $items = [] ) { ?>
	<ul class="menu">
		<?php foreach ( $items as $item ) : ?>
			<li class="menu__item">
				<a
					class="menu__item__link"
					href="<?= $item[ 'path' ] ?>"
				>
					<span class="menu__item__link__label">
						<?= $item[ 'label' ] ?>
					</span>
				</a>
			</li>
		<?php endforeach ?>
	</ul>
<?php } ?>