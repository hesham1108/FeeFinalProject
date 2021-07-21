import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm:any;
  load:boolean=false;
  role:string|any;
  constructor(
    private fb: FormBuilder ,
    private router: Router,
    private profileSer:ProfileService,
    private taostr: ToastrService,
    private logSer:LoginServiceService
    ) {
      this.loginForm = this.fb.group({
        email:[null , [Validators.required , Validators.email]],
        password: [null , [Validators.required ]]
      });
    }

  ngOnInit(): void {

  }

  onSubmit(){
    this.load = true;
    let account:{email:string , password:string} = {
      email:this.loginForm.get('email').value,
      password:this.loginForm.get('password').value
    }

    this.logSer.postLogin(account).subscribe(
      (res:any)=>{
          if(res['success']){
            console.log(res);

            var authToken = res['token'];
            localStorage.setItem("token",authToken);
            this.profileSer.login.next(true);
            this.taostr.success('تم تسجيل الدخول بنجاح');
            this.router.navigate(['home']);
          }
        this.load=false;
      },
      (error)=>{
        console.log(error);
        this.load=false;
        this.taostr.info('حاول مرة اخري');
        this.taostr.error('حدث خطأ أُثناء تسجيل الدخول');
      }
    );
    // if(this.checkAuth()){
    //   this.profileSer.role.next(true);
    //   this.profileSer.login.next(true);
    //   setTimeout(() => {
    //     console.log('2 sec');
    //     this.profileSer.role.subscribe(
    //       (data)=>{
    //         console.log(data);
    //         if(data){
    //           this.router.navigate(['dash']);
    //         }else{
    //           this.router.navigate(['home']);
    //         }
    //       }
    //     );
    //     }
    //   , 2000);
    // }else{
    //   this.load = false;
    //   this.taostr.error('not allowed')
    //   this.loginForm.reset();
    // }

}

checkAuth():boolean|any{
  if(this.loginForm.value.email == 'ha@ha.ha' && this.loginForm.value.password == '12345678'){
    return true;
  }else{
    return false;
  }
}
}
