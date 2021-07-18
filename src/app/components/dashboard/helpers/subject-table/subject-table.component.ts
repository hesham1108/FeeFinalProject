import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SubjectService } from 'src/app/services/subjects/subject-service.service';
import { Subject } from 'src/app/services/subjects/subject.model';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class SubjectTableComponent implements OnInit {

  subjects:Observable<Subject[]>|any = [];
  load:boolean = true;
  delete:boolean = false;
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private subSer:SubjectService
    ) { }

    ngOnInit(): void {
      this.reloadData();
    }

  reloadData(){
      this.delete = false;
      document.documentElement.scrollTop = 0;
      this.subSer.getAllSubjects().subscribe(
        (res)=>{
          this.subjects = res;
          this.load=false;
        },
        (error)=>{
          this.toastr.error('حدث خطأ أثناء تحميل المواد');
          this.toastr.info('حاول مرة اخري');
          this.load = false;
        }
      );
  }
  editMySubject(id:number){
    this.router.navigate(['dash/addSubject' , id]);
  }
  ondelete(){
    this.delete = true;
  }
  deleteSubject(id:number){
   document.documentElement.scrollTop = 0;
   this.load = true;
   this.subSer.deleteSubject(id).subscribe(
     (res)=>{
       if(res){
         this.toastr.success('لقد تم مسح المادة بنجاح');
         this.delete = false;
         this.reloadData();
       }
     },
     (error)=>{
      this.toastr.error('حدث خطأ أثناء مسح المادة ');
      this.toastr.info('حاول مرة اخري');
      this.load=false;
     }
   );
  }
  onCancel(){
    this.delete= false;
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }

}
