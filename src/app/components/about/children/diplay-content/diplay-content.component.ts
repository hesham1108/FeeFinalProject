import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../about-service/about-service.service';

@Component({
  selector: 'app-diplay-content',
  templateUrl: './diplay-content.component.html',
  styleUrls: ['./diplay-content.component.scss']
})
export class DiplayContentComponent implements OnInit {

  info : { title:string , content:string}|any ;
  constructor(private aboutSer: AboutService) { }

  ngOnInit(): void {
    this.info = this.aboutSer.getSingleInfo(0);
    this.aboutSer.obj.subscribe(
      (data)=>{
        this.info = data;
      }
    );
  }

}
