module.exports = function (grunt) {

  grunt.initConfig({
    clean: {
        all: ['dist/'],
        lixo:[
            'dist/js/bootstrap.js',
            'dist/js/material-design.js'
        ]
    },
    jshint: {
        dist: {
            src: ['lib/**/*.js']
        }
    },
    concat: {
        boot:{
            src: [
              'lib/bootstrap/**/*.js',
              'lib/_base/**/*.js'
            ],
            dest: 'dist/js/base-bootstrap.js'
        },
        mate:{
            src:[
                 'lib/material-design/**/*.js',
                 'lib/_base/**/*.js'
            ],
            dest: 'dist/js/base-material-design.js'
        },
        angu:{
             src:[
                 'lib/material-design/**/*.js',
                 'lib/angular/**/*.js'
            ],
            dest: 'dist/js/base-angular.js'
        },
        knoc:{
             src:[
                 'lib/material-design/**/*.js',
                 'lib/knockout/**/*.js'
            ],
            dest: 'dist/js/base-knockout.js'
        }
    },
    uglify: {
        boot: {
            src: ['dist/js/base-bootstrap.js'],
            dest: 'dist/js/base-bootstrap.min.js'
        },
        mate: {
            src: ['dist/js/base-material-design.js'],
            dest: 'dist/js/base-material-design.min.js'
        },
        angu:{
            src: ['dist/js/base-angular.js'],
            dest: 'dist/js/base-angular.min.js'
        },
        knoc:{
            src: ['dist/js/base-knockout.js'],
            dest: 'dist/js/base-knockout.min.js'
        },
    },
    cssmin: {
        boot:{
            src: [
              'lib/bootstrap/**/*.css',
              'lib/_base/**/*.css'
            ],
            dest: 'dist/css/base-bootstrap.min.css'
        },
        mate:{
            src:[
                 'lib/material-design/**/*.css',
                 'lib/_base/**/*.css'
            ],
            dest: 'dist/css/base-material-design.min.css'
        },
        font:{
             src:[
                 'lib/font-awesome/**/*.css'
            ],
            dest: 'dist/css/base-font-awesome.min.css'
        }
    },
    copy: {
        font1: {
            expand: true,
            cwd: 'lib/bootstrap/fonts',
            src: '**',
            dest: 'dist/fonts/'
        },
        font2: {
            expand: true,
            cwd: 'lib/font-awesome/fonts',
            src: '**',
            dest: 'dist/fonts/'
        },
        font3: {
            expand: true,
            cwd: 'lib/material-design/fonts',
            src: '**',
            dest: 'dist/fonts/'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

 grunt.registerTask('t', ['clean:all']);
  grunt.registerTask('bundles', ['clean:all', 'concat', 'uglify', 'cssmin', 'copy']);
}