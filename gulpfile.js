var gulp = require('gulp');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

var rename = require('gulp-rename');

gulp.task('clean',function(){
    gulp.src('./dist/*',{read:false})
    .pipe(clean());
})

gulp.task('build',['clean'], function(){
    gulp.src('./js/*.js')
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify({
        mangle:false
    }))
    .pipe(gulp.dest('dist/js'));
})

gulp.task('default',['build'],function(){

})
