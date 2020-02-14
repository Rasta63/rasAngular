import { DomSanitizer } from '@angular/platform-browser';

export class Article {
    id : number=0;
    titre : string;
    contenu : string;
    image: string;
    category : string;
    dateCreated : Date;
    constructor(id=null,titre=null,contenu=null,image=null,date=null, category = null){
        this.category = category;
        this.id=id;
        this.titre=titre;
        this.contenu=contenu;
        this.image=image;
        this.dateCreated=date;
    }
}
