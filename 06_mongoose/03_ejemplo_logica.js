var negocio = require("./03_ejemplo_crud");

negocio.saveLibro({ titulo: "El guardián entre el centeno", autor: "Yo mismo" });
negocio.saveLibro({ titulo: "LOTR", autor: "Tolkien" });
negocio.saveLibro({ titulo: "El libro de Petete", autor: "anónimo" });

var libros = negocio.getLibros(2);
console.log("libros: ", libros);
var libro = negocio.getLibroById("59007b10ab519d160c191caf");
console.log("libro Antes: ", libro);

negocio.updateLibro(libro, "autor", "Nuevo autor");
var libro = negocio.getLibroById("59007b10ab519d160c191caf");
console.log("libro Después: ", libro);