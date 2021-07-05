import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../../services/news/card.model';
import { HomeNewsCardServiceService } from '../../../services/news/home-news-card-service.service';

@Component({
  selector: 'app-home-news-card',
  templateUrl: './home-news-card.component.html',
  styleUrls: ['./home-news-card.component.scss']
})
export class HomeNewsCardComponent implements OnInit {

  cards:Card[]=[];
  constructor( private router:Router , private cardSer: HomeNewsCardServiceService)  {

  }

  ngOnInit(): void {

    this.cards = this.cardSer.getallCards();
    console.log(this.cards);

  }

  goTo(dest:string){
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest]);
  }
}
