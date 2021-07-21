import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { Department } from 'src/app/services/departments/department.model';

@Component({
  selector: 'app-head-department',
  templateUrl: './head-department.component.html',
  styleUrls: ['./head-department.component.scss']
})
export class HeadDepartmentComponent implements OnInit {

  departments:Observable<Department>| any=[];
  load:boolean = true;
  constructor(private depSer :DepartmentService , private router: Router ) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.depSer.getAllDepartments().subscribe(
      (res)=>{
        this.departments = res;
        this.load = false;
      },
      (error)=>{
        this.load = false;
        this.reloadData();
      }
    );
  }
  goToDepartment(id:number){
    this.depSer.loadDep.next(true);
    document.documentElement.scrollTop = 0;
    this.router.navigate(['departments/',id]);
  }







}
