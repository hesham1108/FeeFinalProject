import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit , OnDestroy {

  private allSubjects:any = [];
  subjectForm:any;
  load: boolean = false;
  edit:boolean =false;
  id:number|any;
  delete:boolean = false;
  constructor(
    private fb : FormBuilder ,
    private newsSer:HomeNewsCardServiceService,
    private route:ActivatedRoute,
    private router:Router,
    ) {
    this.subjectForm = this.fb.group({
      title: [null , [Validators.required]],
      codeAr: [null , [Validators.required]],
      codeEn: [null , [Validators.required]],
      numOfHours:[null , [Validators.required]],
      maxDegree: [null , [Validators.required]],
      minDegree: [null , [Validators.required]],
      content : [null , [Validators.required]],
      departments:this.fb.array([]),
      dependOn: this.fb.array([]),

    })
   }

  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit = true;
          this.id = +data['id'];
        }else{
          this.edit = false;
          this.load=false;
        }
      }
    );
  }

  onSubmit(){
    document.documentElement.scrollTop = 0;
    console.log(this.subjectForm.value);

  }
  showMenu(){
    var options:HTMLElement |any= document.getElementById('options');
    if(options.style.display == "block"){
      options.style.display = "none";
    }else{
      options.style.display = "block";
    }
  }

  addDependant(){
    const control = new FormControl(null,[Validators.required]);
    this.subjectForm.get("dependOn").push(control);
  }
  deleteDepend(i:any){
    this.subjectForm.get('dependOn').removeAt(i);
  }
  addDepartment(){
    const control = new FormControl(null,[Validators.required]);
    this.subjectForm.get("departments").push(control);
  }
  deleteDepartment(i:any){
    this.subjectForm.get('departments').removeAt(i);
  }


  ngOnDestroy():void{
    this.newsSer.nothing.next(false);
    this.edit = false;
  }

  ondelete(){
    this.delete=true;
  }
  deleteSubject(id:number){
    this.subjectForm.reset();
  }
  onCancel(){
    this.delete=false;
  }
}
