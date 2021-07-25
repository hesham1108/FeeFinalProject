import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-labs-table',
  templateUrl: './labs-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class LabsTableComponent implements OnInit {
  depLabs:Observable<{id:number ,name:string , departmentID:number , departmentName:string , description:string}[]>|any=[];
  load:boolean = true;
  delete:boolean = false;
  search = '';
  deleteId:number|any;
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
    this.depSer.getAllDepLabs().subscribe(
      (res)=>{
        this.getDepName(res);
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل المعامل');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
        console.log(error);

      }
    );
  }
  getDepName(res:any){
    this.depLabs = res.reverse();
    for(let l of this.depLabs ){
      this.depSer.getSingleDepartment(l.departmentID).subscribe(
        (data)=>{
          l.departmentName = data.name;
        }
      );
    }
    console.log(this.depLabs);

    this.load=false;
  }

  editLab(id:number){
    this.router.navigate(['dash/addLab' , id]);
  }
  ondelete(id:number){
    this.deleteId = id;
    this.delete = true;
  }
  deleteLab(){
    document.documentElement.scrollTop = 0;
    this.load = true;
    this.depSer.deleteDepLab(this.deleteId).subscribe(
      (res)=>{
        if(res){
          this.toastr.success('لقد تم مسح المعمل بنجاح');
          this.delete = false;
          this.reloadData();
        }
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء مسح المعمل ');
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
