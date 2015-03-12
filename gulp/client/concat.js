var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var fs = require('fs');

/* This will create concatenate all our angular
 * code into one file the bundle.js and place it
 * in the dist folder
 */
gulp.task('concat:js', function() {
  return gulp.src([
    './client/app/app.module.js',
    './client/app/**/*.module.js',
    './client/app/**/*.js'
  ])
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist/'));
});

/* Concatenate all css files into bundle.css and place it
 * in dist/assets folder
 */
gulp.task('concat:css', function() {
  // Will use gulpconfig.json if found
  fs.lstat('./gulpconfig.json', function(err, stats) {
    if (err) {
      console.log(err.path+" could not be found.");
      return;
    }

    if (stats.isFile()) {
      var cssFiles = require('../../gulpconfig.json').cssFiles;
      if (typeof cssFiles !== 'undefined') {
        return gulp.src(cssFiles)
          .pipe(concatCss('bundle.css'))
          .pipe(gulp.dest('./dist/'));
      }
    }
  });
});
