import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-boss-of-department',
  templateUrl: './boss-of-department.component.html',
  styleUrls: ['./boss-of-department.component.scss']
})
export class BossOfDepartmentComponent implements OnInit {

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
