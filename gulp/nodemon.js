var gulp = require("gulp"),
    nodemon = require("gulp-nodemon");

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
