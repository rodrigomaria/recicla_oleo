//-- importação das dependências
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

//-- criação das tasks
gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets']);

//-- task html
gulp.task('app.html', () => {
  return gulp.src('app/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'))
});

//-- task css
gulp.task('app.css', () => {
  return gulp.src('app/**/*.css')
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/assets/css'))
});

//-- task js
gulp.task('app.js', () => {
  return gulp.src('app/**/*.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/assets/js'))
});

//-- task assets
gulp.task('app.assets', () => {
  return gulp.src([
    'assets/**/*.*',
    'node_modules/leaflet/src/images/*.*'
  ])
  .pipe(gulp.dest('public/assets'))
});