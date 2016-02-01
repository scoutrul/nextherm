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
     concss = require('gulp-concat-css'),
     mincss = require('gulp-minify-css'),
     prefxcss = require('gulp-autoprefixer'),
     rename = require('gulp-rename');






 //==========================//





 // запуск галп
 // сборщики + сервер 

 gulp.task('default', ['server', 'stylus', 'jade', 'concss', 'watch']);




 //==========================//

 gulp.task('server', function() {
     gulp.src('./app')
         .pipe(server({
             open: true,
             fallback: 'index.html',
             livereload: true,
             directoryListing: {
                 enable: true,
                 path: './app'
             }

         }))
         .pipe(notify('localhost started'))
 });


 // stylus compile
 gulp.task('stylus', ['concss'] ,function() {
     gulp.src('stylus/*.styl')
         .pipe(stylus())
         .pipe(gulp.dest('app/css/'))
         .pipe(notify('Stylus done'))
 });

 // компилируем JADE
 gulp.task('jade', function() {
     gulp.src('jade/*.jade')
         .pipe(jade())
         .pipe(gulp.dest('app'))
         .pipe(notify('Jade done'))
 });




 // соединение файлов CSS
 gulp.task('concss', function() {
     gulp.src(['app/css/styles.css'])
         .pipe(concss('css.css'))
         .pipe(gulp.dest('app'))
         .pipe(notify('CONCAT CSS done'))
 });







 //
 // Наблюдаем за изменением файлов *jade *stylus
 gulp.task('watch', function() {
     gulp.watch('jade/*.jade', ['jade', 'concss']);
     gulp.watch('stylus/*.styl', ['stylus']);
 });
