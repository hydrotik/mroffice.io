'use strict';
const Gulp = require('gulp');
const Path = require('path');
const Merge = require('merge-stream');


Gulp.task('media', () => {

    const general = Gulp.src('./client/media/**/*')
        .pipe(Gulp.dest(Path.join('./public', 'media')));

    const fonts = Gulp.src('./node_modules/font-awesome/fonts/**')
        .pipe(Gulp.dest(Path.join('./public', 'media', 'font-awesome', 'fonts')));

    const lines = Gulp.src('./node_modules/simple-line-icons/**/*')
        .pipe(Gulp.dest(Path.join('./public', 'media', 'vendor', 'simple-line-icons')));

    return Merge(general, fonts, lines);
});
