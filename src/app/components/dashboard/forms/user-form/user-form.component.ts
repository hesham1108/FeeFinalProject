import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit , OnDestroy{

  departmentsList:any =[];
  dropdownSettings: IDropdownSettings = {};
  postionList : any = [];
  posdropdownSettings: IDropdownSettings={};
  userForm:any;
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
      this.userForm = this.fb.group({
        nameAr:[null,[Validators.required]],
        nameEn:[null,[Validators.required]],
        phone:[null,[Validators.required]],
        role:[null,[Validators.required]],
        academicNumber:[null,[]],
        postion:[null,[]],
        entity:[null,[]],
        department:[null,[Validators.required]],
        username:[null,[Validators.required]],
        email:[null,[Validators.required,Validators.email]],
        password:[null,[Validators.required]],

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
    this.postionList =[
      'دكتور',
      'عميد',
      'مدير'
    ]
    this.posdropdownSettings={
      singleSelection:true,
      searchPlaceholderText:'ابحث عن المنصب',
      allowSearchFilter: true
    }
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
      if(this.userForm.valid){
        this.toastr.success('لقد تم  إضافة المستخدم بنجاح');
        console.log(this.userForm.value);
      }
    }else{
      if(this.userForm.valid){
        this.toastr.success('لقد تم  تعديل المستخدم بنجاح');
        console.log(this.userForm.value);
      }
    }
  }
  ondelete(){
    this.delete=true;
  }
  deleteUser(id:number|any){
    this.toastr.success('لقد تم مسح المستخدم بنجاح');
    this.userForm.reset();
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
