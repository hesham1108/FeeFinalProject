import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-council-of-department',
  templateUrl: './council-of-department.component.html',
  styleUrls: ['./council-of-department.component.scss']
})
export class CouncilOfDepartmentComponent implements OnInit {

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
