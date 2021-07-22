import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'userFilter'
})

export class UserFilter implements PipeTransform{
  transform(users:any , searchVal:any):any{
    if(!searchVal) return users;

    return users.filter(
      (u:any)=>
          u.userName.toLowerCase().indexOf(searchVal.toLowerCase()) > -1 ||
          u.email.toLowerCase().indexOf(searchVal.toLowerCase())>-1 ||
          u.roles.toString().toLowerCase().indexOf(searchVal.toLowerCase())>-1
      )

  }
  }
