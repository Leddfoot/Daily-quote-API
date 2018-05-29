const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');


gulp.task('message', function() {
  return console.log('gulp is running');
});

//Copy all html files to the dist folder
gulp.task('copyHtml', function() {
  gulp.src(['src/*.html'])
      .pipe(gulp.dest('dist'));
});

//Copy all js files to the dist folder
gulp.task('copyJs', function() {
  gulp.src(['src/js/*.js'])
      .pipe(gulp.dest('dist/js'));
});

//copy css to dist
gulp.task('copyCss', function() {
  gulp.src('src/style/*.css')
      .pipe(gulp.dest('dist/css'));
});


//Wipe the dist folder. Just In Case :)
gulp.task('wipe', function() {
  return del(['dist/*']); //return fixes a promise issue, do not remove
  return del(['*dist']);
});



//access at command line via just: gulp
gulp.task('default', ['wipe', 'copyHtml', 'copyJs', 'copyCss']);


//watch various places for changes
  gulp.task('watch', function() {
  gulp.watch('src/style/*.css', ['copyCss']);
  gulp.watch('src/*.html', ['copyHtml']);
  gulp.watch('src/js/*.js', ['copyJs']);
});
