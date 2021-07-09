import { Component, OnInit } from '@angular/core';
import { EventCardService } from './services/events/event-card.service';
import { HomeNewsCardServiceService } from './services/news/home-news-card-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FEE-TEST';
  load:boolean = true;
  constructor(private newSer: HomeNewsCardServiceService , private eventSer: EventCardService){
  }
  ngOnInit(){

  }
}
