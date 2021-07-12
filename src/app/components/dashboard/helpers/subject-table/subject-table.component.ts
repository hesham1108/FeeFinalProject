import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss']
})
export class SubjectTableComponent implements OnInit {

  load:boolean = false;
  delete:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }

}
