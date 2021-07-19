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
export class DepartmentsComponent implements OnInit {

  department:Observable<Department>|any =null;
  num:number = 1;
  id:number|any = null;
  init:boolean|any;
  load:boolean = true;
  constructor(
    private depSer: DepartmentService ,
    private router: Router,
    private route: ActivatedRoute,
     ) {

  }

  ngOnInit(): void {

    // this.depSer.loadDep.subscribe(
    //   (data)=>{
    //     this.load = data;
    //   }
    // );
    this.reloadData();
  }
  reloadData(){
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
}
