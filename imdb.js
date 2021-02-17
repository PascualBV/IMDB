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
    return Professional;
}());
var p1 = new Professional("mike", 17, "male", 80, 178, "brown", "brown", "caucasic", false, "spanish", 1, "actor");
console.log(p1.printProfessional());
