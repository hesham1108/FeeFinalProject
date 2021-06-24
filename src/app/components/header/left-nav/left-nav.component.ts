import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goTo(dest: string){
    this.router.navigate([dest]);
  }
}
