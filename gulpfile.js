var gulp = require("gulp"),
    nodemon = require("gulp-nodemon"),
    uglify = require("gulp-uglify"),
    minHTML = require("gulp-minify-html"),
    minCSS = require("gulp-minify-css"),
    minImage = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant"),
    browserify = require("browserify"),
    browserSync = require("browser-sync").create(),
    mocha = require("gulp-mocha");

gulp.task("nodemon", function() {
  nodemon({
    script: "app.js",
    ext: "js"
  })
    .on("start", ["test"])
    .on("restart", function() {
      console.log("Restarted nodemon!");
    });
});

gulp.task("test", function() {
  return gulp.src("test.js")
    .pipe(mocha());
});

gulp.task("uglify-js", function() {
  return gulp.src("public/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public/dist/"));
});

gulp.task("minHTML", function() {
  return gulp.src("public/html/*.html")
    .pipe(minHTML())
    .pipe(gulp.dest("public/dist/"));
});

gulp.task("minCSS", function() {
  return gulp.src("public/css/*.css")
    .pipe(minCSS())
    .pipe(gulp.dest("public/dist/"));
});

gulp.task("minImage", function() {
  return gulp.src("public/images/*")
    .pipe(minImage({
      use: [pngquant()]
    }))
    .pipe(gulp.dest("public/dist/"));
});

gulp.task("browser-sync", ["uglify-js"], function() {
  browserSync.init({
    server: {
      baseDir: "public/dist"
    }
  });
});

gulp.task("default", ["browser-sync"]);
