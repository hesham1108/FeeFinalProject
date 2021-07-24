import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/ContactUs';

  private postContactEmailUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/ContactUsEmail/UpdateContactEmail';
  private getContactEmailUrl='http://ahmed1500019-001-site1.dtempurl.com/api/ContactUsEmail';
  constructor(private http : HttpClient) { }
  //contact email
  postEmail(obj:{email:string}|Object):Observable<Object>{
    return this.http.post(`${this.postContactEmailUrl}`,obj);
  }
  getEmail():Observable<any>{
    return this.http.get(`${this.getContactEmailUrl}`);
  }

  //contact
  postContact(obj:{email:string , subject:string , description:string}|Object):Observable<Object>{
   return this.http.post(`${this.contactUrl}`,obj);
  }
}
