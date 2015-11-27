/*jslint node: true */
'use strict';

module.exports = function (grunt) {
    var localhost = 'http://localhost:',
        dev_port = 9000,
        development_browser = "Google Chrome";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webContent: 'public',

        //Run a web server
        connect: {
            dev: {
                port: dev_port,
                base: 'public/'
            }
        },
        //Open a Web Browser
        open : {
            dev : {
                path: localhost + dev_port,
                app: development_browser
            }
        },
        //Sass
        sass: {
            src: {
                options: { outputStyle: "compressed" },
                files: [{ expand: true, cwd: "src/sass", src: ["**/*.scss"], dest: "<%= webContent %>/styles", ext: ".css" }]
            }
        },

        uglify: {
            srcjs: {
                files: [{expand: true, cwd: 'src/scripts', src: '**/*.js', dest: '<%= webContent %>/scripts'}]
            }
        },

        clean: {
            js: ['<%= webContent %>/scripts']
        },

        copy: {
            
            libpictures: {
                files: [{expand: true, cwd: 'src/img', src: '**/*', dest: '<%= webContent %>/styles/img'}]
            }
        },

        //Sass
        watch: {
            sass: {files: ["src/sass/**/*.scss"], tasks: ["sass:src"]},
            js: {files: ['src/scripts/**/*.js'], tasks: ['uglify:srcjs']},
            libpictures: {files: ['src/img/**/*'], tasks: ['copy:libpictures']}
        }

    });

    //Dependencies
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Task definition
    grunt.registerTask('default', 'dev');
    grunt.registerTask('dev', ['open:dev', 'connect:dev']);
    grunt.registerTask('monitor', ['sass', 'clean', 'copy', 'uglify', 'watch']);
};