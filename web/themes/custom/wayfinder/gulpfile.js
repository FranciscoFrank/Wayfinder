const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
  scss: './scss/**/*.scss',
  css: './css'
};

function compileSass() {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('styles.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.css));
}

function watchFiles() {
  gulp.watch(paths.scss, compileSass);
}

exports.default = gulp.series(compileSass, watchFiles);
exports.watch = watchFiles;
