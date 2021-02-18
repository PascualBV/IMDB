import { Professional } from "./imdb";

let pro1:Professional = new Professional ("mike",17,"male",80,178,"brown","brown","caucasic",false,"spanish",0,"actor");
let pro2:Professional = new Professional ("hanna",37,"female",60,170,"black","green","caucasic",false,"greek",2,"actress");
let pro3:Professional = new Professional ("louis",29,"male",77,180,"red","blue","caucasic",false,"mexican",0,"cameraman");
let pro4:Professional = new Professional ("mao cao", 67, "action", 73, 150, "brown", "blue","asian",false,"chienese",1,"producer")
let pro5:Professional = new Professional ("pepe", 42, "horror", 89,183,"black","brown","spanish",true,"spanish",0,"distributor")
let pro7:Professional = new Professional ("mark",78,"male",90,190,"brown","brown","caucasic",true,"deutch",3,"director");
let pro8:Professional = new Professional ("eva",54,"female",65,170,"red","green","caucasic",false,"russian",1,"producer");
let pro9:Professional = new Professional ("james",42,"male",80,183,"black","blue","caucasic",false,"bosnian",0,"distributor");
console.log(pro1.printProfessional());
console.log(pro2.printProfessional());
console.log(pro3.printProfessional());
