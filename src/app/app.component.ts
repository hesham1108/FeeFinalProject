import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  load:boolean = true;
  // tokenValue = localStorage.getItem("token")
  constructor(){}
  ngOnInit(){
    // localStorage.setItem("token",'');
  }
}
