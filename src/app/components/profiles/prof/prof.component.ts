import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfService } from 'src/app/services/prof/prof-service.service';
import { ProfModel } from 'src/app/services/prof/prof.model';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.scss'],
})
export class ProfComponent implements OnInit {

  curProf:ProfModel|any = [];

  profs:ProfModel[] |any;

  id:number|any;
  constructor(private profSer: ProfService , private route: ActivatedRoute) {


   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (p: Params) => {
        this.id = +p['id'];
        this.curProf = this.profSer.getProf(this.id);
      }
    );
    this.profs = this.profSer.getProfs();
  }




}
