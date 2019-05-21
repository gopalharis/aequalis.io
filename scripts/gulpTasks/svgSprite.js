import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gutil from 'gulp-util';
import svgsprite from 'gulp-svg-sprite';
import appPath from "../paths";

export default () => {
  return gulp
    .src(appPath.allSVG)
    .pipe(plumber())
    .pipe(svgsprite({
      mode: {
        stack: {
          sprite: "../svg-sprite.svg",
        }
      }
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest(appPath.svgOutput));
};