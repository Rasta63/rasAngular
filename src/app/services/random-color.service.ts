import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomColorService {
  colors :Array<string>;
  constructor() {
    this.colors = ['blue','red',"green",'orange'];
   }
   changeColor() : string{
     let nA = Math.floor(Math.random() * this.colors.length);//chiffre aléatoire compris entre 0 et la taille du tableau
    return this.colors[nA];
   }
}
