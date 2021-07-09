import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Card } from '../../services/news/card.model';
import { HomeNewsCardServiceService } from '../../services/news/home-news-card-service.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss'],
  providers: []
})
export class AllNewsComponent implements OnInit , OnDestroy{

  private currsub:Subscription|any;
  news_cards : Observable<Card[]>|any = [];
  numberOfPages:number| any ;
  cardsToDisplay: Card[] = [];
  divider:number = 10;
  load:boolean =true;

  constructor(private newsSer: HomeNewsCardServiceService , private router: Router) {

    this.currsub= this.newsSer.currentPage.subscribe(
      (data)=>{
          this.getdisplayedCards(data);
      }
    );
  }

  ngOnInit(): void {

    this.loadData();

  }

  loadData(){
    this.newsSer.getAllCards().subscribe(
      (res)=>{
        this.news_cards = res;
        this.numberOfPages = Math.ceil(this.news_cards.length / this.divider);
        this.getdisplayedCards(1);
        this.load = false;
      }
    );
  }

  getdisplayedCards(id:number = 1){
        this.cardsToDisplay=[];
        for(let i = (id*this.divider - this.divider) ; i < id*this.divider && i< this.news_cards.length ;  i++ ){
            this.cardsToDisplay.push(this.news_cards[i]);
        }

        document.documentElement.scrollTop = 0;

  }

  ngOnDestroy():void{
    this.currsub.unsubscribe();
  }

}


