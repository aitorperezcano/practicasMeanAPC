var express = require("express");
var passport = require("passport");
var Strategy = require("passport-http").BasicStrategy;

var app = express();
app.use((request, response, next) => {
    // A todas las peticiones se les responde diciendo que se necesita autorización
    response.header("Access-Control-Allow-Origin", request.headers.origin);
    response.header("Access-Control-Allow-Headers", "Authorization");
    next();
});

passport.use(new Strategy((username, password, done) => {
    console.log("Usuario: %s; Contraseña: %s", username, password);
    if (username == "aitorp" && password == "aitorp") {
        // error = null; autorizado = true
        done(null, true);
    } else {
        done(null, false);
    }
}));

// No guardar las credenciales en la sesión: usar token en todas las peticiones
app.get("/home", passport.authenticate("basic", { session: false }), (request, response) => {
    console.log("Acceso permitido");
    response.send("{mensaje: 'Acceso permitido'}");
});

app.listen(8080);