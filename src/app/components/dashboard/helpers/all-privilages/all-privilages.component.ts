import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-all-privilages',
  templateUrl: './all-privilages.component.html',
  styleUrls: ['../tables-style.scss']
})
export class AllPrivilagesComponent implements OnInit {
  load:boolean = true;
  delete:boolean = false;
  privilages:any=[];
  search = '';
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private userSer:UserService
  ) { }

  ngOnInit(): void {
    this.userSer.getPrivilage().subscribe(
      (res)=>{
        this.privilages = res.reverse();
        this.load=false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل الصلاحيات');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
        console.log(error);
      }
    );


  }

  goTo(dest:string){
    this.router.navigate([dest]);
  }

}
