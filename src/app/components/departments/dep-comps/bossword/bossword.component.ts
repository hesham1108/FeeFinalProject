import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';
import { DepartmentService } from 'src/app/services/departments/department-service.service';
@Component({
  selector: 'app-bossword',
  templateUrl: './bossword.component.html',
  styleUrls: ['./bossword.component.scss']
})
export class BosswordComponent implements OnInit {

  department:any;
  load:boolean = true;
  constructor(private router:Router,private route:ActivatedRoute , private depSer: DepartmentService) { }
  id:number|any;
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
