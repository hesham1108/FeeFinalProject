import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user-service';
import { ValueTransformer } from '@angular/compiler/src/util';
@Component({
  selector: 'app-permission-form',
  templateUrl: './permission-form.component.html',
  styleUrls: ['./permission-form.component.scss']
})
export class PermissionFormComponent implements OnInit {
  load:boolean = true;
  delete:boolean = false;
  roles:any[] = [];
  permissions:any[]=[];
  selectedPer :any[] =[];
  permissionForm:any;
  rolesSet:IDropdownSettings = {};
  constructor(
    private userSer:UserService,
    private toastr:ToastrService,
    private fb:FormBuilder
    ) {
      this.permissionForm = this.fb.group({
        roleId:[null,[Validators.required]],
        userClaims: this.fb.array([], [Validators.required])
      });
     }

  ngOnInit(): void {
    this.userSer.getRoles().subscribe(
      (res)=>{
        this.roles = res.reverse();
        this.load=false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل الأدوار');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
      }
    );
    this.rolesSet = {
      idField:'id',
      textField:'name',
      singleSelection:true,
      searchPlaceholderText:'ابحث عن الدور',
      allowSearchFilter: true,
      itemsShowLimit: 3,
      showSelectedItemsAtTop: true,
      closeDropDownOnSelection:true,
      allowRemoteDataSearch:true
    }
  }
  onSubmit(){
    console.log(this.permissionForm.value);
    this.load=true;
    let dataToPost:{roleId:string , userClaims:string[]} = {
      roleId:this.permissionForm.get('roleId').value[0].id,
      userClaims:this.permissionForm.get('userClaims').value
    }
    console.log(dataToPost);

    this.userSer.postPermission(dataToPost).subscribe(
      (res)=>{
        console.log(res);

        this.toastr.success('لقد تم إضافة الصلاحيات بنجاح');
        this.selectedPer=[];
        this.permissionForm.reset();
        this.load=false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء إضافة الصلاحيات');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
        console.log(error);

      }
    );

  }

  onSelect(r:any){
    this.load = true;
    this.userSer.getPermission(r.id).subscribe(
      (per)=>{
        console.log(per);
        this.permissions = per;
        this.selectedPer = per.selectedClaims;

        const data: FormArray = this.permissionForm.get('userClaims') as FormArray;
        for(let p of  per.selectedClaims){
          if (p.isSelected) {
            data.push(new FormControl(p.displayValue));
          }
        }
        this.load=false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل الصلاحيات');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
        console.log(error);
      }
    );
  }
  onDeSelect(){
    this.selectedPer=[];
    let checkArray: FormArray = this.permissionForm.get('userClaims') as FormArray;
    checkArray.controls = [];
    this.permissionForm.reset();
  }

  checkAll(){}
  deCheckAll(){}

  onCheckboxChange(e:any){
    const checkArray: FormArray = this.permissionForm.get('userClaims') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    }else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
