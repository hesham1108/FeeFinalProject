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
  tokenValue:string|any;
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private userSer:UserService
  ) { }

  ngOnInit(): void {
    this.tokenValue =  localStorage.getItem("token");

    if(this.tokenValue){
      this.userSer.getSingleUser(this.tokenValue).subscribe(
        (res)=>{
          if(res.roles.includes('Admin')||res.roles.includes('SuperAdmin')){
            this.userSer.getUsers().subscribe(
              (res)=>{
                // let temp =[];
                for(let r of res){
                  if(!r.department ){
                    r.department = {name:'لا يوجد'};
                  }
                }
                // this.users = res.reverse();
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
