const gulp = require('gulp')
const less = require('gulp-less');
const path = require('path');
const uglifycss = require('gulp-uglifycss');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

gulp.task('styles', function () {
    return gulp.src('./src/css/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', function() {
  gulp.src(['./src/js/**/*.js'])
    .pipe(minify())
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('statics', function () {
    return gulp.src([
        './src/img/*',
        './src/font/*'
    ], { base: './src' }).pipe(gulp.dest('./dist'));
});

gulp.task('minify-html', function() {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['default'], () => {
    gulp.watch('./src/css/*.less', ['styles']);
    gulp.watch('./src/js/*.js', ['scripts']);
    gulp.watch('./src/*.html', ['minify-html']);
});

gulp.task('default', ['styles', 'scripts', 'statics', 'minify-html']);