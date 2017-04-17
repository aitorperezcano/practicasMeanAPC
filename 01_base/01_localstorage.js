if (typeof localStorage === "undefined" || localStorage == null) {
    var LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./dir_datos");
}

localStorage.setItem("clave1", "valor1");
localStorage.setItem("clave2", "valor2");

var v1 = localStorage.getItem("clave1");
console.log("v1 ", v1);
var v2 = localStorage.getItem("clave2");
console.log("v2 ", v2);