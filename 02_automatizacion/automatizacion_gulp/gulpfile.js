var [gulp, concat, uglify] = [require("gulp"), require("gulp-concat"), require("gulp-uglify")];

const filePattern = ["source/*.js", "!source/3.js"];

gulp.task("default", tareasEncomprimir);

gulp.watch(filePattern, tareasEncomprimir);

/*
gulp.task("watch", tareasEnWatch);

function tareasEnWatch() {
    gulp.watch(glob, "default");
}*/

function tareasEncomprimir(fichero) {
    //GLOB
    var glob = gulp.src(filePattern);

    glob.pipe(concat("funciones.min.js")).pipe(uglify()).pipe(gulp.dest("build/"));
    console.log("Modificando con Gulp: " + fichero.path);
}