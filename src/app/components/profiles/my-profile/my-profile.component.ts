import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  user:any;
  load:boolean = true;
  constructor(private userSer:UserService,private toastr:ToastrService, private router : Router) { }

  ngOnInit(): void {
    var token:string|any = localStorage.getItem("token");
    this.userSer.getSingleUser(token).subscribe(
      (res)=>{
        this.user = res
        console.log(res);

        this.load=false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل بيانات الملف الشخصي');
        this.toastr.info('حاول مرة اخري');
        this.router.navigate(['']);
      }
    );
  }

}
