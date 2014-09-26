module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        env: {
            dev: {
                NODE_ENV: 'DEVELOPMENT'
            },
            prod: {
                NODE_ENV: 'PRODUCTION'
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    src: ['app/styles/css/main.sass'],
                    ext: '.css'
                }]
            },
            build: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'build/styles/css/main.css': 'app/styles/css/main.sass'
                }
            }
        },
        copy: {
            main: {
                src: ['**/*', '!**/*.js'],
                expand: true,
                cwd: 'app',
                dest: 'build'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */ \n',
                compress: {
                    drop_console: true
                }
            },
            my_target: {
                files: [{
                    expand: true,
                    src: ['**/*.js'],
                    dest: 'build',
                    cwd: 'app',
                    ext: '.js'
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
                tasks: ['sass:dev'],
                options: {
                    livereload: true
                }
            }
        },
        preprocess: {
            dev: {
                src: 'app/preprocessed.html',
                dest: 'app/index.html'
            },
            prod: {
                src: 'app/preprocessed.html',
                dest: 'build/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-preprocess');

    // task setup 
    grunt.registerTask('dev', ['env:dev', 'preprocess:dev','connect', 'watch']);
    grunt.registerTask('build', ['copy','env:prod', 'preprocess:prod', 'sass:build', 'uglify']);
};