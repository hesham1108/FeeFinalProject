import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Department } from "./department.model";

@Injectable({
  providedIn:'root'
})

export class DepartmentService{

  departments:Observable<Department[]>|any=[];
  private baseUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Departments';
  private depLabUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/DepartmentLap';
  private depCouncil = 'http://ahmed1500019-001-site1.dtempurl.com/api/DepartmentReport';

  constructor(private http:HttpClient){}

  // Departments

  getAllDepartments():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  getSingleDepartment(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  postDepartment(obj:{id?:number , name:string , description: string , vision:string , message:string , goals:string , headSpeech:string}|Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`,obj );
  }
  putDepartment(obj:{id?:number,name:string , description: string , vision:string , message:string , goals:string , headSpeech:string}|Object):Observable<Object>{
   return this.http.put(`${this.baseUrl}`, obj);
  }
  deleteDepartment(id:number):Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // Labs

  getAllDepLabs():Observable<any>{
    return this.http.get(`${this.depLabUrl}`);
  }
  getSingleDepLap(id:number):Observable<any>{
    return this.http.get(`${this.depLabUrl}/${id}`);
  }
  postDepLab(obj:{id?:number,name:string,roomNum:number,description:string,departmentId:number}|Object):Observable<Object>{
    return this.http.post(`${this.depLabUrl}`, obj);
  }
  putDepLab(obj:{id?:number,name:string,roomNum:number,description:string,departmentId:number}|Object):Observable<Object>{
    return this.http.put(`${this.depLabUrl}`, obj);
  }
  deleteDepLab(id:number):Observable<any> {
    return this.http.delete(`${this.depLabUrl}/${id}`);
  }

  // Council

  getAllDepCouncils():Observable<any>{
    return this.http.get(`${this.depCouncil}`);
  }
  getSingleDepCouncil(id:number):Observable<any>{
    return this.http.get(`${this.depCouncil}/${id}`);
  }
  postDepCouncil(obj:{id?:number,title:string,details:string,departmentID:number}|Object):Observable<Object>{
    return this.http.post(`${this.depCouncil}`, obj);
  }
  putDepCouncil(obj:{id?:number,title:string,details:string,departmentID:number}|Object):Observable<Object>{
    return this.http.put(`${this.depCouncil}`, obj);
  }
  deleteDepCouncil(id:number):Observable<any> {
    return this.http.delete(`${this.depCouncil}/${id}`);
  }


}
