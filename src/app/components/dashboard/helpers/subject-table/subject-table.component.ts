import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class SubjectTableComponent implements OnInit {

  load:boolean = false;
  delete:boolean = false;
  constructor(
    private router:Router,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
  }
  editMySubject(id:number){
    this.router.navigate(['dash/addSubject' , id]);
  }
  ondelete(){
    this.delete = true;
  }
  deleteUser(id:number){
    console.log(id);
    this.toastr.success('لقد تم مسح المادة بنجاح')
  }
  onCancel(){
    this.delete= false;
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }

}
