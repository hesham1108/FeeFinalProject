import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit , OnDestroy{
  imgSrc:string|any;
  departmentsList:any =[];
  dropdownSettings: IDropdownSettings = {};
  roleList : any = [];
  roledropdownSettings: IDropdownSettings={};
  userForm:any;
  load:boolean = true;
  edit:boolean =false;
  id:string|any;
  delete:boolean = false;
  constructor(
    private fb:FormBuilder,
    private toastr:ToastrService,
    private router:Router,
    private route:ActivatedRoute,
    private newsSer:HomeNewsCardServiceService,
    private userSer: UserService,
    private depSer:DepartmentService
    ) {
      this.userForm = this.fb.group({
        nameAr:[null,[Validators.required]],
        nameEn:[null,[Validators.required]],
        phone:[null,[Validators.required]],
        role:[null,[Validators.required]],
        academicNumber:[null,[]],
        // postion:[null,[]],
        department:[null,[Validators.required]],
        email:[null,[Validators.required,Validators.email]],
        password:[null,[Validators.required]],
        imagePath:[null,[Validators.required]],
        dataOfBirth:[null,[Validators.required]],
        about:[null,[Validators.required]]
      })
    }

  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.id = data['id'];
          this.edit=true;
          this.userSer.getSingleUser(this.id).subscribe(
            (res)=>{
              this.userForm.get('nameAr').setValue(res.arabicName);
              this.userForm.get('nameEn').setValue(res.englishName);
              this.userForm.get('phone').setValue(res.phone);
              this.userForm.get('academicNumber').setValue(res.academicNumber);
              this.userForm.get('department').setValue(res.department);
              this.userForm.get('imagePath').setValue(res.imagePath);
              this.userForm.get('about').setValue(res.about);

            }
          );
        }else{
          this.edit= false;
        }
      }
    );
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
    this.userSer.getRoles().subscribe(
      (res)=>{
        this.roleList = res;
        console.log(this.roleList);
        this.load = false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل الصلاحيات');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
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
    this.roledropdownSettings={
      idField: 'id',
      textField:'name',
      singleSelection:true,
      searchPlaceholderText:'ابحث عن الصلاحية',
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
    let dataToPost :{
      arabicName:string,
      englishName:string,
      phone:string,
      roleId:string,
      academicNumber:string,
      departmentId:number,
      email:string,
      password:string,
      imagePath:string,
      dataOfBirth:string,
      about:string
    }={
      arabicName:this.userForm.get('nameAr').value,
      englishName:this.userForm.get('nameEn').value,
      phone:this.userForm.get('phone').value,
      roleId:this.userForm.get('role').value[0].id,
      academicNumber:this.userForm.get('academicNumber').value,
      departmentId:+this.userForm.get('department').value[0].id,
      dataOfBirth: this.userForm.get('dataOfBirth').value,
      about:this.userForm.get('about').value,
      email:this.userForm.get('email').value,
      password:this.userForm.get('password').value,
      imagePath : this.userForm.get('imagePath').value,
    };



    if(this.edit){
      if(this.userForm.valid){
        this.userSer.updateUser(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم  تعديل المستخدم بنجاح');
            this.router.navigate(['usersTable']);
          }
        );

      }
    }else{
      if(this.userForm.valid){
        this.userSer.postUserReg(dataToPost).subscribe(
          (res)=>{
            console.log(res);
            this.toastr.success(' لقد تم إضافة المستخدم بنجاح ');
            this.router.navigate(['usersTable']);
          },
          (error)=>{
            console.log(error);
            this.toastr.error('حدث خطأ أثناء إضافة المستخدم');
            this.toastr.info('حاول مرة اخري');
            this.load = false;
          }
        );
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

  onImageChange(event:any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length){
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = ()=>{
        this.imgSrc = reader.result as string;
        this.userForm.patchValue({
          imagePath: reader.result
        })
      }
    }
  }
}
