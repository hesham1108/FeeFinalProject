import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-privilages',
  templateUrl: './all-privilages.component.html',
  styleUrls: ['./all-privilages.component.scss']
})
export class AllPrivilagesComponent implements OnInit {
  load:boolean = false;
  delete:boolean = false;
  constructor(
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }
  ondelete(){
    this.delete = true;
  }
  deleteUser(id:number){
    console.log(id);
    this.toastr.success('لقد تم مسح الصلاحية بنجاح')

  }
  onCancel(){
    this.delete= false;
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }
}
