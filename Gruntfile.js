module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                "curly": true,
                "eqeqeq": true,
            },
            dev: {
                src: ['app/**/*.js']
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none',
                },
                files: [{
                    expand: true,
                    src: ['app/styles/css/main.sass'],
                    ext: '.css'
                }]
            }
        },
        connect: {
            client: {
                options: {
                    port: 9007,
                    base: 'app'
                }
            }
        },
        watch: {
            sass: {
                files: ['app/styles/css/**/*.sass'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // task setup 
    grunt.registerTask('dev', ['connect', 'watch']);
};