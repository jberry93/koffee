var gulp = require("gulp"),
    nodemon = require("gulp-nodemon"),
    uglify = require("gulp-uglify"),
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

gulp.task("uglify", function() {
  return gulp.src("public/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public/dist/"));
});

gulp.task("default", ["nodemon", "watch"]);
