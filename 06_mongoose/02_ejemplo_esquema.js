var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/db_ejemplo");

var Schema = mongoose.Schema;

var LibroSchema = new Schema({
    titulo: String,
    autor: String,
    sinopsis: {
        type: String,
        trim: true
    },
    fecha: Date,
    categoria: {
        type: String,
        set: s => trim(s.replace(/(\s){2,}/g, " "))
    },
    campos_biblioteca: {
        ejemplares: Number,
        reservas: Number,
        ultima_reserva: {
            type: Date,
            default: Date.now()
        }
    },
    sitioweb: {
        type: String,
        set: url => {
            url = url || "";
            if (!/^https?:\/\//.test(url)) {
                url = "http://" + url;
            }
            return url;
        }
    }
    /*,paginas: Number*/
});

LibroSchema.add({ estado: String });

// Registra la colección libros y define el constructor js
var Libro = mongoose.model("Libro", LibroSchema); //si no se pone el nombre de la colección, mongoose lo elegirá por nosotros

var nuevoLibro = new Libro({
    titulo: " El señor de los anillos ",
    autor: "JR. Tolkien",
    sinopsis: " Enanos y otras aventuras en la Tierra Media ",
    //15/01/1955
    fecha: new Date(1955, 0, 15), //mes en Date: 0-11
    categoria: "   C   A    T   ",
    campos_biblioteca: {
        ejemplares: 9
    },
    paginas: 1999,
    estado: "N",
    sitioweb: "www.lotr.com"
});

console.log("nuevoLibro.sitioweb: ", nuevoLibro.sitioweb);

nuevoLibro.save(
    (error, data) => {
        if (error) {
            console.log("Error al guardar: ", error);
        } else {
            console.log("libro guardado: %s, %s", data._id, data.sitioweb);
        }
    });

Libro.find((error, data) => {
    if (error) {
        console.log("Error al consultar: ", error);
    } else {
        data.forEach(elto => console.log("libro: %s , %s", elto._id, elto.titulo));
    }
});