import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  login = new Subject<boolean>() ;
  private loginUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/AuthManagement/Login';

  constructor(private http:HttpClient) { }

  postLogin(obj:{email:string , password:string}|Object):Observable<Object>{
    return this.http.post(`${this.loginUrl}`,obj);
  }
}
