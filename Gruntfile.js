module.exports = function(grunt) {  "use strict";

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: ".jshintrc",
        reports: require('jshint-stylish')
      },
      all:[
        './Gruntfile.js',
        './src/*.js'
      ]
    },
    // clean up distribution and temporary build directories
    clean: {
      dist: [
        'dist'
      ],
      temp: [
        'temp'
      ]
    },
    uglify: {
      // Create minified version of each component
      //
      //  * xs.ui.date.translate
      //  * xs.ui.select.placeholder
      //
      // and a concatenated package containing all components
      //
      //  * xs.ui.components
      //
      options: {
        mangle: false,
        banner: ''
      },
      date: {
        src: 'src/xs-ui-date-translate.js',
        dest: 'dist/xs-ui-date-translate.min.js'
      },
      select: {
        src: ['src/xs-ui-select-placeholder.js'],
        dest: 'dist/xs-ui-select-placeholder.min.js'
      },
      packaged: {
        src: 'temp/xs-ui-components.js',
        dest: 'dist/xs-ui-components.min.js'
      }
    },
    // Only concatenate the component package (all xs-ui components)
    // put all components into one package
    concat: {
      options: {
        separator: '',
        banner: ''
      },
      all: {
        src:[
          'src/xs-ui-components.js',
          'src/xs-ui-date-translate.js',
          'src/xs-ui-select-placeholder.js'
        ],
        dest: 'temp/xs-ui-components.js'
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**'],
          dest: 'dist/'
        }]
      }
    }
  });
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['jshint', 'clean', 'concat', 'uglify', 'copy']);


};
