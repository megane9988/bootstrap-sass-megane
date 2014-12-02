// Basic Gulp File
//
var gulp = require('gulp'),
    autoprefix = require('gulp-autoprefixer')
    notify = require("gulp-notify")
    bower = require('gulp-bower')
    compass = require('gulp-compass')
    uglify = require('gulp-uglify');


var config = {
    sassPath: './sass',
    jsPath: './bower_components/bootstrap-sass-official/assets/javascripts/',
    bowerDir: './bower_components'
}

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});


gulp.task('glyphicons', function() {
    return gulp.src(config.bowerDir + '/bootstrap-sass-official/assets/fonts/bootstrap/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('compass', function() {
    return gulp.src(config.sassPath + '/style.scss')
        .pipe(compass({
          config_file: './config.rb',
          css: './public/css',
          sass: 'sass'
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('css', function() {
    return gulp.src(config.sassPath + '/bootstrap.scss')
        .pipe(sass({
            style: 'compressed',
            loadPath: [
                './resources/sass',
                config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                config.bowerDir + '/fontawesome/scss',
            ]
        })
            .on("error", notify.onError(function (error) {
                return "Error: " + error.message;
            })))
        .pipe(autoprefix('last 2 version'))
        .pipe(gulp.dest('./public/css'));
});
gulp.task('js', function() {
    return gulp.src(config.jsPath + '/bootstrap.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
});


// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/*.scss', ['compass']);
});

gulp.task('default', ['bower', 'glyphicons', 'compass', 'js']);