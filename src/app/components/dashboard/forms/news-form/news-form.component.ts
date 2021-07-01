import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  newsFrom:any;
  constructor(private fb: FormBuilder , private router: Router) {
    this.newsFrom = this.fb.group({
      title: [null , [Validators.required , Validators.maxLength(50)]],
      date:[null , [Validators.required ]],
      desc:[null,[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.newsFrom);
    if(this.newsFrom.valid){
      document.documentElement.scrollTop = 0;
      // this.router.navigate(['']);
    }

  }
}
