var gulp = require("gulp");
var mocha = require("gulp-mocha");
var browserify = require("browserify");
var babelify = require("babelify");
var runSequence = require("run-sequence");
var source = require("vinyl-source-stream");
var jshint = require("gulp-jshint");
var sass = require("gulp-sass");


/* Configuration */
var files = {
  source: {
    js: "./js/**/*.js",
    jsx: "./js/**/*.jsx",
    css: "./assets/sass/**",
    images: "./assets/images/**"
  },
  dest: {
    js: "public/js/",
    css: "public/css/",
    images: "public/images/"
  }
};


gulp.task("sass", function () {
  gulp.src(files.source.css)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(files.dest.css));
});

gulp.task("sass:watch", function () {
  gulp.watch(files.source.css, ["sass"]);
});

gulp.task("lint", function() {
  return gulp.src([files.source.js, files.source.jsx])
    .pipe(jshint({ linter: require("jshint-jsx").JSXHINT }))
    .pipe(jshint.reporter("default"));
});

gulp.task("browserify", function () {
  browserify({
    entries: "./js/app.jsx",
    extensions: [".js", ".jsx"],
    debug: true,
    bundleExternal: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source("app.js"))
  .pipe(gulp.dest(files.dest.js));
});

gulp.task("copy", function() {
  gulp.src("index.html")
    .pipe(gulp.dest("public/"));

  gulp.src(files.source.images)
    .pipe(gulp.dest(files.dest.images));
});

gulp.task("watch", function() {
  gulp.watch("./js/**", ["copy", "browserify"]);
  gulp.watch([files.source.css, files.source.images, "./index.html"], ["copy"]);
});


// Task flows.
gulp.task("dev", function(cb) {
  runSequence("lint", "watch", "sass:watch", cb);
});

gulp.task("build", function(cb) {
  runSequence("lint", "browserify", "sass", "copy", cb);
});