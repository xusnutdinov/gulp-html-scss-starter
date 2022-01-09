import del from "del";
import gulp from "gulp";

export const clean = () => {
  return del(["build/**"]);
};

gulp.task("clean", clean);
