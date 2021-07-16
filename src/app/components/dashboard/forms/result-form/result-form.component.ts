import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.scss']
})
export class ResultFormComponent implements OnInit  , OnDestroy{

  resultForm:any;
  id:number|any;
  load:boolean=false;
  edit:boolean = false;
  delete:boolean = false;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    private toastr:ToastrService,
    private newsSer: HomeNewsCardServiceService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    document.documentElement.scrollTop = 0;
    console.log(this.resultForm.value);
    if(this.edit){
      if(this.resultForm.valid){
        this.toastr.success('لقد تم  إضافة النتيجة بنجاح');
        console.log(this.resultForm.value);
      }
    }else{
      if(this.resultForm.valid){
        this.toastr.success('لقد تم  تعديل النتيجة بنجاح');
        console.log(this.resultForm.value);
      }
    }
  }

  deleteDepartment(id:number|any){
    this.toastr.success('لقد تم مسح النتيجة بنجاح');
    this.resultForm.reset();
    this.onCancel();
  }
  ondelete(){
    this.delete=true;
  }
  onCancel(){
    this.delete=false;
  }
  ngOnDestroy():void{
    this.newsSer.nothing.next(false);
    this.edit = false;
  }

}
