"use strict";
const zlib = require("zlib");
const fs = require("fs");

// leer de fichero comprimido y descomprimir
const streamLectura = fs.createReadStream("./dir_datos/06_fich_write.txt.gz");
const streamEscritura = fs.createWriteStream("./dir_datos/06_fich_descomprimido.txt");
//streamLectura.setEncoding("utf8"); // no se hace encoding, pues el fichero comprimido tiene codificación ANSI (se hizo con 7zip)
streamLectura.pipe(zlib.createGunzip()).pipe(streamEscritura);

// leer fichero y comprimirlo
const streamLectura2 = fs.createReadStream("./dir_datos/06_fich_write.txt");
const streamEscritura2 = fs.createWriteStream("./dir_datos/06_fich_comprimido.txt.gz");
streamLectura2.pipe(zlib.createGzip()).pipe(streamEscritura2);


// Reutilizar la misma variabla stream. TODO: no funciona!!
let l = fs.createReadStream("./dir_datos/08_fich_l.txt");
let e = fs.createWriteStream("./dir_datos/08_fich.txt.gz");

//l.on("data", data => { console.log("ondata: ", data); return data.toString().toLowerCase() });
// no funciona para transformar en minúsculas!
//l.on("error", err => console.log("ERROR: ", err));

l.pipe(zlib.createGzip()).pipe(e);

/*
l.on("end", function() { siguientePaso(l, e); });

function siguientePaso(l, e) {
    console.log("siguientePaso");
    l.close();
    e.close();

    l = fs.createReadStream("./dir_datos/08_fich.txt.gz");
    e = fs.createWriteStream("./dir_datos/08_fich_e.txt");
    //e.on("data", data => e.write(data.toString().toLowerCase()));
    l.pipe(zlib.createGunzip()).pipe(e);
}*/