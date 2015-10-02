var gulp = require("gulp"),
    browserSync = require("browser-sync").create();

gulp.task("browser-sync", ["uglify-js"], function() {
  browserSync.init({
    server: {
      baseDir: "public/dist"
    }
  });
  gulp.watch("*.html", ["minHTML"]).on("change", browserSync.reload);
});
