"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.printMovie = function () {
        var datos = [];
        for (var i = 0; i < this.actors.length; i++) {
            datos.push(this.actors[i].printProfessional());
        }
        return this.title + "," + this.releaseYear + "," + datos + "," + this.nationality + "," + this.director.printProfessional() + "," + this.writer.printProfessional() + "," + this.language + "," + this.platform + "," + this.isMCU + "," + this.mainCharacterName + "," + this.producer + "," + this.distributor + "," + this.genre;
    };
    return Movie;
}());
exports.Movie = Movie;
