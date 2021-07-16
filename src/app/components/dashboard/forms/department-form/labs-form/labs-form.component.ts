import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-labs-form',
  templateUrl: './labs-form.component.html',
  styleUrls: ['./labs-form.component.scss']
})
export class LabsFormComponent implements OnInit  , OnDestroy{

  labsForm:any;
  id:number|any;
  load:boolean = false;
  edit:boolean =false;
  delete:boolean = false;
  constructor(
    private fb: FormBuilder,
    private router:Router ,
    private route:ActivatedRoute ,
    private newsSer:HomeNewsCardServiceService ,
    private toastr:ToastrService
  ) {
    this.labsForm = this.fb.group({
      name:[null,[Validators.required]],
      roomName:[null,[Validators.required]],
      description:[null,[Validators.required]],
      department:[null,[Validators.required]],
    })
   }

  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit = true;
          this.id = +data['id'];
        }else{
          this.edit = false;
        }
      }
    );
  }

  onSubmit(){
    document.documentElement.scrollTop = 0;

    if(this.edit){
      if(this.labsForm.valid){
        this.toastr.success('لقد تم  إضافة المعمل بنجاح');
        console.log(this.labsForm.value);
      }
    }else{
      if(this.labsForm.valid){
        this.toastr.success('لقد تم  تعديل المعمل بنجاح');
        console.log(this.labsForm.value);
      }
    }
  }

  deleteLab(id:number|any){
    this.toastr.success('لقد تم مسح المعمل بنجاح');
    this.labsForm.reset();
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

}
