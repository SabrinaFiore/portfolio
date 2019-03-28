import gulp from 'gulp';
import rename from 'gulp-rename'; 

import sass from 'gulp-sass';
import twig from 'gulp-twig';

import browserSync from 'browser-sync';

gulp.task('style', () => {
    console.log('execute gulp file');

    return gulp.src('src/assets/scss/styles.scss')
        .pipe(rename('css/styles.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('index', () => {
    console.log('execute twig');

    return gulp.src('src/markup/index.twig')
    .pipe(rename('html/index.html'))
    .pipe(gulp.dest('dist/html'))
});


gulp.task('twig', function() {
    
    return gulp.src('src/markup/*.twig')
    .pipe(twig())
    .pipe(gulp.dest('dist/html'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('sass', function () {
    
    return gulp.src('src/assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('watch', function(done) {
    gulp.watch('src/assets/scss/**/*.scss', gulp.task('default'));
    gulp.watch('src/markup/index.twig', gulp.task('twig'));
    console.log('task twig and sass works');
    done();
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: 'dist/',
            browser:"google chrome",
            open: true,
        }
    });
});

gulp.task('start', gulp.parallel('browser-sync','twig', 'sass', 'watch'));
