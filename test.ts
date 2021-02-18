import { Professional } from "./professional";
import { Movie } from "./movie";
import { Imdb } from "./imdb";


let pro1:Professional = new Professional ("mike",17,"male",80,178,"brown","brown","caucasic",false,"spanish",0,"actor");
let pro2:Professional = new Professional ("hanna",37,"female",60,170,"black","green","caucasic",false,"greek",2,"actress");
let pro3:Professional = new Professional ("louis",29,"male",77,180,"red","blue","caucasic",false,"mexican",0,"writer");
let pro4:Professional = new Professional ("mao cao", 67, "action", 73, 150, "brown", "blue","asian",false,"chienese",1,"actor")
let pro5:Professional = new Professional ("pepe", 42, "horror", 89,183,"black","brown","spanish",true,"spanish",0,"writer")
let pro7:Professional = new Professional ("mark",78,"male",90,190,"brown","brown","caucasic",true,"deutch",3,"director");
let pro8:Professional = new Professional ("eva",54,"female",65,170,"red","green","caucasic",false,"russian",1,"director");
let pro9:Professional = new Professional ("james",42,"male",80,183,"black","blue","caucasic",false,"bosnian",0,"actor");

// console.log(pro1.printProfessional());
// console.log(pro2.printProfessional());
// console.log(pro3.printProfessional());

let peli1:Movie = new Movie ("PasuYRodri",2021,"Spain","horror");
let peli2:Movie = new Movie ("adios", 1990,"horror", "spanish")
let peli3:Movie = new Movie ("hola", 2018,"action", "french")

peli1.platform = "TV"
peli1.isMCU = false
peli1.mainCharacterName = pro2.getName();
peli1.distributor = "HBO";
peli1.producer = "Disney";
peli1.language = "french";
peli1.writer = pro5
peli1.director= pro7
peli1.actors= [pro9,pro4,pro1];

// console.log (peli1.printMovie());

peli2.platform = "CS"
peli2.isMCU = false
peli2.mainCharacterName = pro1.getName();
peli2.distributor = "SONY";
peli2.producer = "ABC";
peli2.language = "german";
peli2.writer = pro3;
peli2.director= pro7;
peli2.actors = [pro1,pro2,pro9];

// console.log (peli2.printMovie());

peli3.platform = "netflix"
peli3.isMCU = true
peli3.mainCharacterName = pro9.getName()
peli3.distributor = "SONY";
peli3.producer = "FOX";
peli3.language = "german";
peli3.writer = pro5;
peli3.director= pro7
peli3.actors = [pro1,pro2,pro4];

// console.log (peli3.printMovie());

let nuestrasPelis = [peli1, peli2, peli3]
let todasPelis:Imdb = new Imdb (nuestrasPelis)

console.log(todasPelis.peliculas[0]);
