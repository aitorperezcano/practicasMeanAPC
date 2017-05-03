function sumar(a, b) {
    return a.map((e, i) => e + b[i]);
}

function sumarT(a, b) {
    return sumar(a, b).reduce((p, c, i, a) => p + c);
}

function ejecutar() {
    console.log("hola");
    var a = [1, 2, 3, 4],
        b = [5, 6, 7, 8];

    console.log("sumar: %s", sumar(a, b));
    console.log("sumarT: %s", sumarT(a, b));
}

module.exports = { sumar: sumar, sumarT: sumarT };

ejecutar();