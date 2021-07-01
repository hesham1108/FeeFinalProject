import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '../event.model';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.scss']
})
export class SingleEventComponent implements OnInit {

  @Input() event: Events|any;
  @Input() id:number|any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goTo(dest: string){
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest]);
  }
  goToEvents(id: number){
    document.documentElement.scrollTop = 0;
    this.router.navigate(['events/',id]);
  }
}
