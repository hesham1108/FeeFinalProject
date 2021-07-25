import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/ContactUs';

  private postContactEmailUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/ContactUsEmail/UpdateContactEmail?email=';
  private getContactEmailUrl='http://ahmed1500019-001-site1.dtempurl.com/api/ContactUsEmail';
  constructor(private http : HttpClient) { }
  //contact email
  postEmail(email:string):Observable<Object>{
    return this.http.post(`${this.postContactEmailUrl}${email}`,{headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })});
  }
  getEmail():Observable<any>{
    return this.http.get(`${this.getContactEmailUrl}`, {headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })});
  }

  //contact
  postContact(obj:{email:string , subject:string , description:string}|Object):Observable<Object>{
   return this.http.post(`${this.contactUrl}`,obj);
  }
}
