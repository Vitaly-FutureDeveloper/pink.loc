'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();

gulp.task('less', function () {
		return gulp.src('./less/style.less')
	    .pipe(less({
	      paths: [ path.join(__dirname, 'less', 'includes') ]
	    }))
	    .pipe(gulp.dest('./css'));
});

gulp.task("style", function(){

		gulp.src('./less/style.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest("css"))
		.pipe(server.stream());
});

gulp.task("serve",  function(done){
		server.init({
		server: ".",
		notify: false,
		open: true,
		cors: true,
		ui: false
	});
	gulp.watch("./less/", gulp.series('less'));
	gulp.watch("*.html").on("change", () => {
		server.reload();
		done();
	});
	done();
});

gulp.task('default', gulp.series('less', 'serve'));

