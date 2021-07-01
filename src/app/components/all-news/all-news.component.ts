import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Card } from '../home/home-news-card/card.model';
import { HomeNewsCardServiceService } from '../home/home-news-card/home-news-card-service.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss'],
  providers: [HomeNewsCardServiceService]
})
export class AllNewsComponent implements OnInit , OnDestroy{

  private currsub:Subscription|any;
  news_cards : Card[] = [];
  numberOfPages:number| any ;
  cardsToDisplay: Card[] = [];
  divider:number = 10;
  constructor(private newsSer: HomeNewsCardServiceService , private router: Router) {
    this.currsub= this.newsSer.currentPage.subscribe(
      (data)=>{
          this.getdisplayedCards(data);
      }
    );
  }

  ngOnInit(): void {
    this.news_cards = this.newsSer.getallCards();
    this.numberOfPages = Math.ceil(this.newsSer.getallCardsLength() / this.divider);
    this.getdisplayedCards(1);
    // console.log(this.numberOfPages);


  }

  getdisplayedCards(id:number = 1){
        this.cardsToDisplay=[];
        for(let i = (id*this.divider - this.divider) ; i < id*this.divider && i< this.newsSer.getallCardsLength() ;  i++ ){
            this.cardsToDisplay.push(this.news_cards[i]);
        }
        document.documentElement.scrollTop = 0;
        // console.log(this.cardsToDisplay);
        // console.log(id);
  }

  ngOnDestroy():void{
    this.currsub.unsubscribe();
  }

}


