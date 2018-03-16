var gulp = require('gulp');
var webpack = require('gulp-webpack');
var gulpPlumber = require('gulp-plumber');
var gulpWatch = require('gulp-watch');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var browserSync = require('browser-sync').create();

var webpackConfig = {
  output:{
    filename: 'index.js'
  },
  devtool: 'inline-source-map',
  module:{
    loaders:[
      {test: /\.jsx$/, loader: 'jsx-loader'}
    ]
  },
  resolve:{
    extensions:['','.js','.jsx']
  }
}

gulp.task('style', function(){
    gulp.src('./style/index.scss')
      .pipe(gulpPlumber())
      .pipe(sass())
      .pipe(gulp.dest('./www/dest/'))
      .pipe(browserSync.stream());
})

gulp.task('script', function(){
  gulp.src('./script/index.jsx')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./www/dest/'))
    .pipe(browserSync.stream());
})

gulp.task('connect',function(){
    connect.server({
        // host:'localhost',
        // port:3000,
        // root:'./',
        livereload:true
    })
})

gulp.task('html',function(){
    gulp.src('./www/index.html')
        .pipe(connect.reload());
})

gulp.task('watch',function(){
    gulp.watch('./script/**/*.jsx', ['script']);
    gulp.watch('./style/**/*.scss', ['style']);
    gulp.watch('./www/index.html', ['html']);
})

gulp.task('default', ['script','style','html','connect','watch'], function(){
    browserSync.init({
      server:{
        baseDir:'./www/'
      },
      open: true
    })
})