import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card:{ title: string; img: string; desc: string; link: string; } | any ;
  @Input() id:number| any ;
  constructor( private router: Router) { }



  ngOnInit(): void {
  }
  goTo(dest:string){
    this.router.navigate([dest]);
  }
  goToNews(id:number){
    document.documentElement.scrollTop = 0;
    this.router.navigate(['news/',id]);
  }
}
