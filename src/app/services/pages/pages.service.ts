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
  //mainBar
  postMainBar(obj:{title:string }|Object):Observable<Object>{
    return this.http.post(`${this.mainBarUrl}`,obj , {headers:this.headers});
  }
  putMainBar(obj:{id:number,title:string}|Object):Observable<Object>{
    return this.http.put(`${this.mainBarUrl}`,obj,{headers:this.headers});
  }
  getMainBar():Observable<any>{
    return this.http.get(`${this.mainBarUrl}`,{headers:this.headers});
  }
  getSingleMainBar(id:number):Observable<any>{
    return this.http.get(`${this.mainBarUrl}/${id}`,{headers:this.headers})
  }
  deleteMainBar(id:number):Observable<any> {
    return this.http.delete(`${this.mainBarUrl}/${id}`, { headers: this.headers });
  }

  //pages
  postPage(obj:{title:string , image:string , descriptions:string ,mainBarId:number}|Object):Observable<Object>{
    return this.http.post(`${this.pageUrl}`,obj , {headers:this.headers});
  }
  putPage(obj:{id:number,title:string, image:string , descriptions:string,mainBarId:number }|Object):Observable<Object>{
    return this.http.put(`${this.pageUrl}`,obj,{headers:this.headers});
  }
  getPages():Observable<any>{
    return this.http.get(`${this.pageUrl}`,{headers:this.headers});
  }
  getPage(id:number):Observable<any>{
    return this.http.get(`${this.pageUrl}/${id}`,{headers:this.headers})
  }
  deletePage(id:number):Observable<any> {
    return this.http.delete(`${this.pageUrl}/${id}`, { headers: this.headers });
  }

}
