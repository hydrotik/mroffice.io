'use strict';
const Gulp = require('gulp');
const Path = require('path');
const Merge = require('merge-stream');


Gulp.task('media', () => {

    const general = Gulp.src('./client/media/**/*')
        .pipe(Gulp.dest(Path.join('./public', 'media')));

    const tether = Gulp.src('./node_modules/tether/dist/js/tether.min.js')
        .pipe(Gulp.dest(Path.join('./public', 'media', 'vendor', 'tether')));

    const jquery = Gulp.src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(Gulp.dest(Path.join('./public', 'media', 'vendor', 'jquery')));

    const jqueryEasing = Gulp.src('./node_modules/jquery-easing/dist/**/*')
        .pipe(Gulp.dest(Path.join('./public', 'media', 'vendor', 'jquery-easing')));

    const bootstrap = Gulp.src('./node_modules/bootstrap/**/*')
        .pipe(Gulp.dest(Path.join('./public', 'media', 'vendor', 'bootstrap')));

    const fonts = Gulp.src([
            './node_modules/font-awesome/**',
            '!./node_modules/font-awesome/**/*.map',
            '!./node_modules/font-awesome/.npmignore',
            '!./node_modules/font-awesome/*.txt',
            '!./node_modules/font-awesome/*.md',
            '!./node_modules/font-awesome/*.json'
        ])
        .pipe(Gulp.dest(Path.join('./public', 'media', 'font-awesome')))

    const lines = Gulp.src('./node_modules/simple-line-icons/**/*')
        .pipe(Gulp.dest(Path.join('./public', 'media', 'simple-line-icons')));

    return Merge(general, fonts, tether, jquery, jqueryEasing, bootstrap, lines);
});
