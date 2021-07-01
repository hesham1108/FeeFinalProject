import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dep-table',
  templateUrl: './dep-table.component.html',
  styleUrls: ['./dep-table.component.scss']
})
export class DepTableComponent implements OnInit {

  @Input() table:any;
  @Input() id:number|any;

  constructor() { }

  ngOnInit(): void {
  }
  goToTable(id:number){

  }
}
