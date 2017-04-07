"use strict"

let fs = require("fs");
let path = require("path");
let moduleEvents = require("events");
let ee = new moduleEvents.EventEmitter();

module.exports = function(directorio = "", extension) {
    fs.readdir(directorio, (error, ficheros) => {
        if (error) {
            ee.emit("onerror", error);
        } else {
            ficheros = ficheros.filter(fichero => path.extname(fichero) === extension);
            ee.emit("alfiltrar", ficheros);
        }
    });
}

module.exports.on = function(nombreEvento, funcionCallBack) {
    ee.on(nombreEvento, funcionCallBack);
}