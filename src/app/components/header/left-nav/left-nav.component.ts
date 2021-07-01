import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  login : boolean = false;
  admin: boolean = true;
  constructor(private loginSer: LoginServiceService , private router: Router) {
    this.loginSer.login.subscribe(
      (data:boolean)=>{
        this.login = data;
      }
    );
   }

  ngOnInit(): void {
  }

  goTo(dest:string){
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest]);
  }

  logOut(){
    this.loginSer.login.next(false);
    this.goTo('');
  }
}
