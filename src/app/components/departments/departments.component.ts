import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/departments/department-service.service';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
  providers:[DepartmentService]

})
export class DepartmentsComponent implements OnInit {

  departments:{name:string , children:boolean , content:[] , tables:[] }|any=[];
  departmentContent:any = [];
  constructor(private depSer: DepartmentService , private router: Router) {


  }

  ngOnInit(): void {
   if(this.departmentContent.length == 0){
    this.departments = this.depSer.getDepartments();
   }
  }

  displayContent(body:any){
    this.depSer.body.emit(body);
  }
  display(dep:any){
    this.departmentContent = dep.content;
  }

  goTo(id:number){
    document.documentElement.scrollTop = 0;
    this.router.navigate(['departments/',id]);
  }
}
