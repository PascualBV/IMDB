"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var movie_1 = require("./movie");
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.printMovie = function () {
        console.log(this.peliculas);
    };
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var fs = require("fs");
        var nuevo = JSON.stringify(this);
        fs.writeFileSync(nombreFichero, nuevo);
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var fs = require("fs");
        // let retorno = fs.readFileSync(nombreFichero, "utf-8");
        // let fichero = JSON.parse(retorno)
        // return fichero;
        var vacio = new Imdb([]);
        fs.readFileSync(nombreFichero);
        vacio.peliculas = JSON.parse(fs.readFileSync(nombreFichero)).peliculas;
        return vacio;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
var peli1 = new movie_1.Movie("adios", 1990, "horror", "spanish");
var peli2 = new movie_1.Movie("hola", 2018, "action", "french");
var peli3 = new movie_1.Movie("PasuYRodri", 2021, "Spain", "horror");
var todasPelis = new Imdb([peli1, peli2, peli3]);
var objeto = new Imdb(null);
todasPelis.escribirEnFicheroJSON("nombre.json");
console.log(objeto.obtenerInstanciaIMDB("./nombre.json"));
// let archivo = "imdbBBDD.json";
// fs.writeFileSync(archivo,nuevo);
// let objeto = JSON.parse(retorno)
// console.log(objeto);
// console.log(retorno.peliculas[0].title);
