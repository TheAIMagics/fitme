export class Data{
    name:string;
    author: string;
    description : string;
    club : string;
    partners : string;
    members : string;
    imagePath : string;
    
    constructor(name:string,author: string, description : string,club : string,
        partners : string, members : string, imagePath : string){
        this.name=name;
        this.author = author;
        this.description = description;
        this.club = club ;
        this.partners = partners;
        this.members = members;
        this.imagePath = imagePath;
    }

}