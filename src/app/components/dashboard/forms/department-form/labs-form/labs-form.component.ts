import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { Department } from 'src/app/services/departments/department.model';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-labs-form',
  templateUrl: './labs-form.component.html',
  styleUrls: ['./labs-form.component.scss']
})
export class LabsFormComponent implements OnInit  , OnDestroy{

  departmentsList:Observable<Department[]>|any =[];
  dropdownSettings: IDropdownSettings = {};
  labsForm:any;
  depLab:any;
  id:number|any;
  load:boolean = true;
  edit:boolean =false;
  delete:boolean = false;
  constructor(
    private fb: FormBuilder,
    private router:Router ,
    private route:ActivatedRoute ,
    private newsSer:HomeNewsCardServiceService ,
    private toastr:ToastrService,
    private depSer: DepartmentService
  ) {
    this.labsForm = this.fb.group({
      name:[null,[Validators.required]],
      roomNum:[null,[Validators.required]],
      description:[null,[Validators.required]],
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
          this.depSer.getSingleDepLap(this.id).subscribe(
            (res)=>{
              this.depLab = res;
              this.labsForm.get('name').setValue(this.depLab.name);
              this.labsForm.get('roomNum').setValue(this.depLab.roomNum);
              this.labsForm.get('description').setValue(this.depLab.description);
              this.labsForm.get('department').setValue(this.depLab.department);
              // this.labsForm.get('department').setValue({id:this.depLab.departmentID});
              for(let d of this.departmentsList){
                if(d.id == this.depLab.departmentID){
                  this.labsForm.get('department').setValue([{id:d.id , name:d.name}]);
                }
              }
              console.log(this.labsForm.value);
                this.load = false;
            },
            (error)=>{
              this.toastr.error('حدث خطأ أثناء تحميل المعمل');
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
    }

  }

  onSubmit(){
    document.documentElement.scrollTop = 0;
    this.load = true;
    console.log(this.labsForm.value);

    let dataToPost:{id?:number , name:string ,roomNum:number , description:string ,departmentID:number}={
      id:this.id,
      name:this.labsForm.get('name').value,
      roomNum:this.labsForm.get('roomNum').value,
      description:this.labsForm.get('description').value,
      departmentID:+this.labsForm.get('department').value[0].id
    };
    console.log(dataToPost);

    if(this.edit){
      if(this.labsForm.valid){
        console.log('edit');
        this.depSer.putDepLab(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم  تعديل المعمل بنجاح');
            document.documentElement.scrollTop = 0;
            this.router.navigate(['labsTable']);
          },
          (error)=>{
            this.toastr.error('حدث خطأ أثناء تعديل المعمل');
            this.toastr.info('حاول مرة اخري');
            this.load= false;
          }
        );
      }
    }else{
      if(this.labsForm.valid){
        this.depSer.postDepLab(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم  إضافة المعمل بنجاح');
            document.documentElement.scrollTop = 0;
            this.router.navigate(['labsTable']);
          },
          (error)=>{
            this.toastr.error('حدث خطأ أثناء إضافة المعمل');
            this.toastr.info('حاول مرة اخري');
            this.load= false;
            console.log(error);

          }
        );
      }
    }
  }

  deleteLab(id:number|any){
    this.load = true;
    this.depSer.deleteDepLab(id).subscribe(
      (res)=>{
        if(res){
          this.toastr.success('لقد تم مسح المعمل بنجاح');
          this.load = false;
          this.delete = false;
          document.documentElement.scrollTop = 0;
          this.router.navigate(['labsTable']);
        }
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء مسح المعمل ');
        this.toastr.info('حاول مرة اخري');
        this.load=false;
      }
    );
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
