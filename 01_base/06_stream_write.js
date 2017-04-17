"use strict"
const fs = require("fs");
const streamEscritura = fs.createWriteStream("./dir_datos/06_fich_write.txt"); //escribinos en fich_write.txt
const streamLectura = fs.createReadStream("02_process.js"); //leemos del fichero 02_process.js
streamLectura.setEncoding("utf8");
streamLectura.on("data", data => streamEscritura.write(data.toString().toUpperCase()));