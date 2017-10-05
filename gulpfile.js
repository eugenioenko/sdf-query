const jshint = require('gulp-jshint');
const gulp   = require('gulp');
const gutil  = require('gulp-util');
const uglify = require('gulp-uglify');
var rename = require("gulp-rename");



gulp.task('default', function() {
  return gutil.log('Gulp started')
});


gulp.task('lint', function() {
  return gulp.src('js/sdf-query.js')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('compress', function () {
  return gulp.src('js/sdf-query.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js'));
});

gulp.watch('js/sdf-query.js', ['lint', 'compress']);