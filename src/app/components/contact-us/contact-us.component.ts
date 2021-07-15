import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm:any;
  load:boolean = false;
  constructor(private fb:FormBuilder , private toastr:ToastrService) {
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

    this.toastr.success('لقد تم الإرسال بنجاح')
    this.contactForm.reset();

  }

}
