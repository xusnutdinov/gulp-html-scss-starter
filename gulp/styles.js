import gulp from "gulp";
import { paths } from "./paths.js";
import browserSync from "browser-sync";
import plumber from "gulp-plumber";
import gulpSass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import mincss from "gulp-clean-css";
import rename from "gulp-rename";
import dartSass from "sass";
import groupmedia from "gulp-group-css-media-queries";

const scss = gulpSass(dartSass);

export const stylesDev = () => {
  return gulp
    .src(paths.src.scss)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(scss().on("error", scss.logError))
    .pipe(gulp.dest(paths.build.css))
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(plumber.stop())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.build.css))
    .on("end", browserSync.reload);
};

gulp.task("stylesDev", stylesDev);

export const stylesProd = () => {
  return gulp
    .src(paths.src.scss)
    .pipe(plumber())
    .pipe(scss())
    .pipe(groupmedia())
    .pipe(
      autoPrefixer({
        grid: true,
        cascade: false,
        overrideBrowserslist: ["last 8 versions", "> 1%", "not dead"],
        browsers: [
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 11",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6",
        ],
      })
    )
    .pipe(
      mincss({
        compatibility: "ie8",
        level: {
          1: {
            specialComments: 0,
            removeEmpty: true,
            removeWhitespace: true,
          },
          2: {
            mergeMedia: true,
            removeEmpty: true,
            removeDuplicateFontRules: true,
            removeDuplicateMediaBlocks: true,
            removeDuplicateRules: true,
            removeUnusedAtRules: false,
          },
        },
      })
    )
    .pipe(gulp.dest(paths.build.css))
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.build.css));
};

gulp.task("stylesProd", stylesProd);
