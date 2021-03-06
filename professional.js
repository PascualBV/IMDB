"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.printProfessional = function () {
        return this.name + "," + this.age + "," + this.genre + "," + this.weight + "," + this.height + "," + this.hairColor + "," + this.eyeColor + "," + this.race + "," + this.isRetired + "," + this.nationality + "," + this.oscarsNumber + "," + this.profession;
    };
    Professional.prototype.setName = function (name) {
        this.name = name;
    };
    Professional.prototype.getName = function () {
        return this.name;
    };
    return Professional;
}());
exports.Professional = Professional;
