import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
@Component({
  selector: 'app-message-of-department',
  templateUrl: './message-of-department.component.html',
  styleUrls: ['./message-of-department.component.scss']
})
export class MessageOfDepartmentComponent implements OnInit {

  department:any;
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

}
