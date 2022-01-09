import { paths } from "./paths.js";
import gulp from "gulp";
import browserSync from "browser-sync";
import { html } from "./html.js";
import { stylesDev } from "./styles.js";
import { svg } from "./svg.js";
import { scriptsDev } from "./scripts.js";
import { imagesDev } from "./images.js";
import { misc } from "./misc.js";
import { fonts } from "./fonts.js";

export const server = () => {
  browserSync.init({
    server: "./build/",
    notify: false,
    ui: false,
  });

  gulp.watch(paths.watch.html, gulp.parallel(html));
  gulp.watch(paths.watch.scss, gulp.parallel(stylesDev));
  gulp.watch(paths.watch.svg, gulp.parallel(svg));
  gulp.watch(paths.watch.js, gulp.parallel(scriptsDev));
  gulp.watch(paths.watch.img, gulp.parallel(imagesDev));
  gulp.watch(paths.watch.misc, gulp.parallel(misc));
  gulp.watch(paths.watch.fonts, gulp.parallel(fonts));
};

gulp.task("server", server);
