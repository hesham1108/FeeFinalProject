import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ProfModel } from "./prof.model";

@Injectable({
  providedIn:'root'
})

export class ProfService{

  profs:ProfModel[] =[
      new ProfModel(
        0,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqeiMvcMA8ATx6McIgv0QgGq9njL6_9Q9Ww&usqp=CAU',
        'هبة عثمان',
        'استاذ متفرغ',
        'قسم حاسبات ',
        'أمين المكتبة'
      ),
      new ProfModel(
        1,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqeiMvcMA8ATx6McIgv0QgGq9njL6_9Q9Ww&usqp=CAU',
        'هشام عثمان' ,
       'استاذ متفرغ',
       'قسم حاسبات ',
        'عميد الكلية' ),
      new ProfModel(
        2,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqeiMvcMA8ATx6McIgv0QgGq9njL6_9Q9Ww&usqp=CAU',
        'محمد عثمان' ,
      'استاذ متفرغ' ,
       'قسم حاسبات  ' ,
       'وكيل الكلية'
       ),
      new ProfModel(
        3,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqeiMvcMA8ATx6McIgv0QgGq9njL6_9Q9Ww&usqp=CAU',
        'اميمة عثمان' ,
      'استاذ متفرغ' ,
      'قسم تحكم  ' ,
      'رئيس قسم حاسبات' ),
      new ProfModel(
        4,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqeiMvcMA8ATx6McIgv0QgGq9njL6_9Q9Ww&usqp=CAU',
        'هدير عثمان' ,
      'استاذ متفرغ' ,
      'قسم اتصالات  ' ,
      'رئيس قسم تحكم' ),
      new ProfModel(
        5,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqeiMvcMA8ATx6McIgv0QgGq9njL6_9Q9Ww&usqp=CAU',
        'احمد عثمان' ,
      'استاذ متفرغ' ,
       'قسم طبية  ' ,
       ' وكيل شئون الطلاب' ),
  ]
  // we need next instead of emit
  // and remember you need to store the subscribtion and subscribe onDestroy
  currentProf = new Subject<ProfModel>();
  getProfs(){
    return this.profs.slice();
  }

  getProf(id:number){
    return this.profs[id];
  }

  getProfByPosition(p:string){
    for(let prof of this.profs ){
      if(prof.position.includes(p)){
        return prof;
      }
    }
    return null;
  }

  getProfBydep(d:string){
    var prof_dep:ProfModel[] = [];
    for(let prof of this.profs ){
      if(prof.position.includes(d)){
         prof_dep.push( prof);
      }
    }
    return prof_dep;
  }

}
