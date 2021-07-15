import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-goal-of-department',
  templateUrl: './goal-of-department.component.html',
  styleUrls: ['./goal-of-department.component.scss']
})
export class GoalOfDepartmentComponent implements OnInit {


constructor(private router:Router,private route:ActivatedRoute) { }
  id:number|any;
  ngOnInit(): void {

    this.route.params.subscribe(
      (data)=>{
        this.id = +data['id'];
      }
    )
  }


}
