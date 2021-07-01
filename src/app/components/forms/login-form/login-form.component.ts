import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm:any;
  constructor(private fb: FormBuilder , private loginSer:LoginServiceService  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email':[null , [Validators.required , Validators.email]],
      'password': [null , [Validators.required]]
    });
  }

  onSubmit(){
    console.log(this.loginForm);
    this.loginSer.login.next(true);
  }
}
