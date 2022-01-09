import gulp from "gulp";
import imagemin from "gulp-imagemin";
import imageminJpegRecompress from "imagemin-jpeg-recompress";
import { paths } from "./paths.js";
import browserSync from "browser-sync";

export const imagesDev = () => {
  return gulp
    .src(paths.src.img)
    .pipe(gulp.dest(paths.build.img))
    .pipe(browserSync.stream());
};

gulp.task("imagesDev", imagesDev);

export const imagesProd = () => {
  return gulp
    .src(paths.src.img)
    .pipe(
      imagemin([
        imageminJpegRecompress({
          loops: 4,
          min: 70,
          max: 80,
          quality: "high",
        }),
        imagemin.gifsicle(),
        imagemin.optipng(),
        imagemin.svgo(),
      ])
    )
    .pipe(gulp.dest(paths.build.img));
};

gulp.task("imagesProd", imagesProd);
