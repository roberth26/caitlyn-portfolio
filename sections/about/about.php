<?php require_once( './components/section/Section.php' ) ?>

<?php
Section([
	'class' => 'about',
	'id' => 'about',
	'content' => function() { ?>
		<div class="about__container">
			<h1 class="about__title">About Me</h1>
			<div class="about__row">
				<div class="about__col">

				</div>
				<div class="about__col">
					<p>Caitlyn Cardoza was born in the town of Hanford, California and now lives and studies in Fresno, California. She attended high school in Fresno at San Joaquin Memorial and went on to attend the Smittcamp Honors College at Fresno State University. She has attend and volunteered at the Siggraph conference in Anaheim, a gathering of professionals to learn and share new advances in technology and computer graphics, and has participated in the CSU Summer Arts Program in Monterey in the Creature Workshop working with professionals in the field and developing new techniques in clay, Zbrush, and motion-capture. Her mediums of choice are Maya and Zbrush. She has received scholarships for her passion in art as well as for her dedication to high academic performance and community participation. She is finishing her Bachelors of Arts in the field of animation and plans to attend a graduate school in Los Angeles, applying to both Gnomon and UCLA animation Master’s program, to better refine her skills in character modeling and animation. She believes the future of storytelling lies in animation and strives to be a leader in the creative medium.</p>
				</div>
			</div>
		</div>
	<?php }
]);
?>