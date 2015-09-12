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
        }
    });

    //Dependencies
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-connect');

    //Task definition
    grunt.registerTask('default', 'dev');
    grunt.registerTask('dev', ['open:dev', 'connect:dev']);
};