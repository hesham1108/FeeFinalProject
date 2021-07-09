import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from 'src/app/services/news/card.model';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.scss' ]
})
export class NewsTableComponent implements OnInit {

  allNews: Observable<Card[]>|any;
  load:boolean = true;
  delete:boolean = false;
  constructor(private newsSer: HomeNewsCardServiceService , private router: Router) { }

  ngOnInit(): void {
   this.reloadData();
  }

  reloadData(){
    this.newsSer.getAllCards().subscribe(
      (res)=>{
      this.allNews = res;
      this.load = false;
      }
    );


  }

  editMyNews(id:number){
    this.router.navigate(['dash/addNews/' , id]);
  }

  /// delete from the table
  deleteMyNews(id:number){
    document.documentElement.scrollTop = 0;
    this.load=true;
    this.newsSer.deleteNews(id).subscribe(
      (resp)=>{
      if(resp){
        this.delete=false;
        this.reloadData();

      }
    });
  }

  goTo(dest:string){
    this.router.navigate([dest]);
  }


  ondelete(){
      this.delete = true;
  }
  onCancel(){
      this.delete=false;
  }

}
