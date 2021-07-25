import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

class Permissions {
  canGoToRoute(role:string[]):boolean{
    if(role.includes('SuperAdmin') || role.includes("Admin")){
      return true;
    }else{
      return false;
    }
  }
}
@Injectable({
  providedIn:'root'
})
export class AuthenticationService implements CanActivate{

  constructor(private permission:Permissions ){}
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean{
    // JSON.parse(atob(authToken.split('.')[1]))

    return this.permission.canGoToRoute(
      // JSON.parse(atob(localStorage.getItem("token")?.split('.')[1])).role
        []
      )

  }

}
