var fs = require("fs");
var filesize = require('file-size');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-screenshot');
    grunt.loadNpmTasks('grunt-contrib-rename');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.initConfig({
        stylus: {
            compile: {
                options: {
                    'include css': true
                },
                files: {
                    'psychic.css': 'src/psychic.styl',
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
                    'psychic-min.css': ['psychic.css']
                }
            }
        },
        pug: {
            release: {
                options: {
                    pretty: true
                },
                files: {
                    'index.html': 'examples/index.pug'
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/**/*.jade', '**/**/*.pug', '**/**/*.styl'],
                tasks: ['default'],
                options: {
                    livereload: true,
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.'
                }
            }
        },
        screenshot: {
            psychic: {
                options: {
                    path: './examples/assets',
                    files: [{
                        type: 'remote',
                        src: "http://localhost:8000",
                        dest: "doc.png",
                        delay: 2000
                    }]
                }
            }
        },
        rename: {
            main: {
                files: [{
                    src: ['examples/assets/remote-1920x1080-doc.png'],
                    dest: 'examples/assets/doc.png'
                }]
            }
        },
        clean: ['examples/assets/local-1920x1080-doc.png'],
        compress: {
            main: {
                options: {
                    mode: 'gzip'
                },
                files: [{
                    expand: true,
                    src: ['psychic-min.css'],
                    ext: '.css.gz'
                }]
            }
        },
    });

    grunt.registerTask('stats', function() {
        var output = "";
        output += "- main-size: " + filesize(fs.statSync("psychic.css")["size"]).human() + '\n';
        output += "- minified-size: " + filesize(fs.statSync("psychic-min.css")["size"]).human() + '\n';
        output += "- gzipped-size: " + filesize(fs.statSync("psychic-min.css.gz")["size"]).human() + '\n';
        console.log(output);
    });

    grunt.registerTask('dev', ['default', 'connect', 'watch']);
    grunt.registerTask('build', ['default', 'connect', 'screenshot', 'rename', 'clean', 'stats']);
    grunt.registerTask('default', ['stylus', 'cssmin', 'pug', 'compress']);

};
