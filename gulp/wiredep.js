var gulp = require("gulp"),
    wiredep = require("wiredep").stream;

gulp.task("bower", function() {
  gulp.src("./public/html/*.html")
    .pipe(wiredep())
    .pipe(gulp.dest("./public/html/"));
});
