import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventCardService } from 'src/app/services/events/event-card.service';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit {

  events:Observable<Event[]>|any = [];
  load:boolean = true;
  delete:boolean = false;

  constructor(private eventSer: EventCardService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.delete = false;
    document.documentElement.scrollTop = 0;
    this.eventSer.getAllEvents().subscribe(
      (res)=>{
        this.events = res;
        this.load = false;

      }
    );
  }
  editMyEvent(id:number){
    this.router.navigate(['dash/addEvent' , id]);
  }
  ondelete(){
    this.delete = true;
  }
  deleteMyEvent(id:number){
    document.documentElement.scrollTop = 0;
    this.load=true;
    this.eventSer.deleteEvent(id).subscribe(
      (res)=>{
        if(res){
          this.delete=false;
          this.reloadData();
        }
      }
    );
  }


  goTo(dest:string){
    this.router.navigate([dest]);
  }

  onCancel(){
    this.delete=false;
  }

}
