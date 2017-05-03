var assert = require("assert");

describe("Batería de pruebas", function() {
    describe("@indexOf()", function() {
        /*it("Debe devolver -1 cuando el valor no esté presente", function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });*/
        it("Debe devolver -1 cuando el valor no esté presente", function() {
            assert.equal(-1, [1, 2, 3].indexOf(1));
        });
        it("Debe devolver la primera posición (0) cuando el valor esté presente allí", function() {
            assert.equal(0, [1, 2, 3].indexOf(1));
        });
    });
});