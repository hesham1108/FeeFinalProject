import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PageService } from 'src/app/services/pages/pages.service';
import { UserService } from 'src/app/services/user/user-service';


@Component({
  selector: 'app-main-bar-table',
  templateUrl: './main-bar-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class MainBarTableComponent implements OnInit {
  search='';
  load:boolean = true;
  delete:boolean = false;
  mainBars:any;
  deleteId:number|any;
  tokenValue:string|any;
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private pageSer:PageService,
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
    this.pageSer.getMainBar().subscribe(
      (res)=>{
        this.mainBars = res.reverse();
        this.load=false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل المناصب');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
      }
    );
  }
  ondelete(id:number){
    this.deleteId = id;
    this.delete = true;
  }
  editMainBar(id:number){
    this.router.navigate(['dash/addMainBar' , id]);
  }
  deleteMainBar(){
   document.documentElement.scrollTop = 0;
   this.load = true;
   this.pageSer.deleteMainBar(this.deleteId).subscribe(
    (res)=>{
      if(res){
        this.toastr.success('لقد تم مسح العنوان بنجاح');
        this.delete = false;
        this.reloadData();
      }
    },
    (error)=>{
      this.toastr.error('حدث خطأ أثناء مسح العنوان ');
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
