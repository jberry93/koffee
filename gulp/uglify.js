var gulp = require("gulp"),
    uglify = require("gulp-uglify");

gulp.task("uglify-js", function() {
  return gulp.src("public/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public/dist/"));
});
