import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  login = new Subject<boolean>() ;
  role = new Subject<boolean>() ;
  constructor() { }
}
