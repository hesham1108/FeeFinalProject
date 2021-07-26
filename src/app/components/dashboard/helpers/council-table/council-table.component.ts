import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-council-table',
  templateUrl: './council-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class CouncilTableComponent implements OnInit {
  search = '';
  depCouncils:Observable<{id:number ,title:string , departmentID:number , departmentName:string , details:string}[]>|any=[];
  load:boolean = true;
  delete:boolean = false;
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
          if(res.roles.includes('Admin')||res.roles.includes('SuperAdmin')){

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
    this.depSer.getAllDepCouncils().subscribe(
      (res)=>{
        this.getDepName(res);
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل المحاضر');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
        console.log(error);

      }
    );
  }
  getDepName(res:any){
    this.depCouncils = res.reverse();
    for(let l of this.depCouncils ){
      this.depSer.getSingleDepartment(l.departmentID).subscribe(
        (data)=>{
          l.departmentName = data.name;
        }
      );
    }
    console.log(this.depCouncils);

    this.load=false;
  }

  editMyCouncil(id:number){
    this.router.navigate(['dash/addCouncil' , id]);
  }
  ondelete(id:number){
    this.deleteId = id;
    this.delete = true;
  }
  deleteCouncil(){
    document.documentElement.scrollTop = 0;
    this.load = true;
    this.depSer.deleteDepCouncil(this.deleteId).subscribe(
      (res)=>{
        if(res){
          this.toastr.success('لقد تم مسح محضر المجلس بنجاح');
          this.delete = false;
          this.reloadData();
        }
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء مسح محضر المجلس ');
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
