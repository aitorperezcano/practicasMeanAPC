"use strict"

const miBuff1 = Buffer.from("Hola mundo", "utf8");
const miBuff2 = Buffer.alloc(20);

console.log("Contenido buffer1: ", miBuff1);
console.log("Contenido buffer1: " + miBuff1);

miBuff1.copy(miBuff2); // copia en miBuff2

console.log("Contenido buffer2: ", miBuff2);
console.log("Contenido buffer2: " + miBuff2);