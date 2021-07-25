import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
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
  // get user by id
  private userByIdUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Users/GetSpecifcUser';
  // roles
  private roleUrl ='http://ahmed1500019-001-site1.dtempurl.com/api/Roles';
  // get permissions url
  private getPermissionsUrl ='http://ahmed1500019-001-site1.dtempurl.com/api/Roles/GetRolePermissions?roleId=';
  //post permission url
  private postPermissionsUrl='http://ahmed1500019-001-site1.dtempurl.com/api/Roles/ManagePermissions';

  constructor(private http:HttpClient){

  }
  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': `Bearer ${localStorage.getItem("token")}`
  // });
  //users
  getUsers():Observable<any>{
    return this.http.get(`${this.getUsersUrl}`,{headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }
  getUserByRoleID(id:string):Observable<any>{
    return this.http.get(`${this.specificUserUrl}/${id}`,{headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }

  getSingleUser(token:string):Observable<any>{
    return this.http.get(`${this.userByIdUrl}/${localStorage.getItem('userId')}`,{headers: new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })});
  }

  updateUser(obj:{
    arabicName:string,
    englishName:string,
    phone:string,
    academicNumber:string,
    departmentId:number,
    imagePath:string,
    dataOfBirth:string,
    about:string}|Object):Observable<Object>{
    return this.http.post(`${this.UpdateUserUrl}`,obj,{headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })})
  }




  //roles
  postRole(obj:{name:string}|Object):Observable<Object>{
    console.log(new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  }))
    return this.http.post(`${this.roleUrl}`,obj,{headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }

  getRoles():Observable<any>{
    console.log(new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  }))
    return this.http.get(`${this.roleUrl}`,{headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })})
  }

  //permissions
  getPermission(id:string):Observable<any>{
    return this.http.get(`${this.getPermissionsUrl}${id}`,{headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
  }
  postPermission(obj:{roleId:string , userClaims:string[] }|Object):Observable<Object>{
    return this.http.post(`${this.postPermissionsUrl}`,obj,{headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })})
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
  return this.http.post(`${this.registerUrl}`,obj , {headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })});
}


}
