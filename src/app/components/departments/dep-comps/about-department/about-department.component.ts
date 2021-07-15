import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-department',
  templateUrl: './about-department.component.html',
  styleUrls: ['./about-department.component.scss']
})
export class AboutDepartmentComponent implements OnInit {

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
