import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Card } from '../../home/home-news-card/card.model';
import { HomeNewsCardServiceService } from '../../home/home-news-card/home-news-card-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  id:number|any;
  news: Card|any;
  newsLength:number| any;


  constructor(private newSer: HomeNewsCardServiceService ,
      private route: ActivatedRoute,
      private router: Router
      ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (p: Params) => {
        this.id = +p['id'];
        this.news = this.newSer.getCard(this.id);
      }
    );

    this.newsLength = this.newSer.getCardsLength();


  }

  goto(dest:string){
    this.router.navigate([dest]);
  }
  goTo(i: number){
    this.id += i;
    if(this.id < 0 ){
        this.id = this.newsLength-1;
        // console.log(this.id);

    }else if( this.id == this.newsLength){
      this.id = 0;
      // console.log(this.id);

    }
    document.documentElement.scrollTop = 0;
    this.router.navigate(['news/',this.id]);
  }
}
