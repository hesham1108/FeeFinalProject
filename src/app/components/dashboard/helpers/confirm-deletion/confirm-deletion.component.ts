import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { EventCardService } from 'src/app/services/events/event-card.service';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-confirm-deletion',
  templateUrl: './confirm-deletion.component.html',
  styleUrls: ['./confirm-deletion.component.scss']
})
export class ConfirmDeletionComponent implements OnInit {

  @Input() content:string|any = '';
  @Output() cancel = new EventEmitter<void>();
  @Output() res = new EventEmitter<void>()
  constructor(private newsSer: HomeNewsCardServiceService,private eventSer:EventCardService) { }

  ngOnInit(): void {
  }
  onDelete(){
    this.res.emit();
  }

  onCancel(){
    this.cancel.emit();
  }

}
