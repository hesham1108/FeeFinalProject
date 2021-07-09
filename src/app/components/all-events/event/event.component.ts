import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { EventCardService } from '../../../services/events/event-card.service';
import { Event } from '../../../services/events/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  eventsLength:number | any;
  id:number|any;
  event:Event|any;
  admin:boolean = true;
  load:boolean = true;
  constructor(private eventSer: EventCardService , private route: ActivatedRoute , private router: Router , private newsSer : HomeNewsCardServiceService) { }

  ngOnInit(): void {
    // this.eventsLength = this.eventSer.getAllEventsLength();
    this.route.params.subscribe(
      (p: Params) => {
        this.id = +p['id'];
        this.eventSer.getEventFromAllEvents(this.id).subscribe(
          (data)=>{
            this.event = data;
            this.load = false;
          }
        );
      }
    );
  }

  goTo(dest:string){
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest]);
  }
  // goToEvent(i: number){
  //   this.id += i;
  //   if(this.id < 0 ){
  //       this.id = this.eventsLength-1;
  //       console.log(this.id);

  //   }else if( this.id == this.eventsLength){
  //     this.id = 0;
  //     console.log(this.id);

  //   }
  //   document.documentElement.scrollTop = 0;
  //   this.router.navigate(['events/',this.id]);
  // }
  goToEdit(dest:string){
    this.newsSer.nothing.next(false);
    this.newsSer.nothing.subscribe(
      (data)=>{
        console.log(data);

      }
    )
    this.router.navigate([dest , this.event.id]);
  }
}
