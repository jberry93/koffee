var gulp = require("gulp"),
    nodemon = require("gulp-nodemon"),
    mocha = require("gulp-mocha");

gulp.task("nodemon", function() {
  nodemon({
    script: "app.js",
    ext: "js"
  })
    .on("start", ["test"])
    .on("restart", function() {
      console.log("Restarted nodemon!");
    });
});

gulp.task("test", function() {
  return gulp.src("test.js")
    .pipe(mocha());
});

gulp.task("watch", function() {
  gulp.watch("*.js", ["test"]);
});

gulp.task("default", ["nodemon", "watch"]);
