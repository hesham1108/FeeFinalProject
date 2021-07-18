import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-postion-table',
  templateUrl: './postion-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class PostionTableComponent implements OnInit {

  load:boolean = true;
  delete:boolean = false;
  postions:Observable<{id:number , name:string}[]>|any=[];
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private userSer:UserService
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.delete = false;
    document.documentElement.scrollTop = 0;
    this.userSer.getAllPostions().subscribe(
      (res)=>{
        this.postions = res;
        this.load=false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل المناصب');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
      }
    );
  }
  ondelete(){
    this.delete = true;
  }
  editMyPostion(id:number){
    this.router.navigate(['dash/addPostion' , id]);
  }
  deletePostion(id:number){
   document.documentElement.scrollTop = 0;
   this.load = true;
   this.userSer.deletePostion(id).subscribe(
    (res)=>{
      if(res){
        this.toastr.success('لقد تم مسح المنصب بنجاح');
        this.delete = false;
        this.reloadData();
      }
    },
    (error)=>{
      this.toastr.error('حدث خطأ أثناء مسح المنصب ');
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
