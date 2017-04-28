var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/db_ejemplo");

var Schema = mongoose.Schema;

var LibroSchema = new Schema({
    titulo: {
        type: String,
        trim: true,
        required: [true, "El campo {PATH} debe cumplir {TYPE}"]
    },
    autor: {
        type: String,
        validate: {
            validator: s => /^[A-Z]/.test(s),
            message: "El campo {PATH} debe comenzar con mayúsculas. Valor incorrecto: {VALUE}"
        }
    },
    sinopsis: {
        type: String,
        // Reemplazar varios espacios seguido por 1 único espacio
        set: s => s.trim().replace(/(\s){2,}/g, " ")
    },
    fecha: Date,
    categoria: {
        type: String,
        enum: {
            values: ["comedia", "terror", "suspense"],
            message: "El campo debe tener uno de los valores definidos"
        }
    },
    campos_biblioteca: {
        ejemplares: {
            type: Number,
            min: [10, "Menos de 10 ejemplares no merece la pena vender"]
        },
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
    //titulo: " El señor de los anillos ",
    autor: "jR. Tolkien",
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

            Libro.schema.eachPath(campo => {
                if (error.errors[campo]) {
                    console.error("msg: ", error.errors[campo].message);
                }
            });

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