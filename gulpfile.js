var gulp = require('gulp');
//var sass = require('gulp-sass')
////var sass = require('gulp-sass')
//var htmlhint = require('gulp-htmlhint');
//var css_validation = require('gulp-css-validator');
//var jslint = require('gulp-jslint');
var browserify = require('gulp-browserify');
//var ugligy = require('gulp-uglify');

gulp.task('default', ['html', 'js', 'css']);

gulp.task('html', function () {
   return gulp.src('index.html')
//        .pipe(htmlhint())
//        .pipe(htmlhint.failReporter())
        .pipe(gulp.dest('./public/'));
});

gulp.task('css', function() {
   return gulp.src('./css/*.css')
//        .pipe(css_validation())
        //.pipe(sass())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function () {
    return gulp.src('./js/app.js')
//        .pipe(jslint({
//            browser: true,
//            sloppy: true,
//            node: true,
//        }))
        .pipe(browserify())
        //.pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});


gulp.task('watch', function(){
    gulp.watch('./*.html', ['html']);
    gulp.watch('./css/*.css', ['css']);
    gulp.watch('./js/*.js', ['js']);
})