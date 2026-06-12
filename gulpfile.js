import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import { src, watch, dest, series } from 'gulp';

const sass = gulpSass(dartSass);

export function js(done) {
    src('src/js/app.js')
        .pipe(dest('build/js'));

    done();
}

export function css(done) {
    src('src/scss/app.scss', { sourcemaps: true })
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(dest('build/css', { sourcemaps: '.' }));

    done();
}

export function dev() {
    watch('src/js/**/*.js', js);
    watch('src/scss/**/*.scss', css);
}

export default series( js, css, dev);