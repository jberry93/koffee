var gulp = require("gulp"),
    uglify = require("gulp-uglify");

gulp.task("uglify", function() {
  return gulp.src("./js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/"));
});
