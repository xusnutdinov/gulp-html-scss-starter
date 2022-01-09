import gulp from "gulp";
import { paths } from "./paths.js";
import include from "gulp-file-include";
import GulpFormatHtml from "gulp-format-html";
import browserSync from "browser-sync";

export const html = () => {
  return gulp
    .src(paths.src.html)
    .pipe(
      include({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(
      GulpFormatHtml({
        indent_size: 2,
      })
    )
    .pipe(gulp.dest(paths.build.html))
    .pipe(browserSync.stream());
};

gulp.task("html", html);
