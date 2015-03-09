// Karma configuration
// Generated on Sun Mar 01 2015 16:23:07 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://nkapmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'client/bower_components/angular/angular.js',
      'client/bower_components/angular-cookies/angular-cookies.js',
      'client/bower_components/angular-smart-table/dist/smart-table.min.js',
      'client/bower_components/angular-ui-router/release/angular-ui-router.js',
      'client/bower_components/angular-ui-utils/ui-utils.js',
      'client/bower_components/angular-bootstrap/ui-bootstrap.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      'dist/bundle.js',
      'client/test/**/*.js',
      'client/app/components/dashboard/employees/views/employees-modal.html',
      'client/app/components/dashboard/employees/controllers/*'     
      //'dist/**/*.html',
      //'client/**/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    preprocessors: {
       'client/app/components/dashboard/employees/views/employees-modal.html': 'html2js'
    },

    ngHtml2JsPreprocessor: {
        // strip app from the file path
        stripPrefix: 'client/app/components/dashboard/employees/views/'
    },
    

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    //preprocessors: {
     // 'dist/**/*.html': 'html2js',
      //'client/**/*.html': 'html2js'
    //},
    



    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-sinon-chai',
            'karma-spec-reporter',
            'karma-ng-html2js-preprocessor'         
            ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
