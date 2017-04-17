module.exports = function(grunt) {

    let configuracion = {
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            min: {
                src: "<%= pkg.name %>.js",
                dest: "<%= pkg.name %>.min.js"
            } // Propiedad name del objeto pkg que acabamos de leer de package.json
        },
        watch: {
            scripts: {
                files: ["./*.js"], //Cambios en cualquier fichero .js lanzará la tarea "uglify""
                tasks: ["uglify"],
                options: { spawn: false }
            }
        }
    };

    grunt.initConfig(configuracion);

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("comprime", ["uglify"]);
    grunt.registerTask("default", ["watch"]);

    function enUnCambio(accion, rutaFichero, destino) {
        grunt.log.writeln(destino + ", " + rutaFichero + ", " + accion);
    }

    grunt.event.on("watch", enUnCambio);
};