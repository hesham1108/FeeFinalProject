import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { Department } from 'src/app/services/departments/department.model';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class DepartmentTableComponent implements OnInit {
  search = '';
  deleteId:number|any;
  departments:Observable<Department[]>|any=[];
  load:boolean = true;
  delete:boolean = false;
  tokenValue:string|any;
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private depSer:DepartmentService,
    private userSer:UserService
    ) { }

  ngOnInit(): void {
    this.tokenValue =  localStorage.getItem("token");

    if(this.tokenValue){
      this.userSer.getSingleUser(this.tokenValue).subscribe(
        (res)=>{
          if(res.role.includes('Admin')||res.role.includes('SuperAdmin')){
            this.reloadData();
          }else{
            this.toastr.error('غير مسموح لك بالدخول هنا ');
            this.router.navigate(['']);
          }
        }
      )
     }else{
      this.toastr.error('غير مسموح لك بالدخول هنا ');
      this.router.navigate(['']);
    }
  }

  reloadData(){
    this.delete = false;
    document.documentElement.scrollTop = 0;
    this.depSer.getAllDepartments().subscribe(
      (res)=>{
        this.departments = res.reverse();
        console.log(res);

        this.load=false;

      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل الأقسام');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
      }
    );
  }
  editMyDepartment(id:number){
    this.router.navigate(['dash/addDepartment' , id]);
  }
  ondelete(id:number){
    this.deleteId = id;
    this.delete = true;
  }
  deleteDepartment(){
    document.documentElement.scrollTop = 0;
    this.load = true;
    this.depSer.deleteDepartment(this.deleteId).subscribe(
      (res)=>{
        if(res){
          this.toastr.success('لقد تم مسح القسم بنجاح');
          this.delete = false;
          this.reloadData();
        }
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء مسح القسم ');
        this.toastr.info('حاول مرة اخري');
        this.load=false;
      }
    );
    this.onCancel();
  }
  onCancel(){
    this.delete= false;
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }
}
