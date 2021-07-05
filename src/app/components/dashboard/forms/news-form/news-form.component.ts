import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';
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
      date:[null , [Validators.required ]],
      imagePath:[null,[Validators.required]],
      description:[null,[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit = true;
          this.id = +data['id'];
          console.log(this.id);

          this.newsSer.getCardFromAllCards(this.id).subscribe(
            (res)=> {
              console.log(res);
              if(res.status == 200){
                this.news = res.body;
                this.newsFrom.get('title').setValue(this.news.title) ;
                this.newsFrom.get('date').setValue(this.news.createdAt);
                this.newsFrom.get('description').setValue(this.news.description);
                this.newsFrom.get('imagePath').setValue(this.news.imagePath);
              }


            }
          );


          // var recDate =new Date(this.news.createdAt) ;

          // var validDate = recDate.getDate()+"/"+recDate.getMonth()+"/"+recDate.getFullYear();

        }else{
          this.edit = false;
        }
      }
    );
  }
  onSubmit(){
    // console.log(this.newsFrom);
    let dataToPost:{id?:number,title:string , createdAt: string , imagePath:string , description:string} = {
      id : this.id,
      title : this.newsFrom.get('title').value,
      createdAt: this.newsFrom.get('date').value,
      imagePath: this.newsFrom.get('imagePath').value,
      description : this.newsFrom.get('description').value,
    };


    if(this.edit){
      if(this.newsFrom.valid){
        document.documentElement.scrollTop = 0;
        this.newsSer.putNews(dataToPost).subscribe(
          (res)=>{
            console.log(res);
          }
        );
        // this.newsSer.allCards.splice(this.id ,1 ,currentNews);
        //this.newsSer.deleteNews().subscribe((res)=>{console.log(res);});
        // this.router.navigate(['news']);
      }
    }else{
      if(this.newsFrom.valid){
        document.documentElement.scrollTop = 0;
        this.newsSer.postNews(dataToPost).subscribe(
          (res)=>{
            console.log(res);

          }
        );
      }
    }


  }

  deleteNews(i:number){
    this.newsSer.deleteNews(i).subscribe((res)=>{console.log(res);});
    this.newsFrom.reset();
  }

  ngOnDestroy(): void {
    this.edit = false;
  }

}
