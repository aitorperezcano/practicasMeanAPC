var modelo = require("./03_ejemplo_modelo");
var Libro = modelo.Libro;

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/db_ejemplo");

function getLibros(limit) {
    var libros = [];
    Libro.find().limit(limit).exec(
        (error, data) => {
            if (error) {
                console.log("Error al consultar: ", error);
            } else {
                console.log("libro: ", data);
                libros.push(data);
                //data.forEach(elto => console.log("libro: %s , %s", elto._id, elto.titulo));
            }
        });
    console.log("libros: ", libros);
    return libros;
}

function getLibroById(id) {
    Libro.findById(id, (error, data) => {
        if (error) {
            console.log("Error al consultar: ", error);
        } else {
            console.log("libro: ", data);
            return data;
        }
    });
}

function saveLibro(libro) {
    new Libro(libro).save((error, data) => {
        if (error) {
            console.log("Error al guardar: ", error);
        } else {
            console.log("libro salvado: ", data);
            return data;
        }
    });
}

function updateLibro(libro, campo, valor) {
    var libro = getLibroById(libro._id);
    libro[campo] = valor;
    saveLibro(libro);
}

module.exports = {
    getLibros: getLibros,
    getLibroById: getLibroById,
    saveLibro: saveLibro,
    updateLibro: updateLibro
}