import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-statistics',
  templateUrl: './home-statistics.component.html',
  styleUrls: ['./home-statistics.component.scss']
})
export class HomeStatisticsComponent implements OnInit {

 statistics = [
   {
     icon: 'fas fa-users fa-4x',
     title: 'الطلاب',
     startnumber: 0,
     endnumber: 11287,
   },
   {
    icon: 'fas fa-user-graduate fa-4x',
    title: 'الخرجيين',
    startnumber: 0,
    endnumber: 2231,
   },
  {
    icon: 'fas fa-chalkboard-teacher fa-4x',
    title: 'هيئة التدريس',
    startnumber: 0,
    endnumber: 586,
  },
  {
    icon: 'fas fa-handshake fa-4x',
    title: 'الموظفين',
    startnumber: 0,
    endnumber: 560,
  },
 ]

 students:any = setInterval(()=>{
    this.statistics[0].startnumber++;
    if(this.statistics[0].startnumber == this.statistics[0].endnumber){
      clearInterval(this.students);
    }
  },0.5);
  graduators:any = setInterval(()=>{
    this.statistics[1].startnumber++;
    if(this.statistics[1].startnumber == this.statistics[1].endnumber){
      clearInterval(this.graduators);
    }
  },1);
  staff:any = setInterval(()=>{
    this.statistics[2].startnumber++;
    if(this.statistics[2].startnumber == this.statistics[2].endnumber){
      clearInterval(this.staff);
    }
  },5);
  emplyees:any = setInterval(()=>{
    this.statistics[3].startnumber++;
    if(this.statistics[3].startnumber == this.statistics[3].endnumber){
      clearInterval(this.emplyees);
    }
  },5);

  constructor() { }




  ngOnInit(): void {

  }

  increase(end: number ,start:number){
    start=0;
    var endnum = setInterval(()=>{
      start++;
      if(start == end){
        clearInterval(endnum);
      }
    },10)
  }
}
