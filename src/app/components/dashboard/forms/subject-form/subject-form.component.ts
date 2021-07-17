import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit , OnDestroy {

  departmentsList:any =[];
  dropdownSettings: IDropdownSettings = {};
  private allSubjects:any = [];
  subjectForm:any;
  load: boolean = false;
  edit:boolean =false;
  id:number|any;
  delete:boolean = false;
  constructor(
    private fb : FormBuilder ,
    private newsSer:HomeNewsCardServiceService,
    private route:ActivatedRoute,
    private router:Router,
    private toastr:ToastrService
    ) {
    this.subjectForm = this.fb.group({
      title: [null , [Validators.required]],
      codeAr: [null , [Validators.required]],
      codeEn: [null , [Validators.required]],
      numOfHours:[null , [Validators.required]],
      maxDegree: [null , [Validators.required]],
      minDegree: [null , [Validators.required]],
      content : [null , [Validators.required]],
      department:[null,[Validators.required]],
    })
   }

  ngOnInit(): void {
    this.departmentsList = [
      'حاسبات',
      'تحكم',
      'اتصالات'
    ];
    this.dropdownSettings={
      singleSelection:true,
      searchPlaceholderText:'ابحث عن القسم',
      allowSearchFilter: true
    }
    this.newsSer.nothing.next(false);
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit = true;
          this.id = +data['id'];
        }else{
          this.edit = false;
          this.load=false;
        }
      }
    );
  }

  onSubmit(){
    document.documentElement.scrollTop = 0;
    console.log(this.subjectForm.value);
    if(this.edit){
      if(this.subjectForm.valid){
        this.toastr.success('لقد تم  إضافة المادة بنجاح');
        console.log(this.subjectForm.value);
      }
    }else{
      if(this.subjectForm.valid){
        this.toastr.success('لقد تم  تعديل المادة بنجاح');
        console.log(this.subjectForm.value);
      }
    }
  }

  ngOnDestroy():void{
    this.newsSer.nothing.next(false);
    this.edit = false;
  }

  ondelete(){
    this.delete=true;
  }
  deleteSubject(id:number|any){
    this.toastr.success('لقد تم مسح المادة بنجاح');
    this.subjectForm.reset();
    this.onCancel();
  }
  onCancel(){
    this.delete=false;
  }
}






// height: calc(1.5em + 1rem + 2px);
//     padding: 0.5rem 1rem;
//     font-size: 1.25rem;
//     line-height: 1.5;
//     border-radius: 0.3rem;
