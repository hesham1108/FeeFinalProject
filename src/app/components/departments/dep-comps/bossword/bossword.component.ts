import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-bossword',
  templateUrl: './bossword.component.html',
  styleUrls: ['./bossword.component.scss']
})
export class BosswordComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  id:number|any;
  ngOnInit(): void {

    this.route.params.subscribe(
      (data)=>{
        this.id = +data['id'];
      }
    )
  }

}
