import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SubjectService } from 'src/app/services/subjects/subject-service.service';
import { Subject } from 'src/app/services/subjects/subject.model';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-sub-depend-table',
  templateUrl: './sub-depend-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class SubDependTableComponent implements OnInit {

  subDepends:Observable<any[]>|any;
  load:boolean = true;
  delete:boolean = false;
  deleteId:number|any;
  search ='';
  tokenValue:string|any;
  subjectList:any[]=[];
  dropdownSettings:IDropdownSettings={};
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private subSer:SubjectService,
    private userSer:UserService
  ) { }

  ngOnInit(): void {

    this.tokenValue =  localStorage.getItem("token");
    if(this.tokenValue){
      this.userSer.getSingleUser(this.tokenValue).subscribe(
        (res)=>{
          if(res.roles.includes('Admin')||res.roles.includes('SuperAdmin')){
            this.reloadData();
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
    this.subSer.getAllSubjects().subscribe(
      (res)=>{
        this.subjectList = res;
        this.load = false;
      },
      (error)=>{
        this.toastr.error('لقد حدث خطأ أثناء تحميل المواد');
        this.toastr.info('حاول مرة أخري');
        this.load = false;
      }
    );
    this.dropdownSettings= {
      idField: 'id',
      textField:'name',
      singleSelection:true,
      searchPlaceholderText:'ابحث عن المادة',
      allowSearchFilter: true,
      itemsShowLimit: 3,
      showSelectedItemsAtTop: true,
      closeDropDownOnSelection:true,
      allowRemoteDataSearch:true
    };
    this.delete = false;
    document.documentElement.scrollTop = 0;

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

  onSelect(event:any){
    this.load = true
    console.log(event.id);
    let d :number[]|any;
    let ds:any[] = [];
    this.subSer.getAllSubDepends(event.id).subscribe(
      (res)=>{
        this.subDepends = res.dependOn;
        this.load=false;
      },
      (error)=>{
        this.toastr.error('لقد حدث خطأ أثناء تحميل المتطلبات');
        this.toastr.info('حاول مرة أخرى');
        this.load=false;
      }
    );

  }
  // (onSelect)="onItemSelect($event)"
}
