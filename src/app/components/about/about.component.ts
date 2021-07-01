import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfService } from 'src/app/services/prof/prof-service.service';
import { ProfModel } from 'src/app/services/prof/prof.model';
import { AboutService } from './about-service/about-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers:[AboutService ],

})
export class AboutComponent implements OnInit {

  tabs: any = [
  ];
  ameed : ProfModel|any ;
  constructor(private router: Router, private aboutSer: AboutService , private profSer: ProfService) { }

  ngOnInit(): void {
    this.tabs = this.aboutSer.getInfo();
    this.ameed = this.profSer.getProfByPosition('عميد');
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }

  goToProfile(id:number){
    document.documentElement.scrollTop = 0;
    this.router.navigate(['prof/',id]);
  }
}
