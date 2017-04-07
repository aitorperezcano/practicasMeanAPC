"use strict"

let lfme = require("./04_listar_fichero_module_event");
let directorio = process.argv[2];
let extension = process.argv[3];

function queHacerCundoDevuelvaLosFicheros(ficheros) {
    ficheros.forEach((fichero) => console.log("fichero: ", fichero));
}

lfme.on("alfiltrar", queHacerCundoDevuelvaLosFicheros);
lfme.on("onerror", (error) => console.log("error:", error));

console.log("Iniciado")

lfme(directorio, extension);

console.log("Tras leer")