import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { PageService } from 'src/app/services/pages/pages.service';

@Component({
  selector: 'app-main-bar-form',
  templateUrl: './main-bar-form.component.html',
  styleUrls: ['./main-bar-form.component.scss']
})
export class MainBarFormComponent implements OnInit {

  load:boolean = true;
  delete:boolean = false;
  edit:boolean = false;
  mainBarForm :any;
  id:number|any;
  mainBar:any;
  constructor(
    private fb:FormBuilder,
    private newsSer: HomeNewsCardServiceService,
    private pageSer: PageService,
    private toastr: ToastrService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.mainBarForm = this.fb.group({
      title:[null,[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit=true;
          this.id= +data['id'];
          this.pageSer.getSingleMainBar(+data['id']).subscribe(
          (res)=>{
            this.mainBar = res;
            this.mainBarForm.get('title').setValue(this.mainBar.title);
          }
          );
        }
      }
    );
  }

}
