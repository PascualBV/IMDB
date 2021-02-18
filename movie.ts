export class Movie {

    public title:string
    public releaseYear:number
    public actors:string
    public nationality:string
    public director:string
    public writer:string
    public languaje:string
    public platform:string
    public isMCU:string
    public mainCharacterName:string
    public producer:string
    public distributor:string
    public genre:string

    constructor(title:string, releaseYear:number, actors:string,
        nationality:string,director:string,writer:string, languaje:string, 
        platform:string, isMCU:string, mainCharacterName:string, producer:string,
        distributor:string,genre:string)
    {
    
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }

    public printMovie()
    {
        return `${this.title},${this.releaseYear},${this.actors},${this.nationality},${this.director},${this.writer},${this.languaje},${this.platform},${this.isMCU},${this.mainCharacterName},${this.producer},${this.distributor},${this.genre}`
    }



}