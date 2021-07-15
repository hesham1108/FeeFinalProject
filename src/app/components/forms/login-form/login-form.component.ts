import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private taostr: ToastrService
    ) {
      this.loginForm = this.fb.group({
        email:[null , [Validators.required , Validators.email]],
        password: [null , [Validators.required , Validators.minLength(8)]]
      });
    }

  ngOnInit(): void {

  }

  onSubmit(){
    // this.load = true;
    if(this.checkAuth()){
      this.profileSer.role.next(true);
      this.profileSer.login.next(true);
      setTimeout(() => {
        console.log('2 sec');
        this.profileSer.role.subscribe(
          (data)=>{
            console.log(data);
            if(data){
              this.router.navigate(['dash']);
            }else{
              this.router.navigate(['home']);
            }
          }
        );
        }
      , 2000);

    }else{
      this.load = false;
      this.taostr.error('not allowed')
      this.loginForm.reset();
    }

}

checkAuth():boolean|any{
  if(this.loginForm.value.email == 'ha@ha.ha' && this.loginForm.value.password == '12345678'){
    return true;
  }else{
    return false;
  }
}
}
