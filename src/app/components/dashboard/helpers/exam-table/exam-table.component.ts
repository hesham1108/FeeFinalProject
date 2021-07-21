import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exam-table',
  templateUrl: './exam-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class ExamTableComponent implements OnInit {
  search='';
  deleteId:number|any;
  load:boolean = false;
  delete:boolean = false;
  constructor(
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }

  editExam(id:number){
    this.router.navigate(['dash/addExam' , id]);
  }
  ondelete(id:number){
    this.deleteId = id;
    this.delete = true;
  }
  deleteExam(){
    console.log(this.deleteId);
    this.toastr.success('لقد تم مسح المادة بنجاح')
  }
  onCancel(){
    this.delete= false;
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }
}
