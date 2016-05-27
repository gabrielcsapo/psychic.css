var fs = require("fs");
var filesize = require('file-size');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-screenshot');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.initConfig({
        stylus: {
            compile: {
                options: {
                    'include css': true
                },
                files: {
                    'psychic.css': 'src/psychic.styl',
                    'psychic-cosmo.css': 'src/psychic-cosmo.styl',
                    'psychic-cyborg.css': 'src/psychic-cyborg.styl',
                    'psychic-paper.css': 'src/psychic-paper.styl'
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
                    'psychic-min.css': ['psychic.css'],
                    'psychic-cosmo-min.css': ['psychic-cosmo.css'],
                    'psychic-cyborg-min.css': ['psychic-cyborg.css'],
                    'psychic-paper-min.css': ['psychic-paper.css']
                }
            }
        },
        pug: {
            main: {
                options: {
                    pretty: true,
                    data: {
                        brands: ['default', 'primary', 'success', 'info', 'warning', 'danger', 'white', 'black']
                    }
                },
                files: {
                    'index.html': 'src/examples/index.pug',
                }
            },
            cosmo: {
                options: {
                    pretty: true,
                    data: {
                        title: 'Cosmo',
                        brands: ['default', 'primary', 'success', 'info', 'warning', 'danger', 'white', 'black']
                    }
                },
                files: {
                    'cosmo.html': 'src/examples/themes/cosmo.pug',
                }
            },
            cyborg: {
                options: {
                    pretty: true,
                    data: {
                        title: 'Cyborg',
                        brands: ['default', 'primary', 'success', 'info', 'warning', 'danger', 'white', 'black']
                    }
                },
                files: {
                    'cyborg.html': 'src/examples/themes/cyborg.pug',
                }
            },
            paper: {
                options: {
                    pretty: true,
                    data: {
                        title: 'Paper',
                        brands: ['default', 'primary', 'success', 'info', 'warning', 'danger', 'white', 'black']
                    }
                },
                files: {
                    'paper.html': 'src/examples/themes/paper.pug',
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
            base: {
                options: {
                    path: './screenshots',
                    files: [{
                        type: 'remote',
                        src: "http://localhost:8000",
                        dest: "base.png",
                        delay: 2000
                    }],
                    viewport: ['1920x1080','1024x768','640x960','320x480']
                }
            },
            cosmo: {
                options: {
                    path: './screenshots/themes/cosmo',
                    files: [{
                        type: 'remote',
                        src: "http://localhost:8000/cosmo.html",
                        dest: "cosmo.png",
                        delay: 2000
                    }],
                    viewport: ['1920x1080','1024x768','640x960','320x480']
                }
            },
            cyborg: {
                options: {
                    path: './screenshots/themes/cyborg',
                    files: [{
                        type: 'remote',
                        src: "http://localhost:8000/cyborg.html",
                        dest: "cyborg.png",
                        delay: 2000
                    }],
                    viewport: ['1920x1080','1024x768','640x960','320x480']
                }
            },
            paper: {
                options: {
                    path: './screenshots/themes/paper',
                    files: [{
                        type: 'remote',
                        src: "http://localhost:8000/cyborg.html",
                        dest: "cosmo.png",
                        delay: 2000
                    }],
                    viewport: ['1920x1080','1024x768','640x960','320x480']
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
    grunt.registerTask('build', ['default', 'connect', 'screenshot', 'stats']);
    grunt.registerTask('default', ['stylus', 'cssmin', 'pug', 'compress']);

};
