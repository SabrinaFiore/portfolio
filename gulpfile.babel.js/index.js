import gulp from 'gulp';
import rename from 'gulp-rename'; 
import sass from 'gulp-sass';
import twig from 'gulp-twig';
import sourcemaps from 'gulp-sourcemaps';
import cssnano from 'gulp-cssnano';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import yarn from 'gulp-yarn';

const SASS_FILES = `src/scss/assets/styles.scss`;
const AUTOPREFIXER_ARGS = {
    browsers: ['last 2 versions'],
    cascade: false
};

gulp.task('default', function() {
    return gulp
        .src(SASS_FILES)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(AUTOPREFIXER_ARGS))
        .pipe(
            cssnano({
                discardComments: { removeAll: true },
                reduceIndents: false,
                zIndex: false
            })
        )
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
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


gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.series('default'));
    gulp.watch('src/markup/index.twig', gulp.series('twig'));
});


gulp.task('start', gulp.parallel('watch'));

gulp.task('yarn', function() {
    return gulp.src(['./package.json'])
        .pipe(yarn());
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './dist/html',
            routes: {
                '/dist/assets/css/' : 'assets/css',
            }
        }
    });
});

gulp.task('yarn-start', gulp.parallel('browser-sync', 'yarn', 'watch'));
