const jshint = require('gulp-jshint');
const gulp   = require('gulp');
const gutil  = require('gulp-util');
const uglify = require('gulp-uglify');



gulp.task('default', function() {
  return gutil.log('Gulp started')
});


gulp.task('lint', function() {
  return gulp.src('src/sdf-query.js')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('compress', function () {
  return gulp.src('src/sdf-query.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.watch('src/*.js', ['lint', 'compress']);