import { Component, OnInit } from '@angular/core';
import { EventCardService } from '../../../services/events/event-card.service';
import { Event } from '../../../services/events/event.model';

@Component({
  selector: 'app-home-events-card',
  templateUrl: './home-events-card.component.html',
  styleUrls: ['./home-events-card.component.scss']
})
export class HomeEventsCardComponent implements OnInit {

  events : Event[]=[];
  constructor( private eventSrv: EventCardService ) { }

  ngOnInit(): void {
    this.events = this.eventSrv.getHomeEvents();
  }


}
