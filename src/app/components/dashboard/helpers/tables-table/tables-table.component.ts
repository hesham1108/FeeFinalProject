import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tables-table',
  templateUrl: './tables-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class TablesTableComponent implements OnInit {
  search='';
  load:boolean = false;
  delete:boolean = false;
  constructor(
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }

  editTale(id:number){
    this.router.navigate(['dash/addTable' , id]);
  }
  ondelete(){
    this.delete = true;
  }
  deleteTable(id:number){
    console.log(id);
    this.toastr.success('لقد تم مسح المادة بنجاح')
  }
  onCancel(){
    this.delete= false;
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }
}
