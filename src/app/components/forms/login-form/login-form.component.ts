import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm:any;
  constructor(private fb: FormBuilder , private loginSer:LoginServiceService ,private router: Router ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[null , [Validators.required , Validators.email]],
      password: [null , [Validators.required , Validators.minLength(8)]]
    });
  }

  onSubmit(){
    console.log(this.loginForm);
    this.loginSer.login.next(true);
    document.documentElement.scrollTop = 0;
    this.router.navigate(['']);

  }
}
