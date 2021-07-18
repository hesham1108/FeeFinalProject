import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { Department } from 'src/app/services/departments/department.model';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent implements OnInit {

  tableForm:any;
  weekList:{id:number , day:string }[]|any = [
    {id:1 , day: 'السبت'},
    {id:2 , day: 'الأحد'},
    {id:3 , day: 'الإثنين'},
    {id:4 , day: 'الثلاثاء'},
    {id:5 , day: 'الأربعاء'},
    {id:6 , day: 'الخميس'},
    {id:7 , day: 'الجمعة'},
  ];
  dropWeekSettings: IDropdownSettings ={};
  subjectList:Observable<Department[]>|any =[];
  dropSubSettings: IDropdownSettings = {};
  staffList:Observable<Department[]>|any =[];
  dropStaffSettings: IDropdownSettings = {};
  id:number|any;
  edit:boolean =false;
  load:boolean = false;
  delete:boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private newsSer:HomeNewsCardServiceService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {
    this.tableForm = this.fb.group({
      academicYear:[null,[Validators.required]],
      location:[null,[Validators.required]],
      sessionType:[0,[Validators.required]],
      startAt:[null,[Validators.required]],
      endAt:[null,[Validators.required]],
      weekDay:[null,[Validators.required]],
      subject:[null,[Validators.required]],
      staff:[null,[Validators.required]],
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
    this.dropWeekSettings ={
      singleSelection:true,
      idField: 'id',
      textField:'day',
      itemsShowLimit: 3,
      searchPlaceholderText:'ابحث عن اليوم',
      allowSearchFilter: true,
      showSelectedItemsAtTop: true,
      closeDropDownOnSelection:true
    }
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
    this.dropStaffSettings = {
      idField: 'id',
      textField:'name',
      singleSelection:true,
      searchPlaceholderText:'ابحث عن الدكتور',
      allowSearchFilter: true,
      itemsShowLimit: 3,
      showSelectedItemsAtTop: true,
      closeDropDownOnSelection:true
    }

  }

  onSubmit(){
    document.documentElement.scrollTop = 0;
    console.log(this.tableForm.value);

    if(this.edit){
      if(this.tableForm.valid){
        this.toastr.success('لقد تم  إضافة الجدول بنجاح');
        console.log(this.tableForm.value);
      }
    }else{
      if(this.tableForm.valid){
        this.toastr.success('لقد تم  تعديل الجدول بنجاح');
        console.log(this.tableForm.value);
      }
    }
  }

  deleteTable(id:number|any){
    this.toastr.success('لقد تم مسح الجدول بنجاح');
    this.tableForm.reset();
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
