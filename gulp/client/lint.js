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
gulp.task('lint:anghtmlify', ['lint:htmlhint'],function(){
  return gulp.src('./dist/**/*.html')
    .pipe(anghtmlify({customPrefixes: ['ui-']}))
    .pipe(gulp.dest('./html_status/'));
});
gulp.task('lint:htmltidy', ['lint:anghtmlify'],function(){
  return gulp.src('./html_status/**/*.html')
    .pipe(htmltidy({doctype: 'html', hideComments: true, indent: true}))
    .pipe(gulp.dest('./html_status/'));
});
gulp.task('lint:htmlreplace', ['lint:htmltidy'],function(){
  return gulp.src('./html_status/**/*.html')
    .pipe(replace('<title></title>', '<title>Title</title>'))
    .pipe(gulp.dest('./html_status/'));
});
gulp.task('lint:htmlv', ['lint:htmlreplace'],function(){
  return gulp.src('./html_status/**/*.html')
    .pipe(htmlv({format: 'html'}))
    .pipe(gulp.dest('./html_status/'));
});
