import gulp from 'gulp'
import svgSprite from 'gulp-svg-sprite'
import appPath from "../paths"

export default () => {
    return gulp
        .src(appPath.allIMAGE)
        .pipe(svgSprite({
                mode: {
                    stack: {
                        sprite: "../sprite.svg"  //sprite file name
                    }
                },
            }
        ))
        .pipe(gulp.dest(appPath.imageOutput))
}