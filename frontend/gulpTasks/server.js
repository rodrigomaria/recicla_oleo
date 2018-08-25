//-- importação das dependências
const gulp = require('gulp');
const watch = require('gulp-watch');
const webserver = require('gulp-webserver');

//-- criação da task que monitora os arquivos no projeto
gulp.task('watch', () => {
  watch('app/**/*.html', () => gulp.start('app.html'));
  watch('app/**/*.css', () => gulp.start('app.css'));
  watch('app/**/*.js', () => gulp.start('app.js'));
  watch('assets/**/*.*', () => gulp.start('app.assets'));
});

//-- criação da task que inicializará o servidor
gulp.task('server', ['watch'], () => {
  return gulp.src('public').pipe(webserver({
    livereload: true,
    port: 4000,
    open: true
  }));
});