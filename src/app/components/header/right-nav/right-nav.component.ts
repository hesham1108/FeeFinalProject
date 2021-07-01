import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.scss']

})
export class RightNavComponent implements OnInit {


  constructor(private router: Router ) { }

  ngOnInit(): void {

  }
  goTo(dest: string){
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest]);
  }

}
