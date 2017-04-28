var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/db_ejemplo");

var Libro = mongoose.model("Libro", {
    titulo: String,
    autor: String,
    paginas: Number
}, "libreria");

var Camion = mongoose.model("Camion", {
    marca: String,
    modelo: String,
    numeroRuedas: Number
}, "camiones");

var nuevoLibro = new Libro({ titulo: "El señor de los anillos", autor: "JR. Tolkien", paginas: 1999 });
nuevoLibro.save(
    (error, data) => {
        if (error) {
            console.log("Error al guardar: ", error);
        } else {
            console.log("libro guardado: ", data.titulo);
            //data.forEach(elto => console.log("libro.titulo: ", libro.titulo));
        }
    });

var nuevoCamion = new Camion({ marca: "Scania", modelo: "mu tocho", numeroRuedas: 6 });
nuevoCamion.save(
    (error, data) => {
        if (error) {
            console.log("Error al guardar: ", error);
        } else {
            console.log("camión guardado: ", data._id);
            //data.forEach(elto => console.log("libro.titulo: ", libro.titulo));
        }
    });