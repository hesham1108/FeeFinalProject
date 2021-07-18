import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.scss']
})
export class ExamFormComponent implements OnInit {

  examForm:any;
  subjectList:Observable<{}[]>|any=[];
  dropSubSettings: IDropdownSettings = {};
  id:number|any;
  edit:boolean =false;
  load:boolean = false;
  delete:boolean=false;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private fb:FormBuilder,
    private toastr:ToastrService,
    private newsSer:HomeNewsCardServiceService,
  ) {
    this.examForm = this.fb.group({
      subject:[null,[Validators.required]],
      date:[null,[Validators.required]],
      time:[null,[Validators.required]],
      duration:[null],
    });
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
    this.dropSubSettings =  {
      idField: 'id',
      textField:'name',
      singleSelection:true,
      searchPlaceholderText:'ابحث عن المادة',
      allowSearchFilter: true,
      itemsShowLimit: 3,
      showSelectedItemsAtTop: true,
      closeDropDownOnSelection:true
    }
  }
  onSubmit(){
    document.documentElement.scrollTop = 0;
    console.log(this.examForm.value);

    if(this.edit){
      if(this.examForm.valid){
        this.toastr.success('لقد تم  إضافة الجدول بنجاح');
        console.log(this.examForm.value);
      }
    }else{
      if(this.examForm.valid){
        this.toastr.success('لقد تم  تعديل الجدول بنجاح');
        console.log(this.examForm.value);
      }
    }
  }

  deleteTable(id:number|any){
    this.toastr.success('لقد تم مسح الجدول بنجاح');
    this.examForm.reset();
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
