const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');
const scss = require('gulp-sass');
const clean = require('gulp-clean');
var pug = require('gulp-pug');

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
}) 

gulp.task('clean', () => {
    return gulp.src('./dist')
        .pipe(clean());
})

gulp.task('html', () => {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
})

gulp.task('images', () => {
    gulp.src('src/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('scss', () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('./dist/css'));
})

gulp.task('assets', () => {
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dist'));
})

gulp.task('js', () => {
    return gulp.src('./src/**/*.js/')
        .pipe(gulp.dest('./dist'));
})

gulp.task('pug', function() {
    return gulp.src('./src/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'));
  });


gulp.task('watch', () => {
    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/**/*.pug', ['pug']);
    gulp.watch('./src/assets/**/*.*', ['assets']);
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/scss/**/*.scss', ['scss']);
})

gulp.task('default', ['clean', 'serve', 'watch', 'scss', 'js', 'html', 'images', 'pug', 'assets']);