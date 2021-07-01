import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/departments/department-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[DepartmentService]

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
