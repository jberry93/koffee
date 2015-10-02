var gulp = require("gulp"),
    minHTML = require("gulp-minify-html");

gulp.task("minHTML", function() {
  console.log("minHTML running!");
  return gulp.src("public/html/*.html")
    .pipe(minHTML())
    .pipe(gulp.dest("public/dist/"));
});
