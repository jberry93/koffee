var gulp = require("gulp"),
    browserSync = require("browser-sync").create();

gulp.task("browser-sync", ["minHTML"], function() {
  console.log("browser-sync running!");
  browserSync.init({
    server: {
      baseDir: "public/dist/"
    }
  });
  gulp.watch("**/public/dist/*.html", ["minHTML"], browserSync.reload);
  // gulp.watch("**/public/dist/*.html", ["minHTML"], browserSync.reload).on("change", browserSync.reload);

});
