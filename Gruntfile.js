const fs = require('fs');
const filesize = require('file-size');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.initConfig({
        stylus: {
            compile: {
                options: {
                    'include css': true
                },
                files: {
                    'dist/psychic.css': 'src/psychic.styl',
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/psychic-min.css': ['dist/psychic.css'],
                }
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip'
                },
                files: [{
                    expand: true,
                    src: ['dist/psychic-min.css'],
                    ext: '.css.gz'
                }]
            }
        }
    });

    grunt.registerTask('stats', function() {
        var output = '| type | size |\n|------|------|\n'
        output += `| unminified| ${filesize(fs.statSync('dist/psychic.css')['size']).human()} |\n`;
        output += `| minified | ${filesize(fs.statSync('dist/psychic-min.css')['size']).human()} |\n`;
        output += `| gzipped | ${filesize(fs.statSync('dist/psychic-min.css.gz')['size']).human()} |\n`;
        console.log(output);
    });

    grunt.registerTask('default', ['stylus', 'cssmin', 'compress', 'stats']);
};
