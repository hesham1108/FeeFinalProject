import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  nothing = true;

  constructor(private router: Router , private route: ActivatedRoute , private newsSer: HomeNewsCardServiceService) {
    this.newsSer.nothing.subscribe(
      (data)=>{
        this.nothing = data;


      }
    );
   }

  ngOnInit(): void {

    console.log(this.router.url);
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
    this.newsSer.nothing.next(false);
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest ],{relativeTo: this.route})
  }
  goToOut(dest:string){
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest]);
  }
  openleftmenu(){
    var leftmenu:HTMLElement |any= document.getElementById('leftmenu');
    leftmenu.style.display = "block";
    var leftmenubtn: HTMLElement|any = document.getElementById('open');
    leftmenubtn.style.display ="none";
    console.log(leftmenu.style.display);

  }
  closeleftmenu(){
    var leftmenu:HTMLElement |any= document.getElementById('leftmenu');
    leftmenu.style.display = "none";
    var leftmenubtn: HTMLElement|any = document.getElementById('open');
    leftmenubtn.style.display ="block";
  }
}
