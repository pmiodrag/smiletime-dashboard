var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
// SERVER
gulp.task('clean', function(){
    return del('dist')
});

gulp.task('build:server', function () {
	var tsProject = ts.createProject('src/server/tsconfig.json');
    var tsResult = gulp.src('src/server/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(concat('server.js'))
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist'))
});


// CLIENT

/*
  jsNPMDependencies, sometimes order matters here! so becareful!
*/
var jsNPMDependencies = [
    'es6-shim/es6-shim.min.js',
    'systemjs/dist/system-polyfills.js',
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js',
    'angular2/bundles/http.dev.js',
    'angular2-jwt/angular2-jwt.js',
    'angular2/bundles/angular2.min.js'
] 
gulp.task('build:styles', function() {
    var copyNgStyles= gulp.src('node_modules/ng2-material/dist/*.css')
     .pipe(minifyCSS())
        .pipe(gulp.dest('dist/assets/styles'));
    var copyStyles= gulp.src('src/client/styles/*.css')
     .pipe(minifyCSS())
            .pipe(gulp.dest('dist/assets/styles'))
        return[copyStyles, copyNgStyles];
        //.pipe(less())
       // .on('error', console.log)
        
//        .pipe(refresh(lrserver));
});
gulp.task('buld:assets', function() {
    return gulp.src("src/client/assets/**")
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('dist/assets/'))
        //.pipe(refresh(lrserver));
});
gulp.task('build:index', function(){
    var mappedPaths = jsNPMDependencies.map(file => {return path.resolve('node_modules', file)}) 
    
    //Let's copy our head dependencies into a dist/libs
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest('dist/libs'))
//       var copyStyles= gulp.src('src/client/styles/*.*')
//        .pipe(gulp.dest('dist/styles'))
    //Let's copy our index into dist   
    var copyIndex = gulp.src('src/client/index.html')
        .pipe(gulp.dest('dist'))
    return [copyJsNPMDependencies, copyIndex];
});

gulp.task('build:app', function(){
    var tsProject = ts.createProject('src/client/tsconfig.json');
    var tsResult = gulp.src('src/client/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist'))
});


gulp.task('build', function(callback){
    runSequence('clean', 'build:server', 'build:index', 'buld:assets', 'build:styles', 'build:app', callback);
});

gulp.task('default', ['build']);