import {Professional} from "./professional";

export class Movie {
    obtenerInstanciaIMDB(arg0: string): any {
        throw new Error("Method not implemented.");
    }
    public title:string
    public releaseYear:number
    public actors:Professional []
    public nationality:string
    public director:Professional
    public writer:Professional
    public language:string
    public platform:string
    public isMCU:boolean
    public mainCharacterName:string
    public producer:string
    public distributor:string
    public genre:string
    constructor (title:string, releaseYear:number,nationality:string,genre:string)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    public printMovie()
    {
        let datos:string[] = [];

        for (let i = 0; i<this.actors.length; i++)
        {
            datos.push(this.actors[i].printProfessional());
        }
        return `${this.title},${this.releaseYear},${datos},${this.nationality},${this.director.printProfessional()},${this.writer.printProfessional()},${this.language},${this.platform},${this.isMCU},${this.mainCharacterName},${this.producer},${this.distributor},${this.genre}`
    }

}