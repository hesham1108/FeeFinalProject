import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { Department } from 'src/app/services/departments/department.model';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss'],
})
export class DepartmentFormComponent implements OnInit , OnDestroy {

  imgSrc:any;
  departmentForm:any;
  id:number|any;
  load:boolean = true;
  edit:boolean =false;
  delete:boolean = false;
  department:Department|any;
  users:any[]=[];
  userSet:IDropdownSettings ={};
  constructor(
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private newsSer:HomeNewsCardServiceService,
    private toastr:ToastrService,
    private depSer:DepartmentService,
    private userSer:UserService
    ) {
    this.departmentForm = this.fb.group({
      name:[null , [Validators.required]],
      about:[null , [Validators.required]],
      sight:[null , [Validators.required]],
      massage:[null , [Validators.required]],
      goal:[null , [Validators.required]],
      bossWord:[null , [Validators.required]],
      image:[null,[Validators.required]],
      headId:[null,[Validators.required]]
    })
  }
  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.userSer.getUsers().subscribe(
      (res)=>{
        this.users = res;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل المستخدمين');
        this.toastr.info('حاول مرة اخري');
        this.load= false;
      }
    );
    this.userSet={
      idField: 'id',
      textField:'arabicName',
      singleSelection:true,
      searchPlaceholderText:'ابحث عن المستخدم',
      allowSearchFilter: true,
      itemsShowLimit: 3,
      showSelectedItemsAtTop: true,
      closeDropDownOnSelection:true,
      allowRemoteDataSearch:true
    }
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit = true;
          this.id = +data['id'];
          this.depSer.getSingleDepartment(this.id).subscribe(
            (res)=>{
              this.department = res;
              console.log(res);
              this.departmentForm.get('name').setValue(this.department.name);
              this.departmentForm.get('about').setValue(this.department.description);
              this.departmentForm.get('sight').setValue(this.department.vision);
              this.departmentForm.get('massage').setValue(this.department.massage);
              this.departmentForm.get('goal').setValue(this.department.goals);
              this.departmentForm.get('bossWord').setValue(this.department.headSpeech);
              this.departmentForm.get('image').setValue(this.department.image );
              for(let u of this.users){
                if(u.id == this.departmentForm.departmentID){
                  this.departmentForm.get('headId').setValue([{id:u.id , arabicName:u.arabicName}]);
                }
              }
              this.imgSrc = this.department.image as string;
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
    let dataToPost:{id?:number,headId:string , name:string , description:string , vision:string,massage:string,goals:string,headSpeech:string,image:string}={
      id:this.id,
      name:this.departmentForm.get('name').value,
      description:this.departmentForm.get('about').value,
      vision:this.departmentForm.get('sight').value,
      massage:this.departmentForm.get('massage').value,
      goals:this.departmentForm.get('goal').value,
      headSpeech:this.departmentForm.get('bossWord').value,
      image:this.departmentForm.get('image').value,
      headId:this.departmentForm.get('headId').value[0].id
    };
    if(this.edit){
      if(this.departmentForm.valid){
        this.depSer.putDepartment(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم  تعديل القسم بنجاح');
            document.documentElement.scrollTop = 0;
            // this.depSer.getDeps();
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
            // this.depSer.getDeps();
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

  onImageChange(event:any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length){
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = ()=>{
        this.imgSrc = reader.result as string;
        this.departmentForm.patchValue({
          image: reader.result
        })
      }
    }
  }

}
