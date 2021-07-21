import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/departments/department-service.service';

@Component({
  selector: 'app-labs-of-department',
  templateUrl: './labs-of-department.component.html',
  styleUrls: ['./labs-of-department.component.scss']
})
export class LabsOfDepartmentComponent implements OnInit {

  department:any;
  id:number|any;
  load:boolean=true;
  labs:{name:string , roomNum:number , description:string}[]|any = [];
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
          console.log(res);

          this.department = res;
          this.labs = res.departmentLaps;
          console.log(this.labs);

          this.load = false;
        },
        (error)=>{
          console.log('shit');
          this.load = false;
        }
    );
      }
  }
  );
  }
}
