import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-council-form',
  templateUrl: './council-form.component.html',
  styleUrls: ['./council-form.component.scss']
})
export class CouncilFormComponent implements OnInit  , OnDestroy{
  departmentsList:any =[];
  dropdownSettings: IDropdownSettings = {};
  councilForm:any;
  depCouncil:any;
  id:number|any;
  load:boolean = true;
  edit:boolean =false;
  delete:boolean = false;
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
    private newsSer:HomeNewsCardServiceService,
    private toastr:ToastrService,
    private depSer:DepartmentService
  ) {
    this.councilForm = this.fb.group({
      title:[null,[Validators.required]],
      details:[null,[Validators.required]],
      department:[null,[Validators.required]],
    })
  }

  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.depSer.getAllDepartments().subscribe(
      (res)=>{
        this.departmentsList = res;
        this.load = false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل الأقسام');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
      }
    );

    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit = true;
          this.id = +data['id'];
          this.depSer.getSingleDepCouncil(this.id).subscribe(
            (res)=>{
              this.depCouncil = res;
              this.councilForm.get('title').setValue(this.depCouncil.title);
              this.councilForm.get('details').setValue(this.depCouncil.details);
              // this.councilForm.get('department').setValue({id:this.depCouncil.departmentID});
              for(let d of this.departmentsList){
                if(d.id == this.depCouncil.departmentID){
                  this.councilForm.get('department').setValue([{id:d.id , name:d.name}]);
                }
              }
              console.log(this.councilForm.value);
                this.load = false;
            },
            (error)=>{
              this.toastr.error('حدث خطأ أثناء تحميل محضر المجلس');
              this.toastr.info('حاول مرة اخري');
              this.load= false;
              this.router.navigate(['labsTable']);
            }
          );

        }else{
          this.edit = false;
          this.load = false;
        }
      }
    );

    this.dropdownSettings={
      idField: 'id',
      textField:'name',
      singleSelection:true,
      searchPlaceholderText:'ابحث عن القسم',
      allowSearchFilter: true,
      itemsShowLimit: 3,
      showSelectedItemsAtTop: true,
      closeDropDownOnSelection:true,
      allowRemoteDataSearch:true
    };
  }


  onSubmit(){
    document.documentElement.scrollTop = 0;
    this.load = true;
    console.log(this.councilForm.value);

    let dataToPost:{id?:number , title:string ,details:string ,departmentID:number}={
      id:this.id,
      title:this.councilForm.get('title').value,
      details:this.councilForm.get('details').value,
      departmentID:+this.councilForm.get('department').value[0].id
    };
    console.log(dataToPost);

    if(this.edit){
      if(this.councilForm.valid){
        // console.log('edit');
        this.depSer.putDepCouncil(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم  تعديل محضر المجلس بنجاح');
            document.documentElement.scrollTop = 0;
            this.router.navigate(['councilTable']);
          },
          (error)=>{
            this.toastr.error('حدث خطأ أثناء تعديل محضر المجلس');
            this.toastr.info('حاول مرة اخري');
            this.load= false;
          }
        );
      }
    }else{
      if(this.councilForm.valid){
        this.depSer.postDepCouncil(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم  إضافة محضر المجلس بنجاح');
            document.documentElement.scrollTop = 0;
            this.router.navigate(['councilTable']);
          },
          (error)=>{
            this.toastr.error('حدث خطأ أثناء إضافة محضر المجلس');
            this.toastr.info('حاول مرة اخري');
            this.load= false;
            console.log(error);

          }
        );
      }
    }
  }

  deleteCouncil(id:number|any){
    this.load = true;
    this.depSer.deleteDepCouncil(id).subscribe(
      (res)=>{
        if(res){
          this.toastr.success('لقد تم مسح محضر المجلس  بنجاح');
          this.load = false;
          this.delete = false;
          document.documentElement.scrollTop = 0;
          this.router.navigate(['labsTable']);
        }
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء مسح محضر المجلس  ');
        this.toastr.info('حاول مرة اخري');
        this.load=false;
      }
    );
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
