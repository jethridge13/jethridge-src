const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const imageResize = require('gulp-image-resize');

const imageMinFunction = () => {
	gulp.src('src/assets/img/src/*')
	.pipe(imagemin([
		imagemin.jpegtran({progressive: true}),
		imagemin.optipng({optimizationLevel: 5})
	]))
	.pipe(gulp.dest('src/assets/img/dist'));
}

const createMiniImageFunction = () => {
	gulp.src('src/assets/img/src/*')
	.pipe(imageResize({
		width: 20,
		height: 20,
		crop: false,
		upscale: false
	}))
	.pipe(gulp.dest('src/assets/img/dist/small'));
}

gulp.task('default', () => {
	return new Promise((resolve, reject) => {
		imageMinFunction();
		createMiniImageFunction();
	});
});
