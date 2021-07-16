import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-postion-table',
  templateUrl: './postion-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class PostionTableComponent implements OnInit {

  load:boolean = false;
  delete:boolean = false;
  constructor(
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }
  ondelete(){
    this.delete = true;
  }
  editMyPostion(id:number){
    this.router.navigate(['dash/addPostion' , id]);
  }
  deletePostion(id:number){
    console.log(id);
    this.toastr.success('لقد تم مسح المنصب بنجاح')
  }
  onCancel(){
    this.delete= false;
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }
}
