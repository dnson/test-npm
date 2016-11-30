module.exports = function (grunt) {
    // Load the Grunt plugins.
    require('matchdep')
        .filterDev('grunt-*')
        .forEach(grunt.loadNpmTasks);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            nenjs: {
                src: 'index.js',
                dest: 'index.min.js',
            }
        },
        concat: {
          dist: {
            src: [
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/faye/faye.js',

                'bower_components/angular/angular.min.js',
                // fancy modal 
                'bower_components/angular-fancy-modal-master/dist/angular-fancy-modal.min.js',
                'bower_components/angular-resource/ngResource.js',
                'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                'bower_components/angular-sanitize/angular-sanitize.min.js',
                'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',

                'bower_components/google-api/1.5.5/angular.min.js',
                'bower_components/google-api/1.5.5/angular-animate.min.js',
                'bower_components/google-api/1.5.5/angular-aria.min.js',
                'bower_components/google-api/1.5.5/angular-messages.min.js',

                // Angular Material Library
                'bower_components/google-api/1.5.5/angular-material.min.js',

                // New Date Time 
                'bower_components/new-datetime/bootstrap/bootstrap.min.js',
                'bower_components/new-datetime/moment/moment.min.js',
                'bower_components/new-datetime/datetime/datetimepicker.js',
                'bower_components/new-datetime/datetime/datetimepicker.templates.js',

                // Custom scroll 
                'bower_components/jquery-mousewheel/jquery.mousewheel.min.js',
                'bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js',
                'bower_components/ng-scrollbars/dist/scrollbars.min.js',

                // select2 
                'bower_components/select2/dist/js/select2.full.min.js',

                // upload file 
                'bower_components/ng-file-upload/ng-file-upload-shim.min.js',
                'bower_components/ng-file-upload/ng-file-upload.min.js',

                'bower_components/lodash/dist/lodash.min.js',

                'bower_components/angular-clipboard/angular-clipboard.js'
            ],
            dest: 'index.js'
          }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register the default tasks.
    grunt.registerTask('build', ['concat']);
};