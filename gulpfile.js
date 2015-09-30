var gulp = require("gulp"),
    nodemon = require("gulp-nodemon"),
    mocha = require("gulp-mocha");

gulp.task("nodemon", function() {
  nodemon({
    script: "app.js",
    ext: "js"
  })
    .on("start", function() {
      console.log("Started express app!");
    })
    .on("restart", function() {
      console.log("Restarted express app!");
    });
});

gulp.task("test", function() {
  return gulp.src("test.js", { read: false })
    .pipe(mocha({ reporter: "landing" }));
});

gulp.task("watch", function() {
  gulp.watch("*.js", ["test"]);
});

gulp.task("default", ["nodemon", "watch", "test"]);
