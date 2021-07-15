import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private newsSer: HomeNewsCardServiceService , private router: Router , private toastr:ToastrService) { }

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
        this.toastr.success('لقد تم مسح الخبر بنجاح');
        this.delete=false;
        this.reloadData();

      }
    },
    (error)=>{
      this.toastr.error('حدث خطأ أثناء مسح الخبر ');
      this.toastr.info('حاول مرة اخري');
    }
    );
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
