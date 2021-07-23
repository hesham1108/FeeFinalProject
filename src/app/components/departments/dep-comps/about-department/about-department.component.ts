import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
import { Department } from 'src/app/services/departments/department.model';

@Component({
  selector: 'app-about-department',
  templateUrl: './about-department.component.html',
  styleUrls: ['./about-department.component.scss']
})
export class AboutDepartmentComponent implements OnInit , OnDestroy {

  department:Observable<Department>|any;
  id:number|any;
  load:boolean=true;
  constructor(private router:Router,private route:ActivatedRoute,private depSer:DepartmentService) { }


  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
        this.id = +data['id'];
        this.depSer.getSingleDepartment(this.id).subscribe(
        (res)=>{
          this.department = res;
          this.load = false;
        },
        (error)=>{
          console.log('shit');
        }
    );
      }
  }
  );
  }
  ngOnDestroy(){
    this.load = true;
  }

}
