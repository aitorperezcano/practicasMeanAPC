var MongoClient = require("mongodb").MongoClient,
    ObjectId = require("mongodb").ObjectId,
    test = require("assert"),
    url = "mongodb://localhost:27017/db_hotel";

MongoClient.connect(url, alConectarDBActualizar); //alConectarDBInsertar);

function alConectarDBInsertar(err, db) {
    var documentoReserva = {
        nombre: "YO mismo",
        email: "email@ejemplo.com",
        fecha_inicio: "25/04/2017",
        fecha_fin: "30/04/2017",
        tipo_habitacion: 1, //1: Sencilla, 2: Doble
        numero_habitaciones: 1,
        con_desayuno: false
    };
    db.collection("reservas").insert(documentoReserva);
    console.log("Reservas: ", db.collection("reservas").find());

    var arrayColeccion = [{ nombre: "Ana Pérez", email: "aperez@empresa.com" },
        { nombre: "Luis Fernandez", email: "lfernandez@empresa.com" },
        { nombre: "Javier Gutierrez", email: "jguti@empresa.com" }
    ];

    db.collection("clientes").insert(arrayColeccion);
}

function alConectarDBActualizar(err, db) {
    // Comprobar si hay error: si no fuese null, lanza AsertionError
    test.equal(null, err);

    db.collection("clientes").update({ _id: ObjectId("58ff2199ec0cac136c43f19b") }, { $set: { email: "anap@empresa.com" } });
    db.collection("clientes").update({ _id: ObjectId("58ff2199ec0cac136c43f19b") }, { $rename: { email: "nuevo_campo_eamil" } });

    db.collection("clientes").updateMany({ nombre: "Luis Fernandez" }, { $set: { email: "luisf@empresa.com" } });
    db.collection("clientes").update({ _id: ObjectId("58ff22b8f6616513a0444232") }, { $unset: { email: 1 } });

    db.collection("reservas").update({ _id: ObjectId("58ff2199ec0cac136c43f19a") }, { $inc: { numero_habitaciones: 1 } });

    db.collection("reservas").findOne({}, (err, doc) => console.log("doc: " + doc.nombre));
    db.collection("reservas").find({}).toArray((err, doc) => doc.forEach(elto => console.log("nombre: ", elto.nombre)));

}