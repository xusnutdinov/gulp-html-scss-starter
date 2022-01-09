export const paths = {
  src: {
    html: "src/templates/*.html",
    scss: "src/scss/*.scss",
    js: "src/js/*.js",
    img: "src/img/**/*.+(png|jpg|jpeg|gif|svg|webp|ico|xml|webmanifest)",
    fonts: "src/fonts/*.+(woff|woff2)",
    svg: "src/svg/*.svg",
    misc: "src/misc/**/*",
  },
  build: {
    html: "build",
    css: "build/css",
    js: "build/js",
    img: "build/img",
    fonts: "build/fonts",
    misc: "build",
  },
  watch: {
    all: "build",
    html: "src/templates/**/*.html",
    scss: "src/scss/**/*.scss",
    js: "src/js/**/*.js",
    img: "src/img/**/*.+(png|jpg|jpeg|gif|svg|webp|ico|xml|webmanifest)",
    fonts: "src/fonts/*.+(woff|woff2)",
    svg: "src/svg/*.svg",
    misc: "src/misc/**/*",
  },
};
