import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  nothing = true;
  admin:boolean|any;
  constructor(
    private router: Router ,
    private route: ActivatedRoute ,
    private newsSer: HomeNewsCardServiceService,
    private profileSer: ProfileService,
    private toastr:ToastrService
      ) {
        this.newsSer.nothing.subscribe(
          (data)=>{
            this.nothing = data;
            console.log(data);

          }
        );

      }

  ngOnInit(): void {
    this.profileSer.role.subscribe(
      (data)=>{
        console.log(data);
        if(data){
          console.log('data from true');
          this.admin = true;
          console.log('admin =',this.admin);

        }else{
          // this.router.navigate(['notfound']);
          this.admin=false;
          console.log('admin =',this.admin);
          console.log('data from false');
        }
      }
    );
    console.log(this.admin);

    // this.closeleftmenu();
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
  goToTable(dest:string , q:string){
    this.router.navigate([dest],{queryParams:{type:q}});
  }
}
