import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact/contact-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm:any;
  load:boolean = false;
  constructor(private fb:FormBuilder , private toastr:ToastrService, private conSer:ContactService) {
    this.contactForm = this.fb.group({
      name:[null],
      email:[null,[Validators.email]],
      phone:[null],
      topic:[null,[Validators.required]],
      message:[null,[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.load = true;
    let dataToPost:{email:string , subject:string , description:string}={
      email:this.contactForm.get('email').value,
      subject:this.contactForm.get('topic').value,
      description:this.contactForm.get('message').value
    };
    this.conSer.postContact(dataToPost).subscribe(
      (res)=>{
        console.log(res);
        this.toastr.success('لقد تم ارسال رسالتك بنجاح');
        this.toastr.success('تشرفنا بتواصلك معنا');
        this.load=false;
        this.contactForm.reset();
      },
      (error)=>{
        console.log(error);
        this.toastr.error('لقد حدث خطأ أثناء إرسال الرسالة');
        this.toastr.show('حاول مرة اخري');
        this.load=false;
      }
    );
  }

}
