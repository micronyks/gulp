var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var rename=require('gulp-rename');
var clean=require('gulp-clean');
var jsFiles = 'app/**/*.js'; 

// npm install -g gulp
// npm install --save-dev gulp
// npm install --save-dev gulp-uglify
// npm install --save-dev gulp-concat
// npm install --save-dev gulp-rename
// npm install --save-dev gulp-clean
gulp.task('default',['scripts']);
 
gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('build.js'))
        .pipe(gulp.dest('dist/lib'))
        .pipe(rename('build.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('clean',function(){
   
});

gulp.task('clean',function(){
 gulp.src('dist',{read:false})
 .pipe(clean());
});

gulp.task('copy', function(){
   gulp.src('app/**/*')
  .pipe(gulp.dest('dist'));
 });
