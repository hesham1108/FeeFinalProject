import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SubjectService } from 'src/app/services/subjects/subject-service.service';
import { Subject } from 'src/app/services/subjects/subject.model';

@Component({
  selector: 'app-sub-depend-table',
  templateUrl: './sub-depend-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class SubDependTableComponent implements OnInit {

  subDepends:Observable<{subjectID:number , dependID:number , subject:Subject , depend:Subject}[]>|any;
  load:boolean = true;
  delete:boolean = false;
  deleteId:number|any;
  search ='';
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
    this.subSer.getAllSubDepends().subscribe(
      (res)=>{
        this.subDepends = res.reverse();
        this.subSer.getSingleSubject(this.subDepends.subjectID).subscribe(
          (res0)=>{
            this.subDepends.subject = res0;
          }
        );
        this.subSer.getSingleSubject(this.subDepends.dependID).subscribe(
          (res1)=>{
            this.subDepends.depend = res1;
          }
        );
        this.load=false;
      },
      (error)=>{
        this.toastr.error('لقد حدث خطأ أثناء تحميل المتطلبات');
        this.toastr.info('حاول مرة أخرى');
        this.load=false;
      }
    );
  }
  ondelete(id:number){
    this.delete = true;
  }
  editMySubDepend(sid:number , did:number){
    this.router.navigate(['dash/addSubDepend' , sid , did]);
  }
  deleteSubDepend(){
    // let temp = `${sid}`+`${did}`;
    // let id = +temp;
    this.load = true;
    this.subSer.deleteSubDepend(this.deleteId).subscribe(
      (res)=>{
        if(res){
          this.toastr.success('لقد تم مسح المتطلب بنجاح');
          this.delete = false;
          this.reloadData();
        }
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء مسح المتطلب ');
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
