const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const cssMin = require("gulp-css");

gulp.task("css", () => {
  gulp
    .src(["./src/styles/css/index.css"])
    .pipe(concat("index.css"))
    .pipe(cssMin())
    .pipe(gulp.dest("./src/styles/css"));
});

gulp.task("default", ["css"]);
