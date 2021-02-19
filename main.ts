import { Professional } from "./professional";
import { Movie } from "./movie";
import { Imdb } from "./imdb";
const readlineSync = require('readline-sync');

const title = readlineSync.question("Cual es el titulo de la pelicula?")
console.log("Titulo: " + title)

const realeaseYear = readlineSync.question("Cuando se estreno tu pelicula?")
console.log("Estreno: " + realeaseYear)

const nationality = readlineSync.question("Que nacionalidad tiene la pelicula?")
console.log("Nacionalidad: " + nationality)

const genero = readlineSync.question ("De que genero es?") 
console.log ("Género: "+genero);

let peliN:Movie = new Movie (title,realeaseYear,nationality,genero)
let objImbd:Imdb = new Imdb ([]);

objImbd = objImbd.obtenerInstanciaIMDB("imdbBBDD.json");

objImbd.peliculas.push(peliN);

// console.log (objImbd);

objImbd.escribirEnFicheroJSON("imdbBBDD.json");

// console.log(peliN);


