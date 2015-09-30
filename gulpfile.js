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
    .on("change", function() {
      console.log("Changes have been made!");
    })
    .on("restart", function() {
      console.log("Restarted express app!");
    });
});

gulp.task("test", function() {

});

gulp.task("watch", function() {
  gulp.watch("*.js", ["test"]);
});

gulp.task("default", ["nodemon", "test", "watch"]);
