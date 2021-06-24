import { Injectable } from '@angular/core';

import './card.model';

@Injectable({
  providedIn: 'root'
})
export class HomeNewsCardServiceService {

  cards: Card[]= [
    new Card( ' hesham ' ,  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg' , ' asdklaslkfj lasdf ' , ''),
    new Card( ' MOFA ' ,  ' ' , ' asdklaslkfj lasdf ' , ''),
    new Card( ' badbad ' ,  ' ' , ' asdklaslkfj lasdf ' , ''),
    new Card( ' hadeer ' ,  ' ' , ' asdklaslkfjlasdf ' , ''),
  ] ;
  constructor() { }

  getCards(){
    return this.cards;
  }
}
