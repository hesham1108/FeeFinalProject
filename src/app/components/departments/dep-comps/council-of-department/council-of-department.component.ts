import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/departments/department-service.service';

@Component({
  selector: 'app-council-of-department',
  templateUrl: './council-of-department.component.html',
  styleUrls: ['./council-of-department.component.scss']
})
export class CouncilOfDepartmentComponent implements OnInit {

  department:any;
  councils :{title:string , details:string }[]|any = [];
  load:boolean = true;
  constructor(private router:Router,private route:ActivatedRoute,private depSer:DepartmentService) { }
  id:number|any;

  ngOnInit(){
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
          this.councils = res.departmentReports;

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

}
