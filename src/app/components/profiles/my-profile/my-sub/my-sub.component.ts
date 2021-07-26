import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-my-sub',
  templateUrl: './my-sub.component.html',
  styleUrls: ['./my-sub.component.scss']
})
export class MySubComponent implements OnInit {
  load:boolean =true;
  subjects:any[]=[];
  constructor(
    private userSer:UserService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    var token:string|any = localStorage.getItem("token");
    this.userSer.getSingleUser(token).subscribe(
      (res)=>{

        if(res.roles.includes("Student")){
          this.subjects = res.userData.studentSubjects;
        }else  if(res.roles.includes("Staff")){
          this.subjects = res.userData.staffSubjects;
        }
        console.log(res);
        this.load=false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل المواد');
        this.toastr.info('حاول مرة اخري');
        this.load = false;
      }
    );
  }
}
