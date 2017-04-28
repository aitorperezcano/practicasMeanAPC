var mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost/db_ejemplo");

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

module.exports = {
    Libro: mongoose.model("Libro", LibroSchema)
}