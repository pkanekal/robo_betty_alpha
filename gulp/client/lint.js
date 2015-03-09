var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    htmlhint = require('gulp-htmlhint'),
    anghtmlify = require('gulp-angular-htmlify'),
    htmltidy = require('gulp-htmltidy'),
    replace = require('gulp-replace'),
    htmlv = require('gulp-html-validator');

gulp.task('lint:client', function() {
  return gulp.src(['./client/app/**/*.js'])
    .pipe(jshint('./client/.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});


/* This will validate the html files
 */
gulp.task('lint:htmlhint', ['htmlify'],function(){
  return gulp.src('./dist/**/*.html')
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
});
/*
 * This will:
 * -Fix angular directives for the html validator
 * -Make each fragment into its own html page
 * -Fix the missing title problem
 * -Validate the html pages
 * -Output the results .html_status directory
 */
gulp.task('lint:htmlv', ['lint:htmlhint'],function(){
  return gulp.src('./dist/**/*.html')
    .pipe(anghtmlify({customPrefixes: ['ui-']}))
    .pipe(htmltidy({doctype: 'html', hideComments: true, indent: true}))
    .pipe(replace('<title></title>', '<title>Title</title>'))
    .pipe(htmlv({format: 'html'}))
    .pipe(gulp.dest('./html_status/'));
});
