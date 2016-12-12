<?php function Navigation( $items = [] ) { ?>
	<nav
		class="navigation"
		id="navigation"
	>
		<ul class="navigation__list">
			<?php foreach ( $items as $item ) : ?>
				<li class="navigation__list__item">
					<a
						class="navigation__link"
						href="<?= $item[ 'path' ] ?>"
						data-element-selector="<?= $item[ 'elementSelector' ] ?>"
					>
						<span class="navigation__link__label">
							<?= $item[ 'label' ] ?>
						</span>
					</a>
				</li>
			<?php endforeach ?>
		</ul>
	</nav>
<?php } ?>