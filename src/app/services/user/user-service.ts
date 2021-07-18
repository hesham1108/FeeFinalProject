import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn:'root'
})

export class UserService {

  private postiosnUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Position';
  constructor(private http:HttpClient){}

  getAllPostions():Observable<any>{
    return this.http.get(`${this.postiosnUrl}`);
  }
  getSinglePostion(id:number): Observable<any>{
    return this.http.get(`${this.postiosnUrl}/${id}`);
  }
  postPostion(obj:{id?:number , name:string }|Object):Observable<Object>
  {
    return this.http.post(`${this.postiosnUrl}`,obj );
  }
  putPostion(obj:{id?:number,name:string }|Object):Observable<Object>{
   return this.http.put(`${this.postiosnUrl}`, obj);
  }
  deletePostion(id:number):Observable<any> {
    return this.http.delete(`${this.postiosnUrl}/${id}`);
  }

}
