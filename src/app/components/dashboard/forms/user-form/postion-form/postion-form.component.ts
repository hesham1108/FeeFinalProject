import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-postion-form',
  templateUrl: './postion-form.component.html',
  styleUrls: ['./postion-form.component.scss']
})
export class PostionFormComponent implements OnInit {

  postionForm:any;
  load:boolean = false;
  edit:boolean =false;
  id:number|any;
  delete:boolean = false;
  constructor(
    private fb:FormBuilder,
    private toastr:ToastrService,
    private router:Router,
    private route:ActivatedRoute,
    private newsSer:HomeNewsCardServiceService
    ) {
      this.postionForm = this.fb.group({
        name:[null,[Validators.required]],
        })
    }

  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.id = +data['id'];
          // this.load=true;
          this.edit=true;
        }else{
          this.edit= false;
        }
      }
    );
  }

  onSubmit(){
    document.documentElement.scrollTop = 0;

    if(this.edit){
      if(this.postionForm.valid){
        this.toastr.success('لقد تم  إضافة المنصب بنجاح');
        console.log(this.postionForm.value);
      }
    }else{
      if(this.postionForm.valid){
        this.toastr.success('لقد تم  تعديل المنصب بنجاح');
        console.log(this.postionForm.value);
      }
    }
  }
  ondelete(){
    this.delete=true;
  }
  deletePostion(id:number|any){
    this.toastr.success('لقد تم مسح المنصب بنجاح');
    this.postionForm.reset();
    this.onCancel();
  }
  onCancel(){
    this.delete=false;
  }
  ngOnDestroy():void{
    this.newsSer.nothing.next(false);
    this.edit = false;
  }
}
