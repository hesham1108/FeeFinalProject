import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { UserService } from 'src/app/services/user/user-service';

@Component({
  selector: 'app-privilage-form',
  templateUrl: './privilage-form.component.html',
  styleUrls: ['./privilage-form.component.scss']
})
export class PrivilageFormComponent implements OnInit {

  privilageForm:any;
  load:boolean = true;

  constructor(
    private fb:FormBuilder,
    private toastr:ToastrService,
    private router:Router,
    private route:ActivatedRoute,
    private newsSer:HomeNewsCardServiceService,
    private userSer:UserService
    ) {
      this.privilageForm = this.fb.group({
        name:[null,[Validators.required]],
        })
    }


  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.load=false;
  }

  onSubmit(){
    this.load = true;
    let dataToPost:{name:string}={
      name:this.privilageForm.get('name').value
    };
    this.userSer.postRole(dataToPost).subscribe(
      (res)=>{
        console.log(res);
        this.toastr.success('لقد تم إضافة الصلاحية بنجاح');
        this.router.navigate(['allPrivilages']);
      },
      (error)=>{
        console.log(error);
        this.toastr.error('حدث خطأ أثناء إضافة الصلاحية ');
        this.toastr.info('حاول مرة اخري');
        this.load=false;
      }
    );
  }

}
