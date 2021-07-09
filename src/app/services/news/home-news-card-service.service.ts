import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Card } from './card.model';



@Injectable({
  providedIn: 'root'
})
export class HomeNewsCardServiceService  {

  nothing = new Subject<boolean>();
  allCards:Card[] = [];
  currentPage = new Subject<number>();
  currentPageNumber:number|any = 1;
  load = new Subject<boolean>() ;
  newsload = new Subject<boolean>();

  private baseUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/News';
  constructor(private http:HttpClient) { }



  getAllCards():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }


  getCardFromAllCards(id:number){
    return this.http.get(`${this.baseUrl}/${id}` , {
      observe:'response'
    });
  }


  postNews(obj:{id?:number , title:string , createdAt: string , imagePath:string , description:string}): Observable<Object> {

    return this.http.post(`${this.baseUrl}`,obj);

  }

  putNews(obj:{id?:number,title:string , createdAt: string , imagePath:string , description:string}):Observable<Object>{

   return this.http.put(`${this.baseUrl}`, obj);

  }



  deleteNews(id:number):Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }





}
