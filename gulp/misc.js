import gulp from "gulp";
import { paths } from "./paths.js";
import browserSync from "browser-sync";

export const misc = () => {
  return gulp
    .src(paths.src.misc)
    .pipe(gulp.dest(paths.build.misc))
    .pipe(browserSync.stream());
};

gulp.task("misc", misc);
