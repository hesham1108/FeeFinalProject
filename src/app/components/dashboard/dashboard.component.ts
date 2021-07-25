import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tokenValue :string|any;
  userId :string|any;
  nothing = true;
  admin:boolean|any;
  constructor(
    private router: Router ,
    private route: ActivatedRoute ,
    private newsSer: HomeNewsCardServiceService,
    private profileSer: ProfileService,
    private toastr:ToastrService,
    private logSer:LoginServiceService,
    private userSer:UserService
      ) {
        this.newsSer.nothing.subscribe(
          (data)=>{
            this.nothing = data;
            console.log(data);

          }
        );

      }

  ngOnInit(): void {

    this.tokenValue =  localStorage.getItem("token");

    if(this.tokenValue){
      this.userSer.getSingleUser(this.tokenValue).subscribe(
        (res)=>{
          if(res.roles.includes('Admin')||res.roles.includes('SuperAdmin')){
            this.closeleftmenu();
            if(this.router.url == '/dash'){
              this.newsSer.nothing.next(true);
            }else{
              this.newsSer.nothing.next(false);
            }

            this.newsSer.nothing.subscribe(
              (data)=>{

                this.nothing = data;
              }
          );
          }else{
            this.toastr.error('غير مسموح لك بالدخول هنا ');
            this.router.navigate(['']);
          }
        }
      )
     }else{
      this.toastr.error('غير مسموح لك بالدخول هنا ');
      this.router.navigate(['']);
    }
  }

  goTo(dest:string){
    this.closeleftmenu();
    this.newsSer.nothing.next(false);
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest ],{relativeTo: this.route})
  }
  goToOut(dest:string){
    this.closeleftmenu();
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest]);
  }
  openleftmenu(){
    var leftmenu:HTMLElement |any= document.getElementById('leftmenu');
    leftmenu.style.display = "block";
    var leftmenubtn: HTMLElement|any = document.getElementById('open');
    leftmenubtn.style.display ="none";
  }
  closeleftmenu(){
    var leftmenu:HTMLElement |any= document.getElementById('leftmenu');
    leftmenu.style.display = "none";
    var leftmenubtn: HTMLElement|any = document.getElementById('open');
    leftmenubtn.style.display ="block";
  }
  logOut(){
    this.profileSer.login.next(false);
    this.logSer.logout();
    this.router.navigate(['home']);
  }
  openRegisterForm(){
    this.closeleftmenu();
    this.toastr.success('تم فتح التسجيل بنجاح');
  }
  closeRegisterForm(){
    this.closeleftmenu();
    this.toastr.success('تم غلق التسجيل بنجاح');
  }

}
