import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/departments/department-service.service';

@Component({
  selector: 'app-head-department',
  templateUrl: './head-department.component.html',
  styleUrls: ['./head-department.component.scss']
})
export class HeadDepartmentComponent implements OnInit {

  departments: any=[];
  children:any = [];
  constructor(private depSer :DepartmentService , private router: Router ) { }

  ngOnInit(): void {
    this.departments = this.depSer.getDepartments();
    this.children = this.depSer.getChildren();


  }

  goTo(id:number){
    document.documentElement.scrollTop = 0;
    this.router.navigate(['departments/',id]);
  }

  goToChild(id:number){
    document.documentElement.scrollTop = 0;
    this.router.navigate(['departments/',id]);
  }




}
