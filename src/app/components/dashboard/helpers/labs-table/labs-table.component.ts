import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-labs-table',
  templateUrl: './labs-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class LabsTableComponent implements OnInit {
  load:boolean = false;
  delete:boolean = false;
  constructor(
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }
  editMyLab(id:number){
    this.router.navigate(['dash/addLab' , id]);
  }
  ondelete(){
    this.delete = true;
  }
  deleteLab(id:number){
    console.log(id);
    this.toastr.success('لقد تم مسح المعمل بنجاح')
  }
  onCancel(){
    this.delete= false;
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }

}
