import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class UsersTableComponent implements OnInit {

  load:boolean = false;
  delete:boolean = false;
  constructor(
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }
  editMyUser(id:number){
    this.router.navigate(['dash/addUser' , id]);
  }
  ondelete(){
    this.delete = true;
  }
  deleteUser(id:number){
    console.log(id);
    this.toastr.success('لقد تم مسح الصلاحية بنجاح')
  }
  onCancel(){
    this.delete= false;
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }
}
