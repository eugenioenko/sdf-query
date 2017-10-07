const jshint = require('gulp-jshint');
const gulp   = require('gulp');
const gutil  = require('gulp-util');
const uglify = require('gulp-uglify');
var rename = require("gulp-rename");
const concat = require('gulp-concat');



gulp.task('default', function() {
  return gutil.log('Gulp started')
});


gulp.task('lint', function() {
  return gulp.src('./js/sdf-query.js')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('concat', function() {
  return gulp.src(['!src/**/*-spec.js','src/sdf-select.js', 'src/sdf-utils.js', 'src/sdf-dom.js', 'src/methods/**/*.js', 'src/sdf-license.js'])
    .pipe(concat({ path: 'sdf-query.js'}))
    .pipe(gulp.dest('./js'));
});
gulp.task('specs', function() {
  return gulp.src(['./src/**/*-spec.js', './src/*-spec.js'])
    .pipe(concat({ path: 'sdf-query-spec.js'}))
    .pipe(gulp.dest('./specs'));
});
gulp.task('uglify', function () {
  return gulp.src(['./js/sdf-query.js'])
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./js'));
});

gulp.watch('src/**/*.js', ['concat', 'specs']);
gulp.watch('js/sdf-query.js', ['lint', 'uglify']);