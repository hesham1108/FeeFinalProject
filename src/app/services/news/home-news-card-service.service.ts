import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from './card.model';



@Injectable({
  providedIn: 'root'
})
export class HomeNewsCardServiceService  {

  // cards:Card[]=[
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     '    سيبنل مسيبنل سميبنل سميبنتل سميل لكم فى القصاص حياة يا أولى الألباب و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  // ]
  // allCards:Card[] = [
  //   new Card(
  //     'السيد العميد يقوم بمنح الطلاب 2000 جنيه',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' هذا العام يتميز بكل ما يحتويه الجمال والدلال '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  //   new Card(
  //     'ندوة تعريفية بعنوان من اجل التوظيف 1',
  //     'computer_scince',
  //     "06-08-2020",
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     ' و لكم فى القصاص حياة يا أولى الألباب '
  //   ),
  // ];
  // // cards   =  [
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  // //     cate,
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '2 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     cate,
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' 3 و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: ' 3 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     cate,
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '4 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     cate,
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '5 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     cate,
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' حصل مجموعة من الطلاب على المركز الأول فى مسابقة عصير القصب ',
  // //     l
  // //   },
  // //   {
  // //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     cate,
  // //     date: '06-08-2020',
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },

  // // ] ;

  // // allCards = [
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  // //     category:'computer_scince',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  // //     category:'computer_scince',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  // //     category:'computer_scince',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  // //     category:'computer_scince',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  // //     category:'computer_scince',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  // //     category:'computer_scince',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 7',
  // //     category:'ce',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 7',
  // //     category:'ce',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 7',
  // //     category:'ce',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 7',
  // //     category:'ce',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 7',
  // //     category:'ce',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'c',
  // //     date: '06-08-2020',
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'c',
  // //     date: '06-08-2020',
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'c',
  // //     date: '06-08-2020',
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'c',
  // //     date: '06-08-2020',
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '4 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     categ,
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '4 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     categ,
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     categ,
  // //     date: '06-08-2020',
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  // //     categ,
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '2 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     categ,
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' 3 و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: ' 3 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     categ,
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '4 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     categ,
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '5 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'm',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' حصل مجموعة من الطلاب على المركز الأول فى مسابقة عصير القصب ',
  // //     l
  // //   },
  // //   {
  // //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'm',
  // //     date: '06-08-2020',
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  // //     category: 'm',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '2 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'm',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' 3 و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: ' 3 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'm',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '4 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'n',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '5 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'n',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' حصل مجموعة من الطلاب على المركز الأول فى مسابقة عصير القصب ',
  // //     l
  // //   },
  // //   {
  // //     title: '6 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'n',
  // //     date: '06-08-2020',
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: 'ندوة تعريفية بعنوان من اجل التوظيف 1',
  // //     category: 'Ind',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '2 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'Ind',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' 3 و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: ' 3 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'Ind',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '4 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'Ind',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' و لكم فى القصاص حياة يا أولى الألباب ',
  // //     l
  // //   },
  // //   {
  // //     title: '5 ندوة تعريفية بعنوان من اجل التوظيف',
  // //     category: 'Ind',
  // //     date: "06-08-2020",
  // //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  // //     desc: ' حصل مجموعة من الطلاب على المركز الأول فى مسابقة عصير القصب ',
  // //     l
  // //   },

  // // ];

  allCards:Card[] = [];
  currentPage = new Subject<number>();
  currentPageNumber:number|any = 1;
  constructor(private http:HttpClient) { }



  // fetchNews(){
    // this.http.get<Card[]>('http://ahmed1500019-001-site1.dtempurl.com/api/News')
    // .subscribe(
    //  (news)=>{
    //     console.log(news);
    //   }
    // );


  fetchData(){
    const tempArray = [];
    this.http.get<Card[]>('http://ahmed1500019-001-site1.dtempurl.com/api/News')
    .subscribe(
     (data:Card[])=> {
      for(let i in data){
        if(data.hasOwnProperty(i)){
          this.allCards.push(data[i]);
        }
    }
      }
    );
  }


  // getCards(){
  //   return this.cards.slice();
  // }
  // getCard(id:number){
  //   return this.cards[id];
  // }
  // getCardsLength(){
  //   return this.cards.length;
  // }
  getallCards(){
    return this.allCards;
  }

  getCardFromAllCards(id:number){
    return this.allCards[id];
  }
  getallCardsLength(){
    return this.allCards.length;
  }

  // addNews(card: Card){
  //   this.allCards.push(card);
  // }
}
