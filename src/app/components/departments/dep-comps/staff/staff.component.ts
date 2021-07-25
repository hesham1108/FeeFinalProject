import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/departments/department-service.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  department:any;
  id:number|any;
  load:boolean=true;
  staff:any;
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
          var allUsers = this.department.users;
          console.log(allUsers);
          var s:any[]=[];
          for(let u of allUsers){
            if(u.title == 'أعضاء هيئة التدريس' ){
              s.push(u);
            }
          }
          console.log(s);
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
