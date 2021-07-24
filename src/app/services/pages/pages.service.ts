import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class PageService {

  private mainBarUrl ='http://ahmed1500019-001-site1.dtempurl.com/api/MainBar';
  private pageUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Pages';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });

  constructor(private http:HttpClient){}

  postMainBar(obj:{title:string }|Object):Observable<Object>{
    return this.http.post(`${this.mainBarUrl}`,obj , {headers:this.headers});
  }
  getMainBar():Observable<any>{
    return this.http.get(`${this.mainBarUrl}`,{headers:this.headers});
  }
  getSingleMainBar(id:number):Observable<any>{
    return this.http.get(`${this.mainBarUrl}/${id}`,{headers:this.headers})
  }
}
