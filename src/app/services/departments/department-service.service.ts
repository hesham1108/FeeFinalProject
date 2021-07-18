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

  constructor(private http:HttpClient){}

  getAllDepartments():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getSingleDepartment(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  postDepartment(obj:{id?:number , name:string , description: string , vision:string , message:string , goals:string , headSpeech:string}|Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`,obj);
  }

  putDepartment(obj:{id?:number,name:string , description: string , vision:string , message:string , goals:string , headSpeech:string}|Object):Observable<Object>{
   return this.http.put(`${this.baseUrl}`, obj);
  }


  deleteDepartment(id:number):Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }


}
