var gulp = require("gulp"),
    browserSync = require("browser-sync").create();

gulp.task("browser-sync", ["minHTML"], function() {
  console.log("browser-sync running!");
  browserSync.init({
    server: {
      baseDir: "public/dist"
    }
  });
  gulp.watch("./public/dist/index.html", ["minHTML"], browserSync.reload);
});
