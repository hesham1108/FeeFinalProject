import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  url: string|any;
  links: {title:string , link: string}[]=[
    {
      title: 'الصفحة الرئيسية',
      link: 'home'
    },
    {
      title: 'الأقسام',
      link: ''
    },
    {
      title: 'التسجيل',
      link: 'loginForm'
    },
    {
      title: 'الأخبار',
      link: 'news'
    },
    {
      title: 'ألأحداث',
      link: 'events'
    },
    {
      title: 'عن الكلية',
      link: 'about'
    },

]
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url;
  }

  goTo(dest: string){
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest]);
  }
}
