import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { Department } from 'src/app/services/departments/department.model';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit , OnDestroy {


  departmentForm:any;
  id:number|any;
  load:boolean = true;
  edit:boolean =false;
  delete:boolean = false;
  department:Department|any;
  constructor(
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private newsSer:HomeNewsCardServiceService,
    private toastr:ToastrService,
    private depSer:DepartmentService
    ) {
    this.departmentForm = this.fb.group({
      name:[null , [Validators.required]],
      about:[null , [Validators.required]],
      sight:[null , [Validators.required]],
      message:[null , [Validators.required]],
      goal:[null , [Validators.required]],
      bossWord:[null , [Validators.required]],
    })
  }
  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit = true;
          this.id = +data['id'];
          this.depSer.getSingleDepartment(this.id).subscribe(
            (res)=>{
              this.department = res;
              this.departmentForm.get('name').setValue(this.department.name);
              this.departmentForm.get('about').setValue(this.department.description);
              this.departmentForm.get('sight').setValue(this.department.vision);
              this.departmentForm.get('message').setValue(this.department.message);
              this.departmentForm.get('goal').setValue(this.department.goals);
              this.departmentForm.get('bossWord').setValue(this.department.headSpeech);
              this.load = false;
            },
            (error)=>{
              this.toastr.error('حدث خطأ أثناء تحميل القسم');
              this.toastr.info('حاول مرة اخري');
              this.load= false;
              this.router.navigate(['departmentTable']);
            }
          );
        }else{
          this.edit = false;
          this.load = false;
        }
      }
    );

  }


  onSubmit(){
    this.load = true;
    let dataToPost:{id?:number , name:string , description:string , vision:string,message:string,goals:string,headSpeech:string}={
      id:this.id,
      name:this.departmentForm.get('name').value,
      description:this.departmentForm.get('about').value,
      vision:this.departmentForm.get('sight').value,
      message:this.departmentForm.get('message').value,
      goals:this.departmentForm.get('goal').value,
      headSpeech:this.departmentForm.get('bossWord').value
    };
    if(this.edit){
      if(this.departmentForm.valid){
        this.depSer.putDepartment(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم  تعديل القسم بنجاح');
            document.documentElement.scrollTop = 0;
            this.router.navigate(['departmentTable']);
          },
          (error)=>{
            this.toastr.error('حدث خطأ أثناء تعديل القسم');
            this.toastr.info('حاول مرة اخري');
            this.load= false;
          }
        );
      }
    }else{
      if(this.departmentForm.valid){
        this.depSer.postDepartment(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم إضافة القسم بنجاح');
            document.documentElement.scrollTop = 0;
            this.router.navigate(['departmentTable']);
          },
          (error)=>{
            console.log(error);
            this.toastr.error('حدث خطأ أثناء إضافة القسم ');
            this.toastr.info('حاول مرة اخري');
            this.load=false;
          }
        );
      }
    }
  }

  deleteDepartment(id:number|any){
    this.load = true;
    this.depSer.deleteDepartment(id).subscribe(
      (res)=>{
        if(res){
          this.toastr.success('لقد تم مسح القسم بنجاح');
          this.load = false;
          this.delete = false;
          document.documentElement.scrollTop = 0;
          this.router.navigate(['departmentTable']);
        }
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء مسح القسم ');
        this.toastr.info('حاول مرة اخري');
        this.load=false;
      }
    );

    this.departmentForm.reset();
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

  // addLab(){
  //   const control = new FormControl(null,[Validators.required]);
  //   this.departmentForm.get('labs').push(control);
  // }
  // addCouncil(){
  //   const control = new FormControl(null,[Validators.required]);
  //   this.departmentForm.get('council').push(control);
  // }
  // deleteLab(i:any){
  //   this.departmentForm.get('labs').removeAt(i);
  // }
  // deleteCouncil(i:number){
  //   this.departmentForm.get('council').removeAt(i);
  // }

}
