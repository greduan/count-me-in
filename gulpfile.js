var gulp = require('gulp');
var shell = require('gulp-shell');
var jslint = require('gulp-jslint');

gulp.task('jslint', function () {
    gulp.src(['lib/*.js', 'test/*.js', 'bin/cmi.js'])
        .pipe(jslint({
            node: true,
            plusplus: false,
            sloppy: false,
            todo: true,

            errorsOnly: true,
            shebang: true
        }))
        .on('error', function (err) {
            console.error(String(err));
        })
});

gulp.task('tests', shell.task(['tape test/* | tap-dot']));

gulp.task('default', ['jslint']);
