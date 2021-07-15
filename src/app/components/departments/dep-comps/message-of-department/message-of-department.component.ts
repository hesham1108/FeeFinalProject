import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-message-of-department',
  templateUrl: './message-of-department.component.html',
  styleUrls: ['./message-of-department.component.scss']
})
export class MessageOfDepartmentComponent implements OnInit {


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
