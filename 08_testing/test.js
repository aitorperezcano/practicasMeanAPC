var assert = require("assert");
var indexMod = require("./index.js");
var promesaMod = require("../ejemplo_promesa.js");

describe("Batería de pruebas ejemplo", function() {
    describe("@indexOf()", function() {
        it("Debe devolver -1 cuando el valor no esté presente", function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
        it("Debe devolver la primera posición (0) cuando el valor esté presente allí", function() {
            assert.equal(0, [1, 2, 3].indexOf(1));
        });
    });
});

describe("Batería de pruebas indexMod", function() {
    var a = [1, 2, 3, 4],
        b = [5, 6, 7, 8];

    describe("@sumar", function() {
        it("Debe devolver un array con la suma de los dos", function() {
            assert.equal([6, 8, 10, 12].toString(), indexMod.sumar(a, b).toString());
        });
        it("Debe devolver un array con la suma de los dos", function() {
            assert.notEqual([16, 18, 110, 112].toString(), indexMod.sumar(a, b).toString());
        });
    });

    describe("@sumarT", function() {
        it("Debe devolver la suma total de todos los elementos con la suma de los dos", function() {
            assert.equal(36, indexMod.sumarT(a, b));
        });
        it("Debe devolver la suma total de todos los elementos con la suma de los dos", function() {
            assert.notEqual(37, indexMod.sumarT(a, b));
        });
    });
});

describe("Batería de pruebas Promesas", function() {
    describe("@addToArrayPromise()", function() {
        it("Debe devolver array con los elementos añadidos", function(hecho) {
            var array = [1, 2, 3];
            promesaMod.addToArrayPromise(4, array)
                .then(function() { return promesaMod.addToArrayPromise(5, array) })
                .then(function() { return promesaMod.addToArrayPromise(6, array) })
                .then(function() {
                    console.log(array);
                    assert.equal(6, array[array.length - 1]);
                    hecho();
                })
                .catch(err => {
                    console.log(err.message);
                    hecho(err);
                });

        });

    });
});