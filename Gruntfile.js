module.exports = function(grunt) {
    // Конфигурация проекта
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //------------------------------------------------------------
        less: { 
            options: {
                expand: true,
                sourceMap: true
            },
            dev: {
                files: {
                    'css/all.css': ['less/all.less']
                }
            }
        },
        watch: {
            less: {
                files: ['less/**/*.less'],
                tasks: ['less']
            }
        },
        browserSync: {
            files: {
                src: ['*.html', 'css/all.css']
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: '.'
                }
            }
        }
    });
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['less', 'browserSync', 'watch']);
};
