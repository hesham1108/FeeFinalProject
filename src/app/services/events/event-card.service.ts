import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventCardService {

  currentPage = new Subject<number>();
  currentPageNumber: number = 1;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  });
  private baseUrl = 'http://ahmed1500019-001-site1.dtempurl.com/api/Events';
  load = new Subject<boolean>();
  constructor( private http: HttpClient) { }
  getAllEvents():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  getEventFromAllEvents(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  postEvent(obj:{id?:number , title:string ,  imagePath:string , description:string}|Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`,obj, { headers: this.headers });
  }
  putEvent(obj:{id?:number,title:string ,  imagePath:string , description:string}|Object):Observable<Object>{
   return this.http.put(`${this.baseUrl}`, obj, { headers: this.headers });
  }
  deleteEvent(id:number):Observable<any> {

    return this.http.delete(`${this.baseUrl}/${id}`, { headers: this.headers });
  }


  // events:Events[] = [
  //   new Events(
  //     'هشام',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     ''
  //   ),
  //   new Events(
  //     'هشام',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     ''
  //   ),
  //   new Events(
  //     'هشام',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     ''
  //   ),
  //   new Events(
  //     'هشام',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     ''
  //   ),
  //   new Events(
  //     'هشام',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     ''
  //   ),
  //   new Events(
  //     'هشام',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     ''
  //   ),
  // ];
  // allEvents:Events[]=[
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  //   new Events(
  //     'النظامى',
  //     'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا',
  //     ''
  //   ),
  // ];
  // events =  [
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },

  // ] ;
  // allEvents =  [
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هشام',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرااليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'النظامى',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  //   {
  //     title: 'هدير',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //     desc: 'اليوم سوف نقوم بالتحقيق فى تلك القضية عن كثب من قبل فريق عمل مدرب على هذا الخرا ',
  //     link: ''
  //   },
  // ] ;
  // getHomeEvents(){
  // var firstThreeEvents: Event[]|any = [];
  // this.getAllEvents().subscribe(
  //   (res)=>{
  //     for(let i = 0 ; i<3 ; i++){
  //       firstThreeEvents.push(res[i]);
  //     }
  //   }
  // );
  // return firstThreeEvents;
  // }

}
