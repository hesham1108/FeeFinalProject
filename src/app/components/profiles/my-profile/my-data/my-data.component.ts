import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent implements OnInit {

  load:boolean =true;
  user:any;
  constructor(
    private userSer:UserService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    var token:string|any = localStorage.getItem("token");
    this.userSer.getSingleUser(token).subscribe(
      (res)=>{
        this.user = res
        console.log(res);
        this.load=false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل البيانات');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
      }
    );
  }
}
