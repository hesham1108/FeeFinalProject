import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tables-table',
  templateUrl: './tables-table.component.html',
  styleUrls: ['./tables-table.component.scss']
})
export class TablesTableComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (data)=>{
        console.log(data.type);

      }
    )
  }

}
