import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  news_cards : Card[] = [];
  numberOfPages:number| any ;
  cardsToDisplay: Card[] = [];
  divider:number = 10;


  constructor(private newsSer: HomeNewsCardServiceService , private router: Router) {
    this.news_cards = this.newsSer.getallCards();
    this.currsub= this.newsSer.currentPage.subscribe(
      (data)=>{
          this.getdisplayedCards(data);
      }
    );
  }

  ngOnInit(): void {

    this.numberOfPages = Math.ceil(this.newsSer.getallCardsLength() / this.divider);


    console.log('all cards length '+ this.newsSer.getallCardsLength());

    console.log('number of pages :- '+this.numberOfPages);

    this.getdisplayedCards(1);



  }

  getdisplayedCards(id:number = 1){
        this.cardsToDisplay=[];
        for(let i = (id*this.divider - this.divider) ; i < id*this.divider && i< this.newsSer.getallCardsLength() ;  i++ ){
            this.cardsToDisplay.push(this.news_cards[i]);
        }

        document.documentElement.scrollTop = 0;

  }

  ngOnDestroy():void{
    this.currsub.unsubscribe();
  }

}


