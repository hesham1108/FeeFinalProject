import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exam-table',
  templateUrl: './exam-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class ExamTableComponent implements OnInit {

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
  ondelete(){
    this.delete = true;
  }
  deleteExam(id:number){
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
