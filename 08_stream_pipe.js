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