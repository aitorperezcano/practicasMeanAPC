var express = require("express");
var app = express();
var server = require("http").Server(app);
//Como io se monta sobre express, al arrancar se publica este js que se puede usar desde el cliente haciendo: <script src="/socket.io/socket.io.js">
var io = require("socket.io")(server);

app.use(express.static("public"));

server.listen(8080, () => console.log("Servidor escuchando en puerto 8080"));

var numClientes = 0;

io.on("connection", socket => {
    io.emit("estado", { numClientes: ++numClientes });

    console.log("socket: ", socket.adapter.rooms); // es un map
    //TODO: usar el sessionID de la sesión

    console.log("connection: %d", numClientes);
    console.log("connection.Socket: %d", socket.adapter.rooms.size);

    socket.on("disconnect", socket => {
        io.emit("estado", { numClientes: --numClientes });
        console.log("disconnect: %d", numClientes);
        console.log("disconnect.Socket: %d", socket.adapter.rooms.length);
    });

});

setInterval(() =>
    io.emit("fecha", { fechaServidor: Date.now() }), 1000);