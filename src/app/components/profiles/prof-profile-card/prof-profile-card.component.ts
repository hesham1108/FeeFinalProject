import { Component, Input, OnInit } from '@angular/core';
import { ProfModel } from 'src/app/services/prof/prof.model';

@Component({
  selector: 'app-prof-profile-card',
  templateUrl: './prof-profile-card.component.html',
  styleUrls: ['./prof-profile-card.component.scss']
})
export class ProfProfileCardComponent implements OnInit {

  @Input() prof:ProfModel|any ;

  constructor() { }

  ngOnInit(): void {
  }

}
