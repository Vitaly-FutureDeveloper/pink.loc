'use strict';

var gulp = require('gulp');
var del = require('del');

var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var csso = require('gulp-csso');

var rename = require("gulp-rename");
var copy = require('gulp-copy');

var posthtml = require("gulp-posthtml"),
	include = require("posthtml-include"),
	rigger = require('gulp-rigger');

var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');
var svgstore = require('gulp-svgstore');

gulp.task('clean', function(){
	return del("./build/");
});

gulp.task("copy", function(){
	return gulp.src([
		'./source/less/fonts/**/*.{ttf,woff,woff2}',
		])
	.pipe(gulp.dest("./build/css/fonts"))
});

gulp.task('less', function () {
		return gulp.src('./source/less/style.less')
	    .pipe(less({
	      paths: [ path.join(__dirname, 'less', 'includes') ]
	    }))
	    .pipe(gulp.dest('./css'));
});

gulp.task("images", function(){
	return gulp.src("./source/img/**/*.{png,jpg,svg}")
	.pipe(imagemin([
		imagemin.mozjpeg({quality: 75, progressive: true}),
		imagemin.optipng({optimizationLevel: 3}),
		imagemin.svgo()
	]))
	.pipe(gulp.dest("./build/img/"))
})

gulp.task("webp", function(){
	return gulp.src("./source/img/**/*.{png,jpg}")
	.pipe(webp({quality: 80}))
	.pipe(gulp.dest("./build/img/"))
});

gulp.task("sprite", function(){
	return gulp.src("./source/img/icon-*.{svg}")
	.pipe(svgstore({
		inlinesvg: true
	}))
	.pipe(rename("sprite.svg"))
	.pipe(gulp.dest("./build/img/"))
})

gulp.task("style", function(){
	return gulp.src('./source/less/style.less')
	.pipe(plumber())
	.pipe(less())
	.pipe(postcss([
		autoprefixer()
	]))
	.pipe(gulp.dest("./build/css"))

	.pipe(csso())
	.pipe(rename("style.min.css"))
	.pipe(gulp.dest("./build/css"))

	.pipe(server.stream());
});

gulp.task("html", function(){
	return gulp.src("./source/*.html")
	.pipe(rigger())
	.pipe(posthtml([
		include({encoding: 'utf-8'})
	]))
	.pipe(gulp.dest("./build/"));
});

gulp.task("script", function(){
	return gulp.src("./source/script/**/*.js")
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(uglify())

	.pipe(gulp.dest("./build/script/"))
})

gulp.task("serve", function(){
		server.init({
		server: "./build/",
		notify: false,
		open: true,
		cors: true,
		ui: false
	});
	gulp.watch("./source/less/**/*.less", gulp.series('style')).on('change', server.reload);

	gulp.watch("./source/*.html", gulp.series('html', 'style')).on('change', server.reload);
	gulp.watch("./source/script/**/*.js", gulp.series('script', 'html', 'style')).on('change', server.reload);
});

gulp.task('default', gulp.series('style', 'serve'));

gulp.task('build', gulp.series('clean', 'copy', 'style', 'sprite', 'script', 'images', 'webp', 'html'));
