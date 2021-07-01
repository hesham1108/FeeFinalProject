import { Component, OnInit } from '@angular/core';
import { EventCardService } from './event-card.service';
import { Events } from './event.model';

@Component({
  selector: 'app-home-events-card',
  templateUrl: './home-events-card.component.html',
  styleUrls: ['./home-events-card.component.scss']
})
export class HomeEventsCardComponent implements OnInit {

  events : Events[]=[];
  constructor( private eventSrv: EventCardService ) { }

  ngOnInit(): void {
    this.events = this.eventSrv.getHomeEvents();
  }


}
