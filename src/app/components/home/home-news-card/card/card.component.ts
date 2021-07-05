import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { Card } from 'src/app/services/news/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card:Card | any ;
  @Input() id:number| any ;
  // admin:boolean = true;
  constructor( private router: Router) { }



  ngOnInit(): void {


  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }
  goToNews(id:number){
    document.documentElement.scrollTop = 0;
    this.router.navigate(['news/',this.card.id]);
  }
}
