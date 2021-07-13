import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit , OnDestroy {


  departmentForm:any;
  id:number|any;
  load:boolean = false;
  edit:boolean =false;
  delete:boolean = false;
  constructor(
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private newsSer:HomeNewsCardServiceService
    ) {
    this.departmentForm = this.fb.group({
      name:[null , [Validators.required]],
      about:[null , [Validators.required]],
      sight:[null , [Validators.required]],
      message:[null , [Validators.required]],
      goal:[null , [Validators.required]],
      bossWord:[null , [Validators.required]],
      labs:this.fb.array([]),
      council:this.fb.array([]),
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
        }
      }
    );

  }
  addLab(){
    const control = new FormControl(null,[Validators.required]);
    this.departmentForm.get('labs').push(control);
  }
  addCouncil(){
    const control = new FormControl(null,[Validators.required]);
    this.departmentForm.get('council').push(control);
  }
  deleteLab(i:any){
    this.departmentForm.get('labs').removeAt(i);
  }
  deleteCouncil(i:number){
    this.departmentForm.get('council').removeAt(i);
  }

  onSubmit(){
    document.documentElement.scrollTop = 0;
    console.log(this.departmentForm.value);
  }
  ngOnDestroy():void{
    this.newsSer.nothing.next(false);
    this.edit = false;
  }
  deleteDepartment(id:number|any){
    this.departmentForm.reset();
  }
  ondelete(){
    this.delete=true;
  }
  onCancel(){
    this.delete=false;
  }

}
