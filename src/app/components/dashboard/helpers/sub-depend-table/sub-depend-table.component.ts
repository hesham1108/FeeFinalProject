import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sub-depend-table',
  templateUrl: './sub-depend-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class SubDependTableComponent implements OnInit {

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
  editMySubDepend(id:number){
    this.router.navigate(['dash/addSubDepend' , id]);
  }
  deleteSubDepend(id:number){
    console.log(id);
    this.toastr.success('لقد تم مسح المتطلب بنجاح')
  }
  onCancel(){
    this.delete= false;
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }

}
