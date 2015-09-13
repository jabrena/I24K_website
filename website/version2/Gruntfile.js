'use strict';

module.exports = function (grunt) {
    var localhost = 'http://localhost:';
    var dev_port = 9000;
    var development_browser = "Google Chrome";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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
                files: [{ expand: true, cwd: "src/sass", src: ["**/*.scss"], dest: "public/styles", ext: ".css" }]
            }
        },
        //Sass
        watch: {
            sass: { files: ["src/sass/**/*.scss"], tasks: ["sass:src"] }
        }

    });

    //Dependencies
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-connect');
     grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");

    //Task definition
    grunt.registerTask('default', 'dev');
    grunt.registerTask('dev', ['open:dev', 'connect:dev']);
    grunt.registerTask('monitor', 'watch');
};