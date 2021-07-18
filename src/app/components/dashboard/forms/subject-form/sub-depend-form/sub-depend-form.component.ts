import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SubjectService } from 'src/app/services/subjects/subject-service.service';
import { Subject } from 'src/app/services/subjects/subject.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-depend-form',
  templateUrl: './sub-depend-form.component.html',
  styleUrls: ['./sub-depend-form.component.scss']
})
export class SubDependFormComponent implements OnInit , OnDestroy {

  subjectList:Observable<Subject[]>|any = [];
  dependList:Observable<Subject[]>|any = [];
  dropdownSettings:IDropdownSettings = {};
  subject:any;
  subDependForm:any;
  id:number|any;
  load:boolean = false;
  edit:boolean = false;
  delete:boolean = false;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private newsSer: HomeNewsCardServiceService,
    private subSer:SubjectService
  ) {
    this.subDependForm = this.fb.group({
      subject:[null,[Validators.required]],
      depend:[null,[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.newsSer.nothing.next(false);
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

    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit = true;
          this.id = +data['id'];
          this.subSer.getSingleSubject(this.id).subscribe(
            (res)=>{
              this.subject = res;
              for(let s of this.subjectList){
                if(s.id == this.subject.id){
                  this.subDependForm.get('subject').setValue([{id:s.id , name:s.name}]);
                }
              }
              for(let sd of this.subjectList){
                if(sd.id == this.subject.dependID){
                  this.subDependForm.get('depend').setValue([{id:sd.id , name:sd.name}]);
                }
              }
                this.load = false;
            }
          );
        }else{
          this.edit = false;
          this.load=false;
        }
      }
    );
  }
  onSubmit(){
    document.documentElement.scrollTop = 0;
    // console.log(this.subDependForm.value);
    if(this.edit){
      if(this.subDependForm.valid){
        this.toastr.success('لقد تم  إضافة المتطلب بنجاح');
        console.log(this.subDependForm.value);
      }
    }else{
      if(this.subDependForm.valid){
        this.toastr.success('لقد تم  تعديل المتطلب بنجاح');
        console.log(this.subDependForm.value);
      }
    }
  }

  deleteDepend(id:number|any){
    this.toastr.success('لقد تم مسح المتطلب بنجاح');
    this.subDependForm.reset();
    this.onCancel();
  }
  ondelete(){
    this.delete=true;
  }
  onCancel(){
    this.delete=false;
  }
  ngOnDestroy():void{
    this.newsSer.nothing.next(false);
    this.edit = false;
  }
  onSelect(item:any){
    var temp =[];
    for(let l of this.subjectList){
      if(l != item){
        temp.push(l);
      }
    }
    this.dependList = temp;
  }

}
