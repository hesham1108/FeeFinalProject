import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-labs-of-department',
  templateUrl: './labs-of-department.component.html',
  styleUrls: ['./labs-of-department.component.scss']
})
export class LabsOfDepartmentComponent implements OnInit {


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
