const gulp = require('gulp');
const fileInclude = require('gulp-file-include');

gulp.task('fileinclude', function () {
  return gulp
    .src(['html/*.html'])
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(gulp.dest('./dest_html'));
});

gulp.task('watch', function () {
  gulp.watch('html/**/*.html', gulp.series('fileinclude'));
});
