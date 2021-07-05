import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EventCardService } from '../../services/events/event-card.service';
import { HomeNewsCardServiceService } from '../../services/news/home-news-card-service.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  providers: []
})
export class PaginationComponent implements OnInit {

  @Input() numberOfPages : number | any;
  indexes: any=[];
  url:string|any;

  currentPage :number|any = 1;
  constructor( private newsSer: HomeNewsCardServiceService , private eventSer : EventCardService , private router: Router) {

  }

  ngOnInit(): void {
    for(let i = 1 ; i<= this.numberOfPages ; i++){
      this.indexes.push(i);
    }
    this.url = this.router.url;

    // console.log(this.router.url);

  }

  changePage(pageNumber: number){
    if(this.url == '/news'){
      this.newsSer.currentPageNumber = pageNumber;
      this.newsSer.currentPage.next(pageNumber);
      this.currentPage = this.newsSer.currentPageNumber;
    }else if(this.url == '/events'){
      this.eventSer.currentPageNumber = pageNumber;
      this.eventSer.currentPage.next(pageNumber);
      this.currentPage = this.eventSer.currentPageNumber;
    }

  }

  to(num:number){
    if(this.url == '/news'){
      this.newsSer.currentPageNumber = this.newsSer.currentPageNumber + num;
      if(this.newsSer.currentPageNumber < 1){
        this.newsSer.currentPageNumber = this.numberOfPages ;
      }else if(this.newsSer.currentPageNumber > this.numberOfPages){
        this.newsSer.currentPageNumber = 1;
      }
      this.newsSer.currentPage.next(this.newsSer.currentPageNumber);
      this.currentPage = this.newsSer.currentPageNumber;
      console.log(this.newsSer.currentPageNumber);
   }else if(this.url == '/events'){
      this.eventSer.currentPageNumber = this.eventSer.currentPageNumber + num;
      if(this.eventSer.currentPageNumber < 1){
        this.eventSer.currentPageNumber = this.numberOfPages ;
      }else if(this.eventSer.currentPageNumber > this.numberOfPages){
        this.eventSer.currentPageNumber = 1;
      }
      this.eventSer.currentPage.next(this.eventSer.currentPageNumber);
      this.currentPage = this.eventSer.currentPageNumber;
      console.log(this.eventSer.currentPageNumber);
   }
  }


}
