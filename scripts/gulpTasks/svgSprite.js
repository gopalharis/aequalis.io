import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gutil from 'gulp-util';
import svgsprite from 'gulp-svg-sprite';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';
import svgmin from 'gulp-svgmin';
import appPath from "../paths";

export default () => {
  return gulp
    .src(appPath.allSVG)
    .pipe(plumber())
    .pipe(svgmin({ // minify svg
      plugins: [{
        removeDoctype: true
      }, {
        removeXMLNS: true
      }, {
        removeXMLProcInst: true
      }, {
        removeComments: true
      }, {
        removeMetadata: true
      }, {
        removeEditorNSData: true
      }, {
        removeViewBox: false
      }],
      js2svg: {
        pretty: true
      }
    }))
    .pipe(cheerio({ // remove all fill, style and stroke declarations in out shapes
      run: function ($) {
        // $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: false }
    }))
    .pipe(replace('&gt;', '>'))// cheerio plugin create unnecessary string '&gt;', so replace it.
    .pipe(svgsprite({
      mode: {
        shape: {
          // dimension: {         // Set maximum dimensions
          //   maxWidth: 500,
          //   maxHeight: 500
          // },
          spacing: {         // Add padding
            padding: 0
          }
        },
        stack: {
          sprite: "../svg-sprite.svg",
        }
      }
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest(appPath.svgOutput));
};
