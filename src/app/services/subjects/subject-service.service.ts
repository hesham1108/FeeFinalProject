import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Subject } from "./subject.model";

@Injectable({
  providedIn:'root'
})

export class SubjectService {

  Subjects: Subject[] = [];
  private subjectUrl ='http://ahmed1500019-001-site1.dtempurl.com/api/Subject';
  private subDependUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/SubjectDepedance';
  constructor(private http: HttpClient){}

  //subjects
  getAllSubjects():Observable<any>{
    return this.http.get(`${this.subjectUrl}`);
  }
  getSingleSubject(id:number): Observable<any>{
    return this.http.get(`${this.subjectUrl}/${id}`);
  }
  postSubject(obj:{id?:number , name:string , codeEN: string , codeAR:string , numOfHours:number , maxDegree:number , minDegree:number ,content:string , departmentID:number}|Object):Observable<Object>
  {
    return this.http.post(`${this.subjectUrl}`,obj );
  }
  putSubject(obj:{id?:number , name:string , codeEN: string , codeAR:string , numOfHours:number , maxDegree:number , minDegree:number ,content:string , departmentID:number}|Object):Observable<Object>{
   return this.http.put(`${this.subjectUrl}`, obj);
  }
  deleteSubject(id:number):Observable<any> {
    return this.http.delete(`${this.subjectUrl}/${id}`);
  }
  //subject dependance
  getAllSubDepends():Observable<any>{
    return this.http.get(`${this.subDependUrl}`);
  }
  getSingleSubDepend(sid:number , did:number): Observable<any>{
    return this.http.get(`${this.subDependUrl}/${sid}/${did}`);
  }
  postSubDepend(obj:{subjectID:number , dependID:number , subject:any , dependOn:any }|Object):Observable<Object>
  {
    return this.http.post(`${this.subDependUrl}`,obj );
  }
  putSubDepend(obj:{subjectID:number , dependID:number }|Object):Observable<Object>{
   return this.http.put(`${this.subDependUrl}`, obj);
  }
  deleteSubDepend(id:number):Observable<any> {
    return this.http.delete(`${this.subDependUrl}/${id}`);
  }
}
