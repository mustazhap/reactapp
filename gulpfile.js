'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    changed = require('gulp-changed'),
    prefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps');
    
var SCSS_SRC = './src/assets/scss/main.scss'
var SCSS_WATCH = './src/**/*.scss'
var SCSS_DEST = './src/assets/css/'

gulp.task('compile_scss', function(){
    gulp.src(SCSS_SRC)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer(
            {
                browsers: ['last 10 versions'],
                cascade: false
            }
        )) 
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(changed(SCSS_WATCH))
        .pipe(gulp.dest(SCSS_DEST));       
        
});

gulp.task('watch_scss', function(){
    gulp.watch(SCSS_WATCH, ['compile_scss']);
});

gulp.task('default', ['watch_scss']);






