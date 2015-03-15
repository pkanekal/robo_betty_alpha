var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngannotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sourcemap', function() {
  gulp.src([
    './client/app/app.module.js',
    './client/app/**/*.module.js',
    './client/app/**/*.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(ngannotate())
    .pipe(uglify())
    .pipe(sourcemaps.write('./dist/maps'))
    .pipe(gulp.dest('./dist'));
});
