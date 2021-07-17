import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventCardService } from 'src/app/services/events/event-card.service';
import { Card } from '../../../services/news/card.model';
import { HomeNewsCardServiceService } from '../../../services/news/home-news-card-service.service';

@Component({
  selector: 'app-home-news-card',
  templateUrl: './home-news-card.component.html',
  styleUrls: ['./home-news-card.component.scss']
})
export class HomeNewsCardComponent implements OnInit {

  homeCards:Card[]=[];
  constructor( private router:Router , private cardSer: HomeNewsCardServiceService , private eventSer:EventCardService)  {

  }

  ngOnInit(): void {
    var firstThreeCards:Card[]=[];
    this.cardSer.getAllCards().subscribe(
      (res)=>{
        // console.log(res);
        if(res.length < 3){
          this.homeCards = res;
          console.log(res);

        }else{
          for(let i = 0 ; i<3 ; i++){
            firstThreeCards.push(res[i]);
          }
          this.homeCards = firstThreeCards;
      }

        this.cardSer.newsload.next(false);

      },
      (error)=>{
        console.log(error);

      }
    );

  }

  goTo(dest:string){
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest]);
  }
}
