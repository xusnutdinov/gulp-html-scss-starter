import gulp from "gulp";
import { paths } from "./paths.js";
import browserSync from "browser-sync";

export const fonts = () => {
  return gulp
    .src(paths.src.fonts)
    .pipe(gulp.dest(paths.build.fonts))
    .pipe(browserSync.stream());
};

gulp.task("fonts", fonts);
