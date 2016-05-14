var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify');

gulp.task('compile-css', function() {
    return sass('web/assets/scss/*.scss', { style: 'expanded', sourcemap: true })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('web/assets/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('web/assets/css'))
        .pipe(notify({ message: 'compile-css task complete!!'}));
});

gulp.task('watch', function() {
    gulp.watch('web/assets/scss/*.scss', ['compile-css']);
});

gulp.task('default', ['watch'], function() {

});