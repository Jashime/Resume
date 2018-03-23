var gulp = require('gulp');
var webpack = require('gulp-webpack');
var gulpPlumber = require('gulp-plumber');
var gulpWatch = require('gulp-watch');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssminify = require('gulp-minify-css');
// var connect = require('gulp-connect');
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
    gulp.src('./style/**/*.scss')
      .pipe(gulpPlumber())
      .pipe(sass())
      .pipe(concat('index.css'))
      .pipe(cssminify())
      .pipe(gulp.dest('./www/dest/'))
      .pipe(browserSync.stream());
      // .pipe(connect.reload());
})

gulp.task('script', function(){
  gulp.src('./script/**/*.jsx')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./www/dest/'))
    .pipe(browserSync.stream());
    // .pipe(connect.reload());
    
})

// gulp.task('connect',function(){
//     connect.server({
//         root:'./www',
//         livereload:true
//     })
// })

gulp.task('html',function(){
    gulp.src('./index.html')
    // .pipe(connect.reload());
    .pipe(browserSync.stream());
        
})

gulp.task('watch',function(){
    gulp.watch('./script/**/*.jsx', ['script']);
    gulp.watch('./style/**/*.scss', ['style']);
    gulp.watch('./index.html', ['html']);
})

gulp.task('browser', function(){
    browserSync.init({
      server:{
        baseDir:'./'
      },
      open: true
    })
})
gulp.task('default',['browser','watch']);