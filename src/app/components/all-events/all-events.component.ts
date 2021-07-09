import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EventCardService } from '../../services/events/event-card.service';
import { Event } from '../../services/events/event.model';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss'],
  providers:[]
})
export class AllEventsComponent implements OnInit , OnDestroy {

  events: Observable<Event[]>|any= [];
  numberOfPages:number| any ;
  eventsToDisplay:Event[] = [];
  divider:number = 6;
  private currsub:Subscription|any;

  load = true;


  constructor(private eventSer: EventCardService ) {


    this.currsub = this.eventSer.currentPage.subscribe(
      (data)=>{
          this.getdisplayedEvents(data);
      }
    );

   }

  ngOnInit(): void {
    // console.log(this.numberOfPages);

    this.loadData();
  }

  loadData(){
    this.eventSer.getAllEvents().subscribe(
      (res)=>{
        this.events = res;
        this.numberOfPages = Math.ceil(this.events.length / this.divider);
        this.getdisplayedEvents(1);
        this.load = false;
      }
    );
  }

  getdisplayedEvents(id:number = 1){
    this.eventsToDisplay=[];
    for(let i = (id*this.divider - this.divider) ; i < id*this.divider && i< this.events.length ;  i++ ){
        this.eventsToDisplay.push(this.events[i]);

    }
    document.documentElement.scrollTop = 0;
}


ngOnDestroy():void{
  this.currsub.unsubscribe();
}
}
