var gulp = require( 'gulp' );
var watch = require( 'gulp-watch' );
var rename = require( 'gulp-rename' );
var sass = require( 'gulp-sass' );
var runSequence = require( 'run-sequence' );
var autoprefixer = require( 'gulp-autoprefixer' );

gulp.task( 'scss', function() {
	return gulp.src( 'scss/index.scss' )
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on( 'error', sass.logError )
		)
		.pipe( autoprefixer() )
		.pipe( rename({
			suffix: '.min',
			extname: '.css'
		}))
		.pipe( gulp.dest( 'css' ) );
});

gulp.task( 'watch', function() {
	watch( [ 'scss/**/*.scss', 'sections/**/*.scss' ], function() {
		runSequence( [ 'scss' ] );
	});
});

gulp.task( 'default', [
	'scss',
	'watch'
]);