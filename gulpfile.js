import gulp from "gulp";
import { html } from "./gulp/html.js";
import { stylesDev, stylesProd } from "./gulp/styles.js";
import { server } from "./gulp/server.js";
import { clean } from "./gulp/clean.js";
import { imagesDev, imagesProd } from "./gulp/images.js";
import { fonts } from "./gulp/fonts.js";
import { misc } from "./gulp/misc.js";
import { scriptsDev, scriptsProd } from "./gulp/scripts.js";
import { svg } from "./gulp/svg.js";

export const dev = gulp.series(
  clean,
  gulp.parallel([html, stylesDev, imagesDev, fonts, misc, scriptsDev, svg]),
  gulp.parallel(server)
);

export const prod = gulp.series(
  clean,
  gulp.parallel([html, stylesProd, imagesProd, fonts, misc, scriptsProd, svg])
);

export default dev;
