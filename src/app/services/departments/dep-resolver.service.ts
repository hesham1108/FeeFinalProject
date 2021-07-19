import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DepartmentService } from "./department-service.service";

interface Department {
  id:number,
  name:string,
  description:string,
  vision:string,
  massage:string,
  goals:string,
  headSpeech:string
}
@Injectable({
  providedIn:'root'
})
export class DepResolver implements Resolve<Object>{

  constructor(private depSer:DepartmentService){}
  resolve(route:ActivatedRouteSnapshot , state:RouterStateSnapshot):Observable<Object>|Promise<Object>|Department{

    return this.depSer.getDep(+route.params['id']);

  }
}
