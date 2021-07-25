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

  user:{}|any = {};
  roles:any[]=[];
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
            // we recieve the token here
            var authToken = res['token'];
            // store the token value on the localstorage to easly use it again
            localStorage.setItem("token",authToken);
            this.profileSer.login.next(true);
            this.taostr.success('تم تسجيل الدخول بنجاح');
            // see the role
            this.user = JSON.parse(atob(authToken.split('.')[1]));
            this.roles = this.user.role;
            console.log(this.roles);
            if(this.roles.includes('SuperAdmin') || this.roles.includes('Admin') ){
              this.router.navigate(['dash']);
            }else if(this.roles.includes('Student')){
              this.router.navigate(['']);
            }
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
}

checkAuth():boolean|any{
  if(this.loginForm.value.email == 'ha@ha.ha' && this.loginForm.value.password == '12345678'){
    return true;
  }else{
    return false;
  }
}
}
