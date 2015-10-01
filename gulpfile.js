var gulp = require("gulp"),
    minHTML = require("gulp-minify-html"),
    minCSS = require("gulp-minify-css"),
    uglify = require("gulp-uglify");

gulp.task("uglify", function() {
  return gulp.src("./js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/"));
});

gulp.task("minHTML", function() {
  return gulp.src("./html/*.html")
    .pipe(minHTML())
    .pipe(gulp.dest("dist/"));
});

gulp.task("minCSS", function() {
  return gulp.src("./css/*.css")
    .pipe(minCSS())
    .pipe(gulp.dest("dist/"));
});
