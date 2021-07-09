import { Component, OnInit } from '@angular/core';
import { FilterPipe } from './filter.pipe';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search='';


  folderObjs=[{
    name:'Folder1',
    size:'12mb'
  },{
    name:'Folder2',
    size:'10mb'
  },{
    name:'Folder3',
    size:'2mb'
  }]

  constructor() { }

  ngOnInit(): void {
  }


}
