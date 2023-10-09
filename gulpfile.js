const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Specify the Sass compiler

gulp.task('sass', function () {
  return gulp.src('src/styles/main.scss') // Source Sass file(s)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css')); // Destination for compiled CSS
});

// Define the default Gulp task
gulp.task('default', gulp.series('sass'));

// Add a watch task if you want Gulp to watch for changes and recompile automatically
gulp.task('watch', function () {
  gulp.watch('src/styles/**/*.scss', gulp.series('sass'));
});
