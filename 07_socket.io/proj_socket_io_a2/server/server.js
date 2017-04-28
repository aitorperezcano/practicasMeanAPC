var app = require("express")();
var server = require("http").Server(app);
//Como io se monta sobre express, al arrancar se publica este js que se puede usar desde el cliente haciendo: <script src="/socket.io/socket.io.js">
var io = require("socket.io")(server);

server.listen(3000, () => console.log("Servidor escuchando en puerto 3000"));

var sockets = [];
//se permite conectarse a clientes desde http://localhost:4200 (angular correrá allí)
io.origins("http://localhost:4200");
//namespace es "chat"
var chat = io.of("chat");

chat.on("connection", socket => {
    console.log("connection");
    sockets.push(socket);

    // Cuando un cliente mande un mensaje, se le asigna el user y se reenvía al resto de clientes
    socket.on("mando-un-mensaje", mensaje => {
        console.log("Mensaje recibido: ", mensaje);

        mensaje.user = socket.id;

        //socket.emit("mando-un-mensaje", mensaje);
        //chat.emit("mando-un-mensaje", mensaje);
        //broadcast: todos menos el socket
        socket.broadcast.emit("mando-un-mensaje", mensaje);
    });

});

chat.on("disconnect", socket => {
    console.log("disconnect");
});