 //   _____       _                      _                                 _              
 //  / ____|     | |                    | |                    /\         | |             
 // | |  __  ___ | | _____   ____ _  ___| |__   _____   __    /  \   _ __ | |_ ___  _ __  
 // | | |_ |/ _ \| |/ _ \ \ / / _` |/ __| '_ \ / _ \ \ / /   / /\ \ | '_ \| __/ _ \| '_ \ 
 // | |__| | (_) | | (_) \ V / (_| | (__| | | | (_) \ V /   / ____ \| | | | || (_) | | | |
 //  \_____|\___/|_|\___/ \_/ \__,_|\___|_| |_|\___/ \_/   /_/    \_\_| |_|\__\___/|_| |_|



 "use strict";

 var gulp = require('gulp'),
     server = require('gulp-server-livereload'),
     notify = require('gulp-notify'),

     jade = require('gulp-jade'),
     stylus = require('gulp-stylus'),


     uglify = require('gulp-uglify'),
     concat = require('gulp-concat'),

     pngquant = require('imagemin-pngquant'),
     imagemin = require('gulp-imagemin'),
     minifyCSS = require('gulp-minify-css'),
     prefxcss = require('gulp-autoprefixer'),
     rename = require('gulp-rename');






 //==========================//

 gulp.task('server', function() {
     gulp.src('./dist')
         .pipe(server({
             open: true,
             fallback: 'index.html',
             livereload: true,
             directoryListing: {
                 enable: true,
                 path: './dist'
             }
         }))
         .pipe(notify('localhost started'))
 });



 // images compressing
 gulp.task('imgminify', function () {
    gulp.src('app/images/*')
        .pipe(imagemin({
             progressive: true,
             svgoPlugins: [{removeViewBox: false}],
             use: [pngquant({ quality: '20-50', speed: 4 })]
         }))
        .pipe(gulp.dest('dist/images'));
 });


 //==========================//




 // Scripts task to compile JS files
 gulp.task('jss', function() {
     gulp.src('app/js/*.js')
         .pipe(concat('script.min.js'))
         .pipe(uglify())
         .pipe(gulp.dest('./dist/js'));
 });





 // compile Stylus = 
 gulp.task('stylus', function() {
     gulp.src('app/**/*.styl')
         .pipe(stylus())
         .pipe(minifyCSS())
         .pipe(concat('all.min.css'))
         .pipe(gulp.dest('./dist/css'));
 });



 // compile JADE = ok
 gulp.task('jade', function() {
     gulp.src('app/**/*.jade')
         .pipe(jade())
         .pipe(concat('index.html'))
         .pipe(gulp.dest('./dist/'))
         .pipe(notify('Jade done'))
 });

 //==========================//





 gulp.task('default', ['server', 'jss', 'stylus', 'jade', 'watch', 'imgminify']);




 gulp.task('watch', ['jss', 'stylus', 'jade', 'imgminify'], function() {
     gulp.watch('app/styl/*.styl', ['stylus']);
     gulp.watch('app/js/*.js', ['jss']);
     gulp.watch('app/jade/*.jade', ['jade']);
     gulp.watch('app/images/*', ['imgminify']);
 });
