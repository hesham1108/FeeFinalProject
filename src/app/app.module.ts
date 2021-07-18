import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormTest } from './components/test/form.components.ts/form-test.component';
import { HeaderComponent } from './components/header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
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
import { EventFormComponent } from './components/dashboard/forms/event-form/event-form.component';
import { SearchComponent } from './components/search/search.component';
import { NewsTableComponent } from './components/dashboard/helpers/news-table/news-table.component';
import { LoaderComponent } from './components/loader/loader.component';
import { EventsTableComponent } from './components/dashboard/helpers/events-table/events-table.component';


//filter
import {FilterPipe} from './components/search/filter.pipe';
import { ConfirmDeletionComponent } from './components/dashboard/helpers/confirm-deletion/confirm-deletion.component';
import { SubjectFormComponent } from './components/dashboard/forms/subject-form/subject-form.component';
import { SubjectTableComponent } from './components/dashboard/helpers/subject-table/subject-table.component';
import { DepartmentTableComponent } from './components/dashboard/helpers/department-table/department-table.component';
import { DepartmentFormComponent } from './components/dashboard/forms/department-form/department-form.component';
import { AboutDepartmentComponent } from './components/departments/dep-comps/about-department/about-department.component';
import { BossOfDepartmentComponent } from './components/departments/dep-comps/boss-of-department/boss-of-department.component';
import { BosswordComponent } from './components/departments/dep-comps/bossword/bossword.component';
import { SightOfDepartmentComponent } from './components/departments/dep-comps/sight-of-department/sight-of-department.component';
import { MessageOfDepartmentComponent } from './components/departments/dep-comps/message-of-department/message-of-department.component';
import { GoalOfDepartmentComponent } from './components/departments/dep-comps/goal-of-department/goal-of-department.component';
import { LabsOfDepartmentComponent } from './components/departments/dep-comps/labs-of-department/labs-of-department.component';
import { CouncilOfDepartmentComponent } from './components/departments/dep-comps/council-of-department/council-of-department.component';
import { SubjectCardComponent } from './components/subject/subject-card/subject-card.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MyProfileComponent } from './components/profiles/my-profile/my-profile.component';
import { ProfileService } from './services/profile/profile.service';
import { FillerComponent } from './components/filler/filler.component';
import { UserFormComponent } from './components/dashboard/forms/user-form/user-form.component';
import { ResultFormComponent } from './components/dashboard/forms/result-form/result-form.component';
import { UsersTableComponent } from './components/dashboard/helpers/users-table/users-table.component';
import { AllPrivilagesComponent } from './components/dashboard/helpers/all-privilages/all-privilages.component';
import { LabsFormComponent } from './components/dashboard/forms/department-form/labs-form/labs-form.component';
import { CouncilFormComponent } from './components/dashboard/forms/department-form/council-form/council-form.component';
import { CouncilTableComponent } from './components/dashboard/helpers/council-table/council-table.component';
import { LabsTableComponent } from './components/dashboard/helpers/labs-table/labs-table.component';
import { SubDependFormComponent } from './components/dashboard/forms/subject-form/sub-depend-form/sub-depend-form.component';
import { SubDependTableComponent } from './components/dashboard/helpers/sub-depend-table/sub-depend-table.component';
import { PostionTableComponent } from './components/dashboard/helpers/postion-table/postion-table.component';
import { PostionFormComponent } from './components/dashboard/forms/user-form/postion-form/postion-form.component';
import { TableFormComponent } from './components/dashboard/forms/table-form/table-form.component';
import { TablesTableComponent } from './components/dashboard/helpers/tables-table/tables-table.component';

//PrimeNg
// multiselecting drop-down
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ExamTableComponent } from './components/dashboard/helpers/exam-table/exam-table.component';
import { ExamFormComponent } from './components/dashboard/forms/exam-form/exam-form.component';


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
    EventFormComponent,
    SearchComponent,
    NewsTableComponent,
    LoaderComponent,
    EventsTableComponent,
    FilterPipe,
    ConfirmDeletionComponent,
    SubjectFormComponent,
    SubjectTableComponent,
    DepartmentTableComponent,
    DepartmentFormComponent,
    AboutDepartmentComponent,
    BossOfDepartmentComponent,
    BosswordComponent,
    SightOfDepartmentComponent,
    MessageOfDepartmentComponent,
    GoalOfDepartmentComponent,
    LabsOfDepartmentComponent,
    CouncilOfDepartmentComponent,
    SubjectCardComponent,
    ContactUsComponent,
    MyProfileComponent,
    FillerComponent,
    UserFormComponent,
    ResultFormComponent,
    UsersTableComponent,
    AllPrivilagesComponent,
    LabsFormComponent,
    CouncilFormComponent,
    CouncilTableComponent,
    LabsTableComponent,
    SubDependFormComponent,
    SubDependTableComponent,
    PostionTableComponent,
    PostionFormComponent,
    TableFormComponent,
    TablesTableComponent,
    ExamTableComponent,
    ExamFormComponent


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
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()




  ],
  exports: [],
  providers: [ProfService , ProfileService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
