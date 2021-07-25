import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  tokenValue = localStorage.getItem("token");
  login : boolean = false;
  admin: boolean = true;
  constructor(
     private router: Router ,
      private route: ActivatedRoute,
      private profileSer: ProfileService
      ) {}

  ngOnInit(): void {

    this.profileSer.login.subscribe(
      (data:boolean)=>{
        if(this.tokenValue){
          this.login = data;
        }
      }
    );
    this.profileSer.role.subscribe(
      (data)=>{
        console.log('role : ',data);

        if(data){
          this.admin = true;
        }else{
          this.admin = false;
        }
      }
    );
  }

  goTo(dest:string){
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest]);
  }

  logOut(){
    this.profileSer.login.next(false);
    this.goTo('home');
  }
}
