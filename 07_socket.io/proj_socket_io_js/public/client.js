var socket = io.connect("/");

socket.on("estado", (data) => document.getElementById("divClientes").innerText = "numClientes: " + data.numClientes);
socket.on("fecha", (data) => document.getElementById("divFecha").innerText = "Fecha: " + new Date(data.fechaServidor));
socket.on("mensajes", (data) => {
    var html = data.map(function(elem, index) {
        return (`
            <div>
                <strong>${elem.author}</strong>:
                <em>${elem.text}</em>
            </div>
        `);
    }).join("-");

    document.getElementById("divMensajes").innerHTML = html;
});