import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class UsersTableComponent implements OnInit {
  users:any=[];
  load:boolean = true;
  delete:boolean = false;
  search='';
  deleteId:number|any;
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private userSer:UserService
  ) { }

  ngOnInit(): void {
    this.userSer.getUsers().subscribe(
      (res)=>{
        this.users = res.reverse();
        console.log(this.users);
        this.load=false;

      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل المستخدمين');
          this.toastr.info('حاول مرة اخري');
          this.load = false;
      }
    );
  }
  reloadData(){

  }
  editMyUser(id:number){
    this.router.navigate(['dash/addUser' , id]);
  }
  ondelete(id:number){
    this.deleteId=id;
    this.delete = true;
  }
  deleteUser(){

    this.toastr.success('لقد تم مسح الصلاحية بنجاح')
  }
  onCancel(){
    this.delete= false;
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }
}
