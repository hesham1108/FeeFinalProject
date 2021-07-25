import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn:'root'
})

export class UserService {


  private registerUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/AuthManagement/Register';
  //get all users
  private getUsersUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Users/GetUsers';
  //get specific user by id
  private specificUserUrl='http://ahmed1500019-001-site1.dtempurl.com/api/Users/GetSpecifcUser';
  //get user by role id
  private userByRoleUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Users/GetUsersByRoleId';
  // get staff uers
  private staffUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Users/GetStaff';
  // get stuedent users
  private studentUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Users/GetStudents';
  //update user
  private UpdateUserUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Users/UpdateUser';
  // roles
  private roleUrl ='http://ahmed1500019-001-site1.dtempurl.com/api/Roles';
  // get permissions url
  private getPermissionsUrl ='http://ahmed1500019-001-site1.dtempurl.com/api/Roles/GetRolePermissions?roleId=';
  //post permission url
  private postPermissionsUrl='http://ahmed1500019-001-site1.dtempurl.com/api/Roles/ManagePermissions';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });

  constructor(private http:HttpClient){}
  //users
  getUsers():Observable<any>{
    return this.http.get(`${this.getUsersUrl}`,{headers:this.headers});
  }
  getUserByID(id:number):Observable<any>{
    return this.http.get(`${this.specificUserUrl}/${id}`,{headers:this.headers});
  }




  //roles
  postRole(obj:{name:string}|Object):Observable<Object>{
    return this.http.post(`${this.roleUrl}`,obj,{headers:this.headers});
  }

  getRoles():Observable<any>{
    return this.http.get(`${this.roleUrl}`,{headers:this.headers})
  }

  //permissions
  getPermission(id:string):Observable<any>{
    return this.http.get(`${this.getPermissionsUrl}${id}`,{headers:this.headers});
  }
  postPermission(obj:{roleId:string , userClaims:string[] }|Object):Observable<Object>{
    return this.http.post(`${this.postPermissionsUrl}`,obj,{headers:this.headers})
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


}
