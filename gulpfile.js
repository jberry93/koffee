var gulp = require("gulp"),
    uglify = require("gulp-uglify");

gulp.task("uglify", function() {
  return gulp.src("public/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public/dist/"));
});
