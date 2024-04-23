//CON REACT SOLO - EXTENCION (JS)
//-----------------------
const { src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

//CON VUE - EXTENCION (CJS)
//--------------------------
// import { src, dest, watch } from 'gulp';
// import sass from 'gulp-sass';
// sass.compiler = require('sass');
// import sourcemaps from 'gulp-sourcemaps';




const paths = {
    scss: 'src/scss/**/*.scss',
}

function css() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('src/css'));
}


function runGulp() {
    watch(paths.scss, css);
}

exports.css = css;
exports.runGulp = runGulp;
