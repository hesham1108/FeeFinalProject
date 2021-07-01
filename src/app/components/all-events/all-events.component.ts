import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventCardService } from '../home/home-events-card/event-card.service';
import { Events } from '../home/home-events-card/event.model';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss'],
  providers:[EventCardService]
})
export class AllEventsComponent implements OnInit , OnDestroy {

  events: Events[] = [];
  numberOfPages:number| any ;
  eventsToDisplay: Events[] = [];
  divider:number = 6;
  private currsub:Subscription|any;


  constructor(private eventSer: EventCardService ) {
   this.currsub= this.eventSer.currentPage.subscribe(
      (data)=>{
          this.getdisplayedEvents(data);
      }
    );
   }

  ngOnInit(): void {
    this.events = this.eventSer.getAllEvents();

    this.numberOfPages = Math.ceil(this.eventSer.getAllEventsLength() / this.divider);

    this.getdisplayedEvents(1);

  }

  getdisplayedEvents(id:number = 1){
    this.eventsToDisplay=[];
    for(let i = (id*this.divider - this.divider) ; i < id*this.divider && i< this.eventSer.getAllEventsLength() ;  i++ ){
        this.eventsToDisplay.push(this.events[i]);
    }
    document.documentElement.scrollTop = 0;
    console.log(this.eventsToDisplay);
    console.log(id);
}
ngOnDestroy():void{
  this.currsub.unsubscribe();
}
}
