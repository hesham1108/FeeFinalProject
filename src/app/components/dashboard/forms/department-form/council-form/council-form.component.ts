import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-council-form',
  templateUrl: './council-form.component.html',
  styleUrls: ['./council-form.component.scss']
})
export class CouncilFormComponent implements OnInit  , OnDestroy{

  councilForm:any;
  id:number|any;
  load:boolean = false;
  edit:boolean =false;
  delete:boolean = false;
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
    private newsSer:HomeNewsCardServiceService,
    private toastr:ToastrService
  ) {
    this.councilForm = this.fb.group({
      title:[null,[Validators.required]],
      details:[null,[Validators.required]],
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
      if(this.councilForm.valid){
        this.toastr.success('لقد تم  إضافة محضر المجلس بنجاح');
        console.log(this.councilForm.value);
      }
    }else{
      if(this.councilForm.valid){
        this.toastr.success('لقد تم  تعديل محضر المجلس بنجاح');
        console.log(this.councilForm.value);
      }
    }
  }

  deleteCouncil(id:number|any){
    this.toastr.success('لقد تم مسح محضر المجلس بنجاح');
    this.councilForm.reset();
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
