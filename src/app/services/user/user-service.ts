import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn:'root'
})

export class UserService {

  private postiosnUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Position';
  private rolrUrl ='http://ahmed1500019-001-site1.dtempurl.com/api/Roles';
  private registerUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/AuthManagement/Register';
  private getUsersUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Users/GetUsers';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });
  constructor(private http:HttpClient){}

  //postions
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

  // Role
  getRoles():Observable<any>{
    return this.http.get(`${this.rolrUrl}`);
  }

  //user registration
postUserReg(obj:Object|{
  name:string,
  arabicName:string,
  englishName:string,
  phone:string,
  roleId:string,
  academicNumber:string,
  departmentId:number,
  email:string,
  password:string,
  imagePath:string,
  dataOfBirth:string,
  about:string
}):Observable<Object>{
  return this.http.post(`${this.registerUrl}`,obj , {headers:this.headers});
}

//get users
getUsers():Observable<any>{
  return this.http.get(`${this.getUsersUrl}`,{headers:this.headers});
}


//privilage
postPrivilage(obj:{name:string}|Object):Observable<Object>{
  return this.http.post(`${this.rolrUrl}`,obj,{headers:this.headers});
}

getPrivilage():Observable<any>{
  return this.http.get(`${this.rolrUrl}`,{headers:this.headers})
}
}
