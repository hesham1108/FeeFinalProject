import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Card } from './card.model';



@Injectable({
  providedIn: 'root'
})
export class HomeNewsCardServiceService {

  cards:Card[]=[
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      '    سيبنل مسيبنل سميبنل سميبنتل سميل لكم فى القصاص حياة يا أولى الألباب و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
  ]
  allCards:Card[] = [
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
    new Card(
      'ندوة تعريفية بعنوان من اجل التوظيف 1',
      'cs',
      "06-08-2020",
      'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ' و لكم فى القصاص حياة يا أولى الألباب ',
      ''
    ),
  ];
  // cards   =  [
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     category:'',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '2 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category:'',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' 3 و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: ' 3 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category:'',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '4 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category:'',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '5 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category:'',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' حصل مجموعة من الطلاب على المركز الأول فى مسابقة عصير القصب ',
  //     link: ''
  //   },
  //   {
  //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category:'',
  //     date: '06-08-2020',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },

  // ] ;

  // allCards = [
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     category:'cs',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     category:'cs',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     category:'cs',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     category:'cs',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     category:'cs',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     category:'cs',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 7',
  //     category:'ce',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 7',
  //     category:'ce',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 7',
  //     category:'ce',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 7',
  //     category:'ce',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 7',
  //     category:'ce',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'c',
  //     date: '06-08-2020',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'c',
  //     date: '06-08-2020',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'c',
  //     date: '06-08-2020',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'c',
  //     date: '06-08-2020',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '4 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: '',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '4 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: '',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: '',
  //     date: '06-08-2020',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     category: '',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '2 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: '',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' 3 و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: ' 3 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: '',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '4 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: '',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '5 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'm',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' حصل مجموعة من الطلاب على المركز الأول فى مسابقة عصير القصب ',
  //     link: ''
  //   },
  //   {
  //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'm',
  //     date: '06-08-2020',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     category: 'm',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '2 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'm',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' 3 و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: ' 3 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'm',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '4 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'n',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '5 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'n',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' حصل مجموعة من الطلاب على المركز الأول فى مسابقة عصير القصب ',
  //     link: ''
  //   },
  //   {
  //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'n',
  //     date: '06-08-2020',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     category: 'Ind',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '2 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'Ind',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' 3 و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: ' 3 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'Ind',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '4 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'Ind',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  //     link: ''
  //   },
  //   {
  //     title: '5 ندوة تعريفية بعنوان من اجل التوظيف',
  //     category: 'Ind',
  //     date: "06-08-2020",
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: ' حصل مجموعة من الطلاب على المركز الأول فى مسابقة عصير القصب ',
  //     link: ''
  //   },

  // ];

  currentPage = new Subject<number>();
  currentPageNumber:number|any = 1;
  constructor() { }

  getCards(){
    return this.cards.slice();
  }
  getCard(id:number){
    return this.cards[id];
  }
  getCardsLength(){
    return this.cards.length;
  }
  getallCards(){
    return this.allCards.slice();
  }
  getCardFromAllCards(id:number){
    return this.allCards[id];
  }
  getallCardsLength(){
    return this.allCards.length;
  }
}
