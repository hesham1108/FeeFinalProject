import { Component, OnInit } from '@angular/core';
import { EventCardService } from 'src/app/services/events/event-card.service';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  eventload:boolean = true;
  newsload:boolean = true;
  constructor(private eventSer: EventCardService , private newsSer: HomeNewsCardServiceService) {

   }

  ngOnInit(): void {
    this.eventSer.load.subscribe(
      (data)=>{
        this.eventload = data;
        console.log('event load = ',data);

      }
    );
    this.newsSer.newsload.subscribe(
      (data)=>{
        this.newsload = data;
        console.log('news load = ',data);
      }
    );
  }



}
