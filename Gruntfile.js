var fs = require('fs');
var filesize = require('file-size');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-screenshot');
    grunt.loadNpmTasks('grunt-contrib-compress');

    try {
        var size = {
            unminified: filesize(fs.statSync('dist/psychic.css')['size']).human(),
            minified: filesize(fs.statSync('dist/psychic-min.css')['size']).human(),
            gzipped: filesize(fs.statSync('dist/psychic-min.css.gz')['size']).human()
        };
    } catch (ex) {
        var size = {
            unminified: 0,
            minified: 0,
            gzipped: 0
        };
    }
    var brands = ['default', 'primary', 'success', 'info', 'warning', 'danger', 'white', 'black']
    grunt.initConfig({
        stylus: {
            compile: {
                options: {
                    'include css': true
                },
                files: {
                    'dist/psychic.css': 'src/psychic.styl',
                    'dist/psychic-cosmo.css': 'src/psychic-cosmo.styl',
                    'dist/psychic-cyborg.css': 'src/psychic-cyborg.styl',
                    'dist/psychic-paper.css': 'src/psychic-paper.styl',
                    'dist/psychic-perisian.css': 'src/psychic-perisian.styl'
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
                    'dist/psychic-cosmo-min.css': ['dist/psychic-cosmo.css'],
                    'dist/psychic-cyborg-min.css': ['dist/psychic-cyborg.css'],
                    'dist/psychic-paper-min.css': ['dist/psychic-paper.css'],
                    'dist/psychic-perisian-min.css': ['dist/psychic-perisian.css']
                }
            }
        },
        pug: {
            main: {
                options: {
                    pretty: true,
                    data: {
                        size: size,
                        title: 'Base',
                        brands: brands,
                        into_text: 'text-white',
                        style: './dist/psychic.css',
                        fs: fs
                    }
                },
                files: {
                    'docs/index.html': 'src/examples/index.pug',
                }
            },
            cosmo: {
                options: {
                    pretty: true,
                    data: {
                        size: size,
                        title: 'Cosmo',
                        brands: brands,
                        into_text: 'text-white',
                        style: './dist/psychic-cosmo-min.css',
                        fs: fs
                    }
                },
                files: {
                    'docs/cosmo.html': 'src/examples/index.pug',
                }
            },
            cyborg: {
                options: {
                    pretty: true,
                    data: {
                        size: size,
                        title: 'Cyborg',
                        brands: brands,
                        into_text: 'text-white',
                        style: './dist/psychic-cyborg-min.css',
                        fs: fs
                    }
                },
                files: {
                    'docs/cyborg.html': 'src/examples/index.pug',
                }
            },
            paper: {
                options: {
                    pretty: true,
                    data: {
                        size: size,
                        title: 'Paper',
                        brands: brands,
                        into_text: 'text-white',
                        style: './dist/psychic-paper-min.css',
                        fs: fs
                    }
                },
                files: {
                    'docs/paper.html': 'src/examples/index.pug',
                }
            },
            perisian: {
                options: {
                    pretty: true,
                    data: {
                        size: size,
                        title: 'Perisian',
                        brands: brands,
                        into_text: 'text-black',
                        style: './dist/psychic-perisian-min.css',
                        fs: fs
                    }
                },
                files: {
                    'docs/perisian.html': 'src/examples/index.pug',
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
                    base: 'docs',
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
                    maxParallel: 5,
                    files: [{
                        parallel: true,
                        compress: true,
                        type: 'remote',
                        src: 'http://localhost:8000',
                        dest: 'base.png',
                        delay: 2000
                    }],
                    viewport: ['1920x1080', '1024x768', '640x960', '320x480']
                }
            },
            cosmo: {
                options: {
                    path: './screenshots/themes/cosmo',
                    maxParallel: 5,
                    files: [{
                        parallel: true,
                        compress: true,
                        type: 'remote',
                        src: 'http://localhost:8000/cosmo.html',
                        dest: 'cosmo.png',
                        delay: 2000
                    }],
                    viewport: ['1920x1080', '1024x768', '640x960', '320x480']
                }
            },
            cyborg: {
                options: {
                    path: './screenshots/themes/cyborg',
                    maxParallel: 5,
                    files: [{
                        parallel: true,
                        compress: true,
                        type: 'remote',
                        src: 'http://localhost:8000/cyborg.html',
                        dest: 'cyborg.png',
                        delay: 2000
                    }],
                    viewport: ['1920x1080', '1024x768', '640x960', '320x480']
                }
            },
            paper: {
                options: {
                    path: './screenshots/themes/paper',
                    maxParallel: 5,
                    files: [{
                        parallel: true,
                        compress: true,
                        type: 'remote',
                        src: 'http://localhost:8000/paper.html',
                        dest: 'paper.png',
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
                    src: ['dist/psychic-min.css'],
                    ext: '.css.gz'
                }]
            }
        },
    });

    grunt.registerTask('stats', function() {
        var output = '';
        output += '- unminified-size: ' + filesize(fs.statSync('dist/psychic.css')['size']).human() + '\n';
        output += '- minified-size: ' + filesize(fs.statSync('dist/psychic-min.css')['size']).human() + '\n';
        output += '- gzipped-size: ' + filesize(fs.statSync('dist/psychic-min.css.gz')['size']).human() + '\n';
        console.log(output);
    });

    grunt.registerTask('dev', ['default', 'connect', 'watch']);
    grunt.registerTask('build', ['default', 'connect', 'screenshot', 'stats']);
    grunt.registerTask('default', ['stylus', 'cssmin', 'pug', 'compress']);

};
