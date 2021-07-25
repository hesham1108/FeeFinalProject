import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class PageService {

  private mainBarUrl ='http://ahmed1500019-001-site1.dtempurl.com/api/MainBar';
  private pageUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Pages';
  private allpagsenyMainIdUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Pages/GetPageByMainBarId/0?mainPageId=';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });

  constructor(private http:HttpClient){}
  //mainBar
  postMainBar(obj:{title:string }|Object):Observable<Object>{
    return this.http.post(`${this.mainBarUrl}`,obj , {headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }
  putMainBar(obj:{id:number,title:string}|Object):Observable<Object>{
    return this.http.put(`${this.mainBarUrl}`,obj,{headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }
  getMainBar():Observable<any>{
    return this.http.get(`${this.mainBarUrl}`,{headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }
  getSingleMainBar(id:number):Observable<any>{
    return this.http.get(`${this.mainBarUrl}/${id}`,{headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })})
  }
  deleteMainBar(id:number):Observable<any> {
    return this.http.delete(`${this.mainBarUrl}/${id}`, { headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  }) });
  }

  //pages
  postPage(obj:{title:string , image:string , descriptions:string ,mainBarId:number}|Object):Observable<Object>{
    return this.http.post(`${this.pageUrl}`,obj , {headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }
  putPage(obj:{id:number,title:string, image:string , descriptions:string,mainBarId:number }|Object):Observable<Object>{
    return this.http.put(`${this.pageUrl}`,obj,{headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }
  getPages():Observable<any>{
    return this.http.get(`${this.pageUrl}`,{headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }
  getPage(id:number):Observable<any>{
    return this.http.get(`${this.pageUrl}/${id}`,{headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })})
  }
  deletePage(id:number):Observable<any> {
    return this.http.delete(`${this.pageUrl}/${id}`, { headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  }) });
  }

  getPagesbyMainId(id:number):Observable<any>{
    return this.http.get(`${this.allpagsenyMainIdUrl}${id}`,{headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }
}
