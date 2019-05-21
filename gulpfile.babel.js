import gulp from 'gulp';
import { scriptDev, scriptBuild } from './scripts/gulpTasks/script';
import { styleDev, styleBuild } from './scripts/gulpTasks/style';
import critical from './scripts/gulpTasks/critical';
import image from './scripts/gulpTasks/image';
import html from './scripts/gulpTasks/html';
import php from './scripts/gulpTasks/php';
import copy from './scripts/gulpTasks/copy';
import devServer from './scripts/gulpTasks/devServer';
import start from './scripts/gulpTasks/default';
import clean from './scripts/gulpTasks/clean';
import svgsprite from './scripts/gulpTasks/svgsprite';

gulp.task('browserSync', devServer);
gulp.task('images-build', image);
gulp.task('scripts', scriptDev);
gulp.task('scripts-build', scriptBuild);
gulp.task('style', styleDev);
gulp.task('style-build', styleBuild);
gulp.task('critical-css', critical);
gulp.task('html', html);
gulp.task('php', php);
gulp.task('copy', copy);
gulp.task('clean', clean);
gulp.task('svgSpriteBuild', svgsprite);
gulp.task('default', ['browserSync', 'scripts', 'style','svgSpriteBuild'], start);
// gulp.task('default',['svgSpriteBuild']); // for testing svg sprite building
gulp.task('build', ['scripts-build', 'style-build', 'images-build', 'copy', 'critical-css']);