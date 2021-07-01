import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router , private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  goTo(dest:string){
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest ],{relativeTo: this.route})
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
