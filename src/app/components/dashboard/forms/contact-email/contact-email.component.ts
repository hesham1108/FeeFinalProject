import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact/contact-service.service';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-contact-email',
  templateUrl: './contact-email.component.html',
  styleUrls: ['./contact-email.component.scss']
})
export class ContactEmailComponent implements OnInit {
  contact:any;
  load = true;
  myemail:any;
  constructor(private fb:FormBuilder , private contSer: ContactService , private toastr:ToastrService , private newsSer:HomeNewsCardServiceService) {
    this.contact = this.fb.group({
      email:[null,[Validators.required , Validators.email]]
    })
  }

  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.reloadData();
  }
  reloadData(){
    this.contSer.getEmail().subscribe(
      (res)=>{
        this.myemail = res
        console.log(res);
        this.contact.reset();
        this.load = false;
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء تحميل البريد ');
        this.toastr.info('حاول مرة اخري');
        this.load=false;
      }
    );
  }
  onSubmit(){
    this.load = true;
    console.log(this.contact.get('email').value);

    this.contSer.postEmail(this.contact.get('email').value).subscribe(
      (res)=>{
        this.toastr.success('تم إضافة البريد بنجاح ');
        this.reloadData();
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء إضافة البريد ');
        this.toastr.info('حاول مرة اخري');
        this.load=false;
      }
    );
  }
}
