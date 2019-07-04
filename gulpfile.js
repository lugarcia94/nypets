const gulp = require('gulp');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('styles', () => {
    gulp.src('src/assets/css/style.scss')
        .pipe(sass({
            sourceComments: 'map',
            sourceMap: 'sass',
            outputStyle: 'expanded'
        }))
        .on('error', (err) => {
            console.log('Error SASS: ', err);
        })
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 2 versions'],
                grid: true
            })
        ]))
        .pipe(replace('UTF-8', 'ISO-8859-1'))
        .pipe(gulp.dest('./opencode/css/'));
});
gulp.task('styles:deploy', () => {
    gulp.src('src/assets/css/style.scss')
        .pipe(sass({
            sourceComments: 'map',
            sourceMap: 'sass',
            outputStyle: 'compressed'
        }))
        .on('error', (err) => {
            console.log('Error SASS: ', err);
        })
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 2 versions'],
                grid: true
            }),
            cssnano({zindex:false})
        ]))
        .pipe(replace('UTF-8', 'ISO-8859-1'))
        .pipe(gulp.dest('./opencode/css/'));
});

gulp.task('default', () => {
   gulp.watch(['src/assets/css/**/*.s[a|c]ss', 'src/libs/**/*.s[a|c]ss'], ['styles']);
});

gulp.task('deploy', ['styles:deploy']);