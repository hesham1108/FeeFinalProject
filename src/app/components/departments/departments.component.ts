import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  num:number = 1;
  id:number|any;
  init:boolean|any;
  constructor(
    private depSer: DepartmentService ,
    private router: Router,
    private route: ActivatedRoute,
     ) {


  }

  ngOnInit(): void {
    this.init = true;
    this.route.params.subscribe(
      (data)=>{
        this.id = +data['id'];
        }
    );
  }

  displayContent(body:any){
    // this.depSer.body.emit(body);
  }
  display(dep:any){
    this.departmentContent = dep.content;
  }

  goTo(dest:string , i:number){
    this.init = false;
    this.num = i;
    document.documentElement.scrollTop = 350;
    this.router.navigate([dest],{relativeTo: this.route});
  }
}
