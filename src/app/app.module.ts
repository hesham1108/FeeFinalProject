import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormTest } from './components/test/form.components.ts/form-test.component';
import { HeaderComponent } from './components/header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// For MDB Angular Free
import { CarouselModule, WavesModule , CardsModule  } from 'angular-bootstrap-md';
import { AboutComponent } from './components/about/about.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RightNavComponent } from './components/header/right-nav/right-nav.component';
import { LeftNavComponent } from './components/header/left-nav/left-nav.component';
import { HomeComponent } from './components/home/home.component';
import { HomeNewsCardComponent } from './components/home/home-news-card/home-news-card.component';
import { HomeEventsCardComponent } from './components/home/home-events-card/home-events-card.component';
import { HomeStatisticsComponent } from './components/home/home-statistics/home-statistics.component';
import { HomeCoverComponent } from './components/home/home-cover/home-cover.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { CardComponent } from './components/home/home-news-card/card/card.component';
import { NewsComponent } from './components/all-news/news/news.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { EventComponent } from './components/all-events/event/event.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SingleEventComponent } from './components/home/home-events-card/single-event/single-event.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';

import { AboutTabsComponent } from './components/about/children/about-tabs/about-tabs.component';
import { DiplayContentComponent } from './components/about/children/diplay-content/diplay-content.component';
import { HeadDepartmentComponent } from './components/departments/helper/head-department/head-department.component';
import { DisplayDepContentComponent } from './components/departments/helper/display-dep-content/display-dep-content.component';
import { StaffComponent } from './components/departments/dep-comps/staff/staff.component';
import { SubjectsComponent } from './components/departments/dep-comps/subjects/subjects.component';
import { DepTableComponent } from './components/departments/dep-comps/tables/dep-table/dep-table.component';
import { TablesComponent } from './components/departments/dep-comps/tables/tables.component';
import { ProfComponent } from './components/profiles/prof/prof.component';
import { ProfProfileCardComponent } from './components/profiles/prof-profile-card/prof-profile-card.component';


// services
import { ProfService } from './services/prof/prof-service.service';
import { LoginServiceService } from './services/login/login-service.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsFormComponent } from './components/dashboard/forms/news-form/news-form.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormTest,
    HeaderComponent,
    AboutComponent,
    DepartmentsComponent,
    NotFoundComponent,
    RightNavComponent,
    LeftNavComponent,
    HomeComponent,
    HomeNewsCardComponent,
    HomeEventsCardComponent,
    HomeStatisticsComponent,
    HomeCoverComponent,
    FooterComponent,
    AllNewsComponent,
    CardComponent,
    NewsComponent,
    AllEventsComponent,
    EventComponent,
    PaginationComponent,
    SingleEventComponent,
    MainHeaderComponent,

    AboutTabsComponent,
    DiplayContentComponent,
    HeadDepartmentComponent,
    DisplayDepContentComponent,
    StaffComponent,
    SubjectsComponent,
    DepTableComponent,
    TablesComponent,
    ProfComponent,
    ProfProfileCardComponent,
    DashboardComponent,
    NewsFormComponent,
    LoginFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    WavesModule,
    CardsModule,
  ],
  exports: [

  ],
  providers: [ProfService , LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
