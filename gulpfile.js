var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');

const SRC = './src/static/scss/**/**/**/*.scss';
const BULMASRC = './node_modules/bulma/*.sass';
const DIST = './src/static/css';
const BULMADIST = './src/static/css';

gulp.task('sass', function(){
    gulp.src(SRC)
      .pipe(sass())
      .pipe(csso())
      .pipe(gulp.dest(DIST))
})

gulp.task('bulma-sass', function(){
    gulp.src(BULMASRC)
      .pipe(sass())
      .pipe(csso())
      .pipe(gulp.dest(BULMADIST))
})

gulp.task('default',['sass', 'bulma-sass'], function(){
    gulp.watch(SRC, ['sass']);
    gulp.watch('src/static/js/**/*.js'); 
})