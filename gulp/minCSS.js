var gulp = require("gulp"),
    minCSS = require("gulp-minify-css");

gulp.task("minCSS", function() {
  return gulp.src("public/css/*.css")
    .pipe(minCSS())
    .pipe(gulp.dest("public/dist/"));
});
