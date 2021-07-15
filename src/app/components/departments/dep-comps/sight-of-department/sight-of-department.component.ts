import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sight-of-department',
  templateUrl: './sight-of-department.component.html',
  styleUrls: ['./sight-of-department.component.scss']
})
export class SightOfDepartmentComponent implements OnInit {

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
