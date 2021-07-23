import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  labs:any = [];
  f:boolean|any;
  constructor(private router:Router,private route:ActivatedRoute,private depSer:DepartmentService,private toastr:ToastrService) { }

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
          if(res.departmentLabs.length){
            this.labs = res.departmentLabs;
            this.f=true
          }else{
            this.f= false;
          }
          this.load = false;
        },
        (error)=>{
          console.log(error);
          this.toastr.error('حدث خطأ أثناء تحميل محاضر المجالس')
          this.toastr.info('حاول مرة أخرى')
          this.load = false;
        }
    );
      }
  }
  );
  }
}
