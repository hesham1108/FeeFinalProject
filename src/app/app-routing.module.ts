import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { EventComponent } from './components/all-events/event/event.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { NewsComponent } from './components/all-news/news/news.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsFormComponent } from './components/dashboard/forms/news-form/news-form.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfComponent } from './components/profiles/prof/prof.component';
import { FormTest } from './components/test/form.components.ts/form-test.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"dash" , component:DashboardComponent , children:[
    {path: 'add' , component:NewsFormComponent}
  ]},
  {path:"about", component:AboutComponent},
  {path:"prof/:id", component:ProfComponent},
  {path:"news", component:AllNewsComponent },
  {path:'news/:id' , component:NewsComponent },
  {path:"events", component:AllEventsComponent },
  {path:'events/:id' , component:EventComponent },
  {path:'loginForm' , component:LoginFormComponent},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
