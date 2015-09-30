var gulp = require("gulp"),
    mocha = require("gulp-mocha");

gulp.task("test", function() {
  return gulp.src("test.js", { read: false })
    .pipe(mocha({ reporter: "landing" }));
});

gulp.task("watch", function() {
  gulp.watch("*.js", ["test"]);
});

gulp.task("default", ["watch", "test"]);
