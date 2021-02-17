"use strict";
exports.__esModule = true;
var imdb_1 = require("./imdb");
var pro1 = new imdb_1.Professional("mike", 17, "male", 80, 178, "brown", "brown", "caucasic", false, "spanish", 0, "actor");
var pro2 = new imdb_1.Professional("hanna", 37, "female", 60, 170, "black", "green", "caucasic", false, "greek", 2, "actress");
var pro3 = new imdb_1.Professional("louis", 29, "male", 77, 180, "red", "blue", "caucasic", false, "mexican", 0, "cameraman");
console.log(pro1.printProfessional());
console.log(pro2.printProfessional());
console.log(pro3.printProfessional());
