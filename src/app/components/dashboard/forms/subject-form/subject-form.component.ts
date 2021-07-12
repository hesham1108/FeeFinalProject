import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {

  private allSubjects:any = [];
  subjectForm:any;
  load: boolean = false;
  edit:boolean =false;
  constructor(private fb : FormBuilder) {
    this.subjectForm = fb.group({
      title: [null , [Validators.required]],
      codeAr: [null , [Validators.required]],
      codeEn: [null , [Validators.required]],
      numOfHours:[null , [Validators.required]],
      maxDegree: [null , [Validators.required]],
      minDegree: [null , [Validators.required]],
      content : [null , [Validators.required]],
      dependOn: fb.array([]),




    })
   }

  ngOnInit(): void {
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



  ondelete(){

  }
}
