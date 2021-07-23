import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { Department } from 'src/app/services/departments/department.model';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
  providers:[DepartmentService]

})
export class DepartmentsComponent implements OnInit , OnChanges , OnDestroy{

  department:Observable<Department>|any =null;
  num:number|any;
  id:number|any = null;
  init:boolean|any;
  load:boolean = true;
  constructor(
    private depSer: DepartmentService ,
    private router: Router,
    private route: ActivatedRoute,
     ) {

  }

  ngOnChanges(){
    console.log('hi');

  }
  ngOnInit(): void {
    this.depSer.loadDep.subscribe(
      (res)=>{
        this.load=res;
      }
    );
    this.num = 1;
    this.reloadData();
  }
  reloadData(){
    this.num = 1;
    this.route.params.subscribe(
      (data)=>{
        this.id = +data['id'];
        this.depSer.getSingleDepartment(this.id).subscribe(
        (res)=>{
          this.department = res;
          this.init = true;
          this.load = false;
          this.depSer.loadDep.next(false);
        },
        (error)=>{
          // this.load =false;
          this.reloadData();
        }
    );
  }
  );
  }
  goTo(dest:string , i:number){
    // this.depSer.loadDep.next(true);
    this.init = false;
    this.num = i;
    document.documentElement.scrollTop = 350;
    this.router.navigate([dest , this.id],{relativeTo: this.route}   ) ;
  }

  ngOnDestroy(){
    this.num=1;
  }

}
