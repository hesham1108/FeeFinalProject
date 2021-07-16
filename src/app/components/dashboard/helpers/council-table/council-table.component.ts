import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-council-table',
  templateUrl: './council-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class CouncilTableComponent implements OnInit {

  load:boolean = false;
  delete:boolean = false;
  constructor(
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }
  editMyCouncil(id:number){
    this.router.navigate(['dash/addCouncil' , id]);
  }
  ondelete(){
    this.delete = true;
  }
  deleteCouncil(id:number){
    console.log(id);
    this.toastr.success('لقد تم مسح المحضر بنجاح')
  }
  onCancel(){
    this.delete= false;
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }
}
