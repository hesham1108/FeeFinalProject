import { HttpClient ,HttpHeaders} from '@angular/common/http';

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
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })
  private baseUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/News';
  constructor(private http:HttpClient) { }
  getAllCards():Observable<any>{
  return this.http.get(this.baseUrl, { headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  }) })
  }
  getCardFromAllCards(id:number){
    return this.http.get(`${this.baseUrl}/${id}` , {observe:'response' , headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }
  postNews(obj:{ title:string , imagePath:string , description:string , newsSubImages:any[]}): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,obj , {headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }
  putNews(obj:{id?:number,title:string ,  imagePath:string , description:string}):Observable<Object>{
   return this.http.put(`${this.baseUrl}`, obj, {headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }
  deleteNews(id:number):Observable<any> {
    console.log(localStorage.getItem("token"))
    return this.http.delete(`${this.baseUrl}/${id}`, {headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }





}
