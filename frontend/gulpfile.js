//-- importação das dependências
const gulp = require('gulp');
const util = require('gulp-util');
const sequence = require('run-sequence');

//-- importação dos arquivos para disparar as tasks
require('./gulpTasks/app');
require('./gulpTasks/deps');
require('./gulpTasks/server');

//-- criação da task que inicializará a construção dos arquivos e organizará nossas tasks em sequência
gulp.task('default', () => {
  if(util.env.production) {
    sequence('deps', 'app');
  } else {
    sequence('deps', 'app', 'server');
  }
});