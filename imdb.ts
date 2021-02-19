import { Movie } from "./movie";

export class Imdb
    {

    public peliculas:Movie[];

    constructor(peliculas:Movie[])

    {
        this.peliculas = peliculas
    }
    
    public printMovie()
    {
        console.log(this.peliculas)
    }

    public escribirEnFicheroJSON (nombreFichero:string)
    {
        const fs = require("fs");
        let nuevo = JSON.stringify(this);
        fs.writeFileSync(nombreFichero,nuevo);
    }

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb
    {
        const fs = require("fs");
        // let retorno = fs.readFileSync(nombreFichero, "utf-8");
        // let fichero = JSON.parse(retorno)
        // return fichero;
        let vacio:Imdb = new Imdb ([]);
        fs.readFileSync (nombreFichero);
        vacio.peliculas=JSON.parse(fs.readFileSync(nombreFichero)).peliculas
        return vacio;

    }
}


let peli1:Movie = new Movie ("adios", 1990,"horror", "spanish")
let peli2:Movie = new Movie ("hola", 2018,"action", "french")
let peli3:Movie = new Movie ("PasuYRodri",2021,"Spain","horror");
let todasPelis:Imdb = new Imdb ([peli1, peli2, peli3])
let objeto:Imdb = new Imdb (null);

todasPelis.escribirEnFicheroJSON("nombre.json");
console.log (objeto.obtenerInstanciaIMDB("./nombre.json"))

// let archivo = "imdbBBDD.json";

// fs.writeFileSync(archivo,nuevo);

// let objeto = JSON.parse(retorno)

// console.log(objeto);
// console.log(retorno.peliculas[0].title);
