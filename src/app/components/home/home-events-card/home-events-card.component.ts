import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EventCardService } from '../../../services/events/event-card.service';
import { Event } from '../../../services/events/event.model';

@Component({
  selector: 'app-home-events-card',
  templateUrl: './home-events-card.component.html',
  styleUrls: ['./home-events-card.component.scss']
})
export class HomeEventsCardComponent implements OnInit {

  homeEvents : Observable<Event[]>|any=[];

  constructor( private eventSrv: EventCardService , private router: Router , private toastr:ToastrService) { }

  ngOnInit(): void {
   this.loadData();
  }
  loadData(){
    var firstThreeEvents: Observable<Event[]>|any = [];
    this.eventSrv.getAllEvents().subscribe(
      (res)=>{
        if(res.length < 3){
          this.homeEvents = res;
        }else{
        for(let i = 0 ; i<3 ; i++){
          firstThreeEvents.push(res[i]);
        }
        this.homeEvents = firstThreeEvents;
      }
        this.eventSrv.load.next(false);

      },
      (error)=>{
        console.log(error);
        this.toastr.error('لقد حدث خطأ أثناء تحميل الأحداث');
        this.toastr.show('حاول مرة اخري');
      }
    );

  }
  goTo(dest:string){
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest]);
  }

}
