var gulp = require("gulp"),
    minImage = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant");

gulp.task("minImage", function() {
  return gulp.src("public/images/*")
    .pipe(minImage({
      use: [pngquant()]
    }))
    .pipe(gulp.dest("public/dist/"));
});
