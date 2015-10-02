var gulp = require("gulp"),
    requireDir = require("require-dir")("./gulp"),
    mocha = require("gulp-mocha");

gulp.task("test", function() {
  return gulp.src("test.js")
    .pipe(mocha());
});

gulp.task("default", ["browser-sync"]);
