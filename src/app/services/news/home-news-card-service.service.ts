import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from './card.model';



@Injectable({
  providedIn: 'root'
})
export class HomeNewsCardServiceService  {


  allCards:Card[] = [];
  currentPage = new Subject<number>();
  currentPageNumber:number|any = 1;
  load = new Subject<boolean>() ;
  constructor(private http:HttpClient) { }


  fetchData(){
    const tempArray = [];
    this.http.get<Card[]>('http://ahmed1500019-001-site1.dtempurl.com/api/News')
    .subscribe(
     (data:Card[])=> {
      for(let i in data){
        if(data.hasOwnProperty(i)){
          this.allCards.push(data[i]);
          this.load.next(true);
          }
        }
      }
    );
  }



  getallCards(){
    return this.allCards;
  }

  getCardFromAllCards(id:number){
    return this.http.get(`http://ahmed1500019-001-site1.dtempurl.com/api/News/${id}` , {
      observe:'response'
    });
  }
  getallCardsLength(){
    return this.allCards.length;
  }

  postNews(obj:{id?:number , title:string , createdAt: string , imagePath:string , description:string}){
    return this.http.post('http://ahmed1500019-001-site1.dtempurl.com/api/News',obj);
  }

  putNews(obj:{id?:number,title:string , createdAt: string , imagePath:string , description:string}){
   return this.http.put(`http://ahmed1500019-001-site1.dtempurl.com/api/News`, obj);

  }
  deleteNews(id:number){
    return this.http.delete(`http://ahmed1500019-001-site1.dtempurl.com/api/News/${id}`);
  }
  // addNews(card: Card){
  //   this.allCards.push(card);
  // }
}
