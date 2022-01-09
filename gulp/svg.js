import gulp from "gulp";
import browserSync from "browser-sync";
import { paths } from "./paths.js";
import svgSprite from "gulp-svg-sprite";
import GulpSvgmin from "gulp-svgmin";
import replace from "gulp-replace";
import gulpCheerio from "gulp-cheerio";

export const svg = () => {
  return gulp
    .src(paths.src.svg)
    .pipe(
      GulpSvgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      gulpCheerio({
        run: function ($) {
          $("[fill]").removeAttr("fill");
          $("[stroke]").removeAttr("stroke");
          $("[style]").removeAttr("style");
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(replace("&gt;", ">"))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg",
            render: {
              scss: {
                dest: "../../../src/scss/global/_sprite.scss",
                template: "src/scss/base/_sprite_template.scss",
              },
            },
          },
        },
      })
    )
    .pipe(gulp.dest(paths.build.img))
    .pipe(browserSync.stream());
};

gulp.task("svg", svg);
