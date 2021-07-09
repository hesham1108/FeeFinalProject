import { EventEmitter, Injectable } from "@angular/core";


@Injectable()

export class AboutService  {

  info:{title:string , content:string}|any = [
    {
      title: 'نبذة عن الكلية',
      content: 'إنها نبذة الكلية ',
    },
    {
      title: 'الرسالة',
      content: 'رسالة الكلية',
    },
    {
      title: 'الرؤية',
      content: 'رؤية الكلية  ',
    },
    {
      title: 'الأهداف',
      content:'أهداف الكلية'
    },
    {
      title: 'مشاكل التعليم',
      content: 'تعامل الكلية مع مشاكل التعليم',
    },
    {
      title: 'خدمة المجتمع',
      content: 'ما تقدمه الكلية لخدمة المجتمع',
    },
  ];

  obj = new EventEmitter<{title:string , content:string}>();
  currentObj: number |any;

  getInfo(){
    return this.info.slice();
  }
  getInfoLength(){
    return this.info.length;
  }

  getSingleInfo(id:number){
    return this.info[id];
  }

}
