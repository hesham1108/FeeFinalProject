import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/departments/department-service.service';

@Component({
  selector: 'app-display-dep-content',
  templateUrl: './display-dep-content.component.html',
  styleUrls: ['./display-dep-content.component.scss']
})
export class DisplayDepContentComponent implements OnInit {
  body:any;
  constructor(private depSer: DepartmentService) {
    this.depSer.body.subscribe(
      (data)=>{
        this.body = data.body;
      }

    );
   }

  ngOnInit(): void {

  }

}
