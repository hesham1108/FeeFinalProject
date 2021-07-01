import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {  Observable, of  } from 'rxjs';
import {delay, map} from 'rxjs/operators';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTest implements OnInit ,  AfterViewInit {

  // @ViewChild('dis') disapper:HTMLDivElement|any;
  // @ViewChild('f') myform:NgForm|any;

  // userdata = {
  //   username:'',
  //   email:'',
  //   secret: '',
  //   questionReply:'',
  //   gender:''
  // };

  // answer = '';
  // genders=['male' , 'female'];
  // defaultSelection :any = 'pet';
  // apperance = 'block';


  // haha(){

  //   // let x:any = this.disapper.nativeElement.classList;
  //   // if(x.contains('dis')){
  //   //   x.remove('dis');
  //   //   console.log(x);
  //   // }else{
  //   //   x.add('dis');
  //   //   console.log(x);

  //   // }

  //   var suggestedusername = 'hisha';
  //   this.myform.form.patchValue(
  //     {
  //       userdata: {
  //         username: suggestedusername
  //       }
  //     }
  //   );

  // }

  // onSubmit( form:NgForm){
  //     console.log(form);
  //     this.loginSer.login.next(true);

  //     this.userdata.username = form.value.userdata.username;
  //     this.userdata.email = form.value.userdata.email;
  //     this.userdata.secret = form.value.secret;
  //     this.userdata.questionReply = form.value.questionReply;
  //     this.userdata.gender = form.value.gender;

  //     console.log(this.userdata);


  // }

  genders=['male' , 'female'];
  signupForm : FormGroup|any;
  forbiddenUsernames = ['hadeer' , 'taleen'];
  constructor(private loginSer: LoginServiceService) {
  }
  ngAfterViewInit(): void {
  }


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl(null , [Validators.required , this.checkUsername.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email] ,[this.emailValidator()] )
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    this.signupForm.statusChanges.subscribe(
      (data : any)=>{
        console.log(data);

      }
    );

    this.signupForm.setValue({
      'userData':{
        'username':'hesham',
        'email':'hesham@hish.com'
      },
      'gender':'male',
      'hobbies':[]
    });
  }

  onAddHobby(){
    let control = new FormControl(null , [Validators.required]);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  onSubmit(){
    console.log(this.signupForm);
    this.loginSer.login.next(true);
    // this.signupForm.reset();
  }

  checkUsername(control: FormControl): {[s:string]:boolean}{
    if(this.forbiddenUsernames.includes(control.value)){
      return {'isUsernameForbidden':true};
    }
    return {};
  }

  // emailIsForbidden(control : FormControl): Promise<any>| Observable<any> {
  //   return new Promise<any>(
  //     (resolve , reject)=>{
  //       setTimeout(()=>{
  //         if(control.value == 'haha@haha.haha'){
  //           resolve({'forbddin': true});
  //         }else{
  //           resolve(null);
  //         }
  //       },1500);
  //     }
  //   );
  // }

  // we can use this function as a test
  forbEmail(control:string):Observable<boolean>{
    return of(control == "ha@ha.ha").pipe(delay(1000));
  }

  //here we can use of(the desired test) or the above function
  emailValidator():AsyncValidatorFn{
    return (control: AbstractControl):Observable<{[k:string]:boolean}|null> =>{
      return of(control.value == "ha@ha.ha").pipe( delay(1000),
        map(res=>{
          return res? {forbiddernEmail:true}:null;
        })
      );
    };
  }
}

