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

    var size = {
        unminified: filesize(fs.statSync("psychic.css")["size"]).human(),
        minified: filesize(fs.statSync("psychic-min.css")["size"]).human(),
        gzipped: filesize(fs.statSync("psychic-min.css.gz")["size"]).human()
    };
    var brands = ['default', 'primary', 'success', 'info', 'warning', 'danger', 'white', 'black']
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
                        size: size,
                        brands: brands
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
                        size: size,
                        title: 'Cosmo',
                        brands: brands
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
                        size: size,
                        title: 'Cyborg',
                        brands: brands
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
                        size: size,
                        title: 'Paper',
                        brands: brands
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
                    base: '.',
                    middleware: function(connect, options, middlewares) {

                        middlewares.unshift(function forward(req, res, next) {
                            if (req.url.indexOf('/psychic-ui') > -1) {
                                req.url = req.url.replace('/psychic-ui', '');
                                res.writeHead(302, {
                                    'Location': 'http://localhost:8000' + req.url
                                });
                                res.end();
                            } else {
                                next();
                            }
                        });

                        return middlewares;
                    }
                }
            }
        },
        screenshot: {
            base: {
                options: {
                    path: './screenshots',
                    files: [{
                        parallel: true,
                        compress: true,
                        type: 'remote',
                        src: "http://localhost:8000",
                        dest: "base.png",
                        delay: 2000
                    }],
                    viewport: ['1920x1080', '1024x768', '640x960', '320x480']
                }
            },
            cosmo: {
                options: {
                    path: './screenshots/themes/cosmo',
                    files: [{
                        parallel: true,
                        compress: true,
                        type: 'remote',
                        src: "http://localhost:8000/cosmo.html",
                        dest: "cosmo.png",
                        delay: 2000
                    }],
                    viewport: ['1920x1080', '1024x768', '640x960', '320x480']
                }
            },
            cyborg: {
                options: {
                    path: './screenshots/themes/cyborg',
                    files: [{
                        parallel: true,
                        compress: true,
                        type: 'remote',
                        src: "http://localhost:8000/cyborg.html",
                        dest: "cyborg.png",
                        delay: 2000
                    }],
                    viewport: ['1920x1080', '1024x768', '640x960', '320x480']
                }
            },
            paper: {
                options: {
                    path: './screenshots/themes/paper',
                    files: [{
                        parallel: true,
                        compress: true,
                        type: 'remote',
                        src: "http://localhost:8000/paper.html",
                        dest: "paper.png",
                        delay: 2000
                    }],
                    viewport: ['1920x1080', '1024x768', '640x960', '320x480']
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
        output += "- unminified-size: " + filesize(fs.statSync("psychic.css")["size"]).human() + '\n';
        output += "- minified-size: " + filesize(fs.statSync("psychic-min.css")["size"]).human() + '\n';
        output += "- gzipped-size: " + filesize(fs.statSync("psychic-min.css.gz")["size"]).human() + '\n';
        console.log(output);
    });

    grunt.registerTask('dev', ['default', 'connect', 'watch']);
    grunt.registerTask('build', ['default', 'connect', 'screenshot', 'stats']);
    grunt.registerTask('default', ['stylus', 'cssmin', 'pug', 'compress']);

};
