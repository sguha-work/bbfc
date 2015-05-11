/**
**********************  SETUP GUIDE ******************************
      STEP 1 : Traverse to the root folder of paradocs via terminal
      STEP 2 : Run the follwing six commands one by one which will install the dependencies (This step is for the first time only)
                1> npm install gulp -g
                2> npm install gulp
                3> npm install gulp-watch -g
                4> npm install gulp-watch
                5> npm instll gulp-uglify -g
                6> npm instll gulp-uglify
      STEP 3 : Run the command "gulp" it will minify the files inside jekyll/out/assets/scripts folder and put them back there.

      Point to keep in mind that we have to run the "gulp" command after jekyll build is done. I suggest
      we do that only for release time as minified files are hard to debug in time of development.

*/
var gulp = require('gulp');
var watch = require('gulp-watch');

// include plug-ins

var uglify = require('gulp-uglify');

// JS concat and minify
gulp.task('JAVASCRIPT_MINIFIER', function() {
  gulp.src(['bbfc.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./bbfc-prod/'));
});




// default gulp task
gulp.task('default', ['JAVASCRIPT_MINIFIER'], function() {
  // watch for JS changes
  gulp.watch('bbfc.js', ['JAVASCRIPT_MINIFIER']);
});
