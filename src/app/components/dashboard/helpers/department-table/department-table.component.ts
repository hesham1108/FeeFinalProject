import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.scss']
})
export class DepartmentTableComponent implements OnInit {

  load:boolean = false;
  delete:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }
}
