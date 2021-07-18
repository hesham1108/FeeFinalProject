import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { SubjectService } from 'src/app/services/subjects/subject-service.service';
import { Subject } from 'src/app/services/subjects/subject.model';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit , OnDestroy {
  subject:Observable<Subject>|any;
  departmentsList:any =[];
  dropdownSettings: IDropdownSettings = {};
  private allSubjects:any = [];
  subjectForm:any;
  load: boolean = true;
  edit:boolean =false;
  id:number|any;
  delete:boolean = false;
  constructor(
    private fb : FormBuilder ,
    private newsSer:HomeNewsCardServiceService,
    private route:ActivatedRoute,
    private router:Router,
    private toastr:ToastrService,
    private depSer:DepartmentService,
    private subSer:SubjectService
    ) {
    this.subjectForm = this.fb.group({
      name: [null , [Validators.required]],
      codeAR: [null , [Validators.required]],
      codeEN: [null , [Validators.required]],
      numOfHours:[null , [Validators.required]],
      maxDegree: [null , [Validators.required]],
      minDegree: [null , [Validators.required]],
      content : [null , [Validators.required]],
      department:[null,[Validators.required]],
    })
   }

  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.depSer.getAllDepartments().subscribe(
      (res)=>{
        this.departmentsList = res;
        this.load = false;
      },
      (error)=>{
        this.toastr.error('لقد حدث خطأ أثناء تحميل الأقسام');
        this.toastr.info('حاول مرة أخري');
        this.load = false;
      }
    );
    this.dropdownSettings={
      idField: 'id',
      textField:'name',
      singleSelection:true,
      searchPlaceholderText:'ابحث عن القسم',
      allowSearchFilter: true,
      itemsShowLimit: 3,
      showSelectedItemsAtTop: true,
      closeDropDownOnSelection:true,
      allowRemoteDataSearch:true
    }
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit = true;
          this.id = +data['id'];
          this.subSer.getSingleSubject(this.id).subscribe(
            (res)=>{
              this.subject = res;
              this.subjectForm.get('name').setValue(this.subject.name);
              this.subjectForm.get('codeAR').setValue(this.subject.codeAR);
              this.subjectForm.get('codeEN').setValue(this.subject.codeEN);
              this.subjectForm.get('numOfHours').setValue(this.subject.numOfHours);
              this.subjectForm.get('maxDegree').setValue(this.subject.maxDegree);
              this.subjectForm.get('minDegree').setValue(this.subject.minDegree);
              this.subjectForm.get('content').setValue(this.subject.content);
              // this.subjectForm.get('department').setValue({id:this.subject.departmentID});
              for(let d of this.departmentsList){
                if(d.id == this.subject.departmentID){
                  this.subjectForm.get('department').setValue([{id:d.id , name:d.name}]);
                }
              }
                this.load = false;
            },
            (error)=>{
              this.toastr.error('حدث خطأ أثناء تحميل المادة');
              this.toastr.info('حاول مرة اخري');
              this.load= false;
              this.router.navigate(['subjectsTable']);
            }
          );

        }else{
          this.edit = false;
          this.load = false;
        }
      }
    );
  }

  onSubmit(){
    document.documentElement.scrollTop = 0;
    this.load = true;


    let dataToPost:{id?:number , name:string ,codeAR:string,codeEN:string, numOfHours:number , maxDegree:number,minDegree:number,content:string ,departmentID:number}={
      id:this.id,
      name: this.subjectForm.get('name').value,
      codeAR: this.subjectForm.get('codeAR').value,
      codeEN: this.subjectForm.get('codeEN').value,
      numOfHours: this.subjectForm.get('numOfHours').value,
      maxDegree: this.subjectForm.get('maxDegree').value,
      minDegree: this.subjectForm.get('minDegree').value,
      content: this.subjectForm.get('content').value,
      departmentID:+this.subjectForm.get('department').value[0].id
    };


    if(this.edit){
      if(this.subjectForm.valid){
        // console.log('edit');
        this.subSer.putSubject(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم  تعديل المادة بنجاح');
            document.documentElement.scrollTop = 0;
            this.router.navigate(['subjectsTable']);
          },
          (error)=>{
            this.toastr.error('حدث خطأ أثناء تعديل المادة');
            this.toastr.info('حاول مرة اخري');
            this.load= false;
          }
        );
      }
    }else{
      if(this.subjectForm.valid){
        this.subSer.postSubject(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم  إضافة المادة بنجاح');
            document.documentElement.scrollTop = 0;
            this.router.navigate(['subjectsTable']);
          },
          (error)=>{
            this.toastr.error('حدث خطأ أثناء إضافة المادة ');
            this.toastr.info('حاول مرة اخري');
            this.load= false;
            console.log(error);

          }
        );
      }
    }
  }

  ngOnDestroy():void{
    this.newsSer.nothing.next(false);
    this.edit = false;
  }

  ondelete(){
    this.delete=true;
  }
  deleteSubject(id:number|any){
    this.load = true;
    this.subSer.deleteSubject(id).subscribe(
      (res)=>{
        if(res){
          this.toastr.success('لقد تم مسح المادة  بنجاح');
          this.load = false;
          this.delete = false;
          document.documentElement.scrollTop = 0;
          this.router.navigate(['subjectsTable']);
        }
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء مسح المادة  ');
        this.toastr.info('حاول مرة اخري');
        this.load=false;
      }
    );
    this.subjectForm.reset();
    this.onCancel();
  }
  onCancel(){
    this.delete=false;
  }
}






// height: calc(1.5em + 1rem + 2px);
//     padding: 0.5rem 1rem;
//     font-size: 1.25rem;
//     line-height: 1.5;
//     border-radius: 0.3rem;
