var express = require("express");
var app = express();
var objModuloHttp = require("http");
var serverExpress = objModuloHttp.Server(app);
var funModuloSocketIO = require("socket.io");
var objIO = funModuloSocketIO(serverExpress);
var gestorChat = require("./gestorChat");

app.use(express.static("public"));

serverExpress.listen(8080, function() {
    console.log("Servidor EXPRESS escuchando en http://localhost:8080");
});
objIO.on("connection", alConectarseAlguien);

function alConectarseAlguien(socket) {
    gestorChat.agregarCliente();
    objIO.emit("estao", gestorChat.getNumClientes());
    console.log("Clientes conectados: " + gestorChat.getNumClientes().numeroClientes);
    socket.on("disconnect", alDesconectarseAlguien);
    socket.on("nuevo-mensaje", alRecibirNuevoMensaje);
    socket.emit("mensajes", gestorChat.getMensajes());
}

function alRecibirNuevoMensaje(mensaje) {
    gestorChat.agregarMensaje(mensaje);
    objIO.sockets.emit("mensajes", gestorChat.getMensajes());
}

function alDesconectarseAlguien() {
    gestorChat.quitarCliente();
    console.log("Alguien se ha desconectado:\nClientes conectados: " + gestorChat.getNumClientes().numeroClientes);
    objIO.emit("estao", gestorChat.getNumClientes());
}

setInterval(function() {
    objIO.emit("actualizarFecha", { "fechaActual": Date.now() });
    console.log("Enviando fecha: " + Date.now().toString());
}, 2000);