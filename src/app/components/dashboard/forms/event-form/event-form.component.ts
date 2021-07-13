import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventCardService } from 'src/app/services/events/event-card.service';
import { Event } from 'src/app/services/events/event.model';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit , OnDestroy {

  eventForm:any;
  id:number|any;
  edit:boolean =false;
  event:Event|any;
  load:boolean = true;
  delete:boolean = false;
  constructor(
    private fb:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private eventSer: EventCardService,
    private newsSer: HomeNewsCardServiceService
  ) {
    this.eventForm = this.fb.group({
      title: [null , [Validators.required , Validators.maxLength(50)]],
      date:[null , [Validators.required ]],
      imagePath:[null,[Validators.required]],
      description:[null,[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit = true;
          this.id = +data['id'];
          this.eventSer.getEventFromAllEvents(this.id).subscribe(
            (res)=> {
                this.event = res;
                this.eventForm.get('title').setValue(this.event.title) ;
                this.eventForm.get('date').setValue(this.event.createdAt);
                this.eventForm.get('description').setValue(this.event.description);
                this.eventForm.get('imagePath').setValue(this.event.imagePath);
                this.load=false;
            }
          );
          // var recDate =new Date(this.event.createdAt) ;
          // var validDate = recDate.getDate()+"/"+recDate.getMonth()+"/"+recDate.getFullYear();
        }else{

          this.edit = false;
          this.load=false;
        }
      }
    );
  }

  onSubmit(){

    let dataToPost:{id?:number,title:string , createdAt: string , imagePath:string , description:string} = {
      id : this.id,
      title : this.eventForm.get('title').value,
      createdAt: this.eventForm.get('date').value,
      imagePath: this.eventForm.get('imagePath').value,
      description : this.eventForm.get('description').value,
    };

    console.log(dataToPost);


    if(this.edit){
      if(this.eventForm.valid){
        this.eventSer.putEvent(dataToPost).subscribe(
          (res)=>{
            document.documentElement.scrollTop = 0;
            this.router.navigate(['eventsTable']);

          }
        );

      }
    }else{
      if(this.eventForm.valid){
        this.eventSer.postEvent(dataToPost).subscribe(
          (res)=>{
            document.documentElement.scrollTop = 0;
            this.router.navigate(['eventsTable']);
          }
        );

      }
    }
  }

  deleteEvent(i:number){
    this.load = true;
    this.eventSer.deleteEvent(i).subscribe(
      (res)=>{
          if(res){

            this.load = false;

            this.delete=false;
          }
      }
    );
    this.eventForm.reset();
  }
  ngOnDestroy():void{
    this.newsSer.nothing.next(false);
    this.edit = false;
  }

  ondelete(){
    this.delete=true;
  }
  onCancel(){
    this.delete=false;
  }
}
