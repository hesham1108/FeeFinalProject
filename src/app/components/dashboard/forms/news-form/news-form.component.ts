import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/services/news/card.model';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit , OnDestroy{

  newsFrom:any;
  id:number|any;
  edit:boolean =false;
  news:Card|any;
  constructor(private fb: FormBuilder , private router: Router , private route:ActivatedRoute
    ,
    private newsSer: HomeNewsCardServiceService ) {
    this.newsFrom = this.fb.group({
      title: [null , [Validators.required , Validators.maxLength(50)]],
      category:[null , [Validators.required]],
      date:[null , [Validators.required ]],
      image:[null,[Validators.required]],
      desc:[null,[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit = true;
          this.id = +data['id'];
          this.news = this.newsSer.getCardFromAllCards(this.id);
          console.log(this.news.date);
          var recDate =new Date(this.news.date) ;
          console.log(recDate);

          var validDate = recDate.getDate()+"/"+recDate.getMonth()+"/"+recDate.getFullYear();
          console.log(validDate);


          this.newsFrom.get('title').setValue(this.news.title) ;
          this.newsFrom.get('category').value = this.news.category;
          this.newsFrom.get('date').setValue(validDate);
          this.newsFrom.get('image').setValue(this.news.img);
          this.newsFrom.get('desc').setValue(this.news.desc);
        }else{
          this.edit = false;
        }
      }
    );
  }
  onSubmit(){
    // console.log(this.newsFrom);
    // var currentNews:Card = {
    //   title: this.newsFrom.get('title').value,
    //   category:this.newsFrom.get('category').value,
    //   date:this.newsFrom.get('date').value,
    //   img:this.newsFrom.get('image').value,
    //   desc:this.newsFrom.get('desc').value,
    // }
    // if(this.edit){
    //   if(this.newsFrom.valid){
    //     document.documentElement.scrollTop = 0;
    //     // this.newsSer.allCards.splice(this.id ,1 ,currentNews);
    //     // this.router.navigate(['']);

    //   }
    // }else{
    //   if(this.newsFrom.valid){
    //     document.documentElement.scrollTop = 0;


    //     // this.newsSer.allCards.push(currentNews);

    //   }
    // }


  }

  deleteNews(i:number){
    console.log(i);

    this.newsSer.allCards.splice(i , 1);
    this.newsFrom.reset();
  }

  ngOnDestroy(): void {
    this.edit = false;
  }

}
