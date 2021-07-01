import { Component, Input, OnInit } from '@angular/core';
import { AboutService } from '../../about-service/about-service.service';


@Component({
  selector: 'app-about-tabs',
  templateUrl: './about-tabs.component.html',
  styleUrls: ['./about-tabs.component.scss']
})
export class AboutTabsComponent implements OnInit {
  @Input() tab: {title:string , content:string}|any ;

  currentTab:{title:string , content:string}|any;

  constructor( private aboutSer: AboutService) {
    this.aboutSer.obj.subscribe(
      (data)=>{
        this.currentTab = data;
      }
    );
   }


  ngOnInit(): void {
    this.currentTab = this.aboutSer.getSingleInfo(0);
  }

  goTo(tab:{title:string , content:string}){
    this.aboutSer.obj.emit(tab);
  }

}
