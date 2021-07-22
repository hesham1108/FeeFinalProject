import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventCardService } from 'src/app/services/events/event-card.service';
import { Event } from 'src/app/services/events/event.model';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit , OnDestroy {
  imgSrc:string|any;
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
    private newsSer: HomeNewsCardServiceService,
    private toastr:ToastrService
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
                this.imgSrc = this.event.imagePath as string;
                this.load=false;
            },
            (error)=>{
              this.toastr.error('حدث خطأ أثناء تحميل الحدث ');
              this.toastr.info('حاول مرة اخري');
              this.load=false;
              this.router.navigate(['eventsTable']);
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
    this.load = true;
    let dataToPost:{id?:number,title:string , createdAt: string , imagePath:string , description:string} = {
      id : this.id,
      title : this.eventForm.get('title').value,
      createdAt: this.eventForm.get('date').value,
      imagePath: this.eventForm.get('imagePath').value,
      description : this.eventForm.get('description').value,
    };

    if(this.edit){
      if(this.eventForm.valid){
        this.eventSer.putEvent(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم تعديل الحدث بنجاح');
            document.documentElement.scrollTop = 0;
            this.router.navigate(['eventsTable']);

          },
          (error)=>{
            this.toastr.error('حدث خطأ أثناء تعديل الحدث ');
            this.toastr.info('حاول مرة اخري');
            this.load=false;
          }
        );

      }
    }else{
      if(this.eventForm.valid){
        this.eventSer.postEvent(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم إضافة الحدث بنجاح');
            document.documentElement.scrollTop = 0;
            this.router.navigate(['eventsTable']);
          },
          (error)=>{
            this.toastr.error('حدث خطأ أثناء إضافة الحدث ');
            this.toastr.info('حاول مرة اخري');
            this.load=false;
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
            this.toastr.success('لقد تم مسح الحدث بنجاح');
            this.load = false;
            this.delete=false;
            document.documentElement.scrollTop = 0;
            this.router.navigate(['eventsTable']);

          }
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء مسح الحدث ');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
      }
    );
    this.eventForm.reset();
    this.onCancel();
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
  onImageChange(event:any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length){
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = ()=>{
        this.imgSrc = reader.result as string;
        this.eventForm.patchValue({
          imagePath: reader.result
        })
        console.log(this.imgSrc);

      }
    }
  }
}
