import { Professional } from "./imdb";

let pro1:Professional = new Professional ("mike",17,"male",80,178,"brown","brown","caucasic",false,"spanish",0,"actor");
let pro2:Professional = new Professional ("hanna",37,"female",60,170,"black","green","caucasic",false,"greek",2,"actress");
let pro3:Professional = new Professional ("louis",29,"male",77,180,"red","blue","caucasic",false,"mexican",0,"cameraman");

console.log(pro1.printProfessional());
console.log(pro2.printProfessional());
console.log(pro3.printProfessional());
