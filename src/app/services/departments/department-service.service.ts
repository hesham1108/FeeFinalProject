import { HttpClient, HttpHeaders } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Department } from "./department.model";

@Injectable({
  providedIn:'root'
})

export class DepartmentService{

  loadDep = new Subject<boolean>();
  departments:Observable<Department[]>|any=[];
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });
  private departmentUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Departments';
  private depLabUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/DepartmentLap';

  private depCouncil = 'http://ahmed1500019-001-site1.dtempurl.com/api/DepartmentReport';

  constructor(private http:HttpClient){}
  // Council
  getAllDepCouncils():Observable<any>{
    return this.http.get(`${this.depCouncil}`);
  }
  getSingleDepCouncil(id:number):Observable<any>{
    return this.http.get(`${this.depCouncil}/${id}`);
  }
  postDepCouncil(obj:{id?:number,title:string,details:string,departmentID:number}|Object):Observable<Object>{
    return this.http.post(`${this.depCouncil}`, obj, { headers: this.headers });
  }
  putDepCouncil(obj:{id?:number,title:string,details:string,departmentID:number}|Object):Observable<Object>{
    return this.http.put(`${this.depCouncil}`, obj, { headers: this.headers });
  }
  deleteDepCouncil(id:number):Observable<any> {
    return this.http.delete(`${this.depCouncil}/${id}`, { headers: this.headers });
  }

  // Labs
  getAllDepLabs():Observable<any>{
    return this.http.get(`${this.depLabUrl}`);
  }
  getSingleDepLap(id:number):Observable<any>{
    return this.http.get(`${this.depLabUrl}/${id}`);
  }
  postDepLab(obj:{id?:number,name:string,roomNum:number,description:string,departmentId:number}|Object):Observable<Object>{
    return this.http.post(`${this.depLabUrl}`, obj, { headers: this.headers });
  }
  putDepLab(obj:{id?:number,name:string,roomNum:number,description:string,departmentId:number}|Object):Observable<Object>{
    return this.http.put(`${this.depLabUrl}`, obj, { headers: this.headers });
  }
  deleteDepLab(id:number):Observable<any> {
    return this.http.delete(`${this.depLabUrl}/${id}`, { headers: this.headers });
  }
  // Departments
  getAllDepartments():Observable<any>{
    return this.http.get(`${this.departmentUrl}`);
  }
  getSingleDepartment(id:number): Observable<any>{
    return this.http.get(`${this.departmentUrl}/${id}`);
  }
  postDepartment(obj:{id?:number , name:string , description: string , vision:string , massage:string , goals:string , headSpeech:string , image:string}|Object):Observable<Object>
  {
    return this.http.post(`${this.departmentUrl}`,obj, { headers: this.headers } );
  }
  putDepartment(obj:{id?:number,name:string , description: string , vision:string , massage:string , goals:string , headSpeech:string, image:string}|Object):Observable<Object>{
   return this.http.put(`${this.departmentUrl}`, obj, { headers: this.headers });
  }
  deleteDepartment(id:number):Observable<any> {
    return this.http.delete(`${this.departmentUrl}/${id}`, { headers: this.headers });
  }




}
