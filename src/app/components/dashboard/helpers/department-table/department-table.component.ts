import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { Department } from 'src/app/services/departments/department.model';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class DepartmentTableComponent implements OnInit {
  departments:Observable<Department[]>|any=[];
  load:boolean = true;
  delete:boolean = false;
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private depSer:DepartmentService
    ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.delete = false;
    document.documentElement.scrollTop = 0;
    this.depSer.getAllDepartments().subscribe(
      (res)=>{
        this.departments = res;
        this.load=false;
        console.log('get ... done');

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
  ondelete(){
    this.delete = true;
  }
  deleteDepartment(id:number|any){
    document.documentElement.scrollTop = 0;
    this.load = true;
    this.depSer.deleteDepartment(id).subscribe(
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
