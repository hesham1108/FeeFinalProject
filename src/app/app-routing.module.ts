import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { EventComponent } from './components/all-events/event/event.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { NewsComponent } from './components/all-news/news/news.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentFormComponent } from './components/dashboard/forms/department-form/department-form.component';
import { EventFormComponent } from './components/dashboard/forms/event-form/event-form.component';
import { NewsFormComponent } from './components/dashboard/forms/news-form/news-form.component';
import { SubjectFormComponent } from './components/dashboard/forms/subject-form/subject-form.component';
import { DepartmentTableComponent } from './components/dashboard/helpers/department-table/department-table.component';
import { EventsTableComponent } from './components/dashboard/helpers/events-table/events-table.component';
import { NewsTableComponent } from './components/dashboard/helpers/news-table/news-table.component';
import { SubjectTableComponent } from './components/dashboard/helpers/subject-table/subject-table.component';
import { AboutDepartmentComponent } from './components/departments/dep-comps/about-department/about-department.component';
import { BossOfDepartmentComponent } from './components/departments/dep-comps/boss-of-department/boss-of-department.component';
import { BosswordComponent } from './components/departments/dep-comps/bossword/bossword.component';
import { CouncilOfDepartmentComponent } from './components/departments/dep-comps/council-of-department/council-of-department.component';
import { GoalOfDepartmentComponent } from './components/departments/dep-comps/goal-of-department/goal-of-department.component';
import { LabsOfDepartmentComponent } from './components/departments/dep-comps/labs-of-department/labs-of-department.component';
import { MessageOfDepartmentComponent } from './components/departments/dep-comps/message-of-department/message-of-department.component';
import { SightOfDepartmentComponent } from './components/departments/dep-comps/sight-of-department/sight-of-department.component';
import { StaffComponent } from './components/departments/dep-comps/staff/staff.component';
import { SubjectsComponent } from './components/departments/dep-comps/subjects/subjects.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MyProfileComponent } from './components/profiles/my-profile/my-profile.component';
import { ProfComponent } from './components/profiles/prof/prof.component';
import { SearchComponent } from './components/search/search.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"search", component: SearchComponent},
  {path:'newsTable' , component: NewsTableComponent},
  {path:'eventsTable' , component: EventsTableComponent},
  {path:'subjectsTable',component: SubjectTableComponent},
  {path:'departmentTable',component: DepartmentTableComponent},
  {path:'myprofile', component:MyProfileComponent},
  {path:"contactus", component: ContactUsComponent},
  {path:'departments/:id',component: DepartmentsComponent,children:[
    {path:'about' , component:AboutDepartmentComponent},
    {path:'boss' , component:BossOfDepartmentComponent},
    {path:'bossword' , component:BosswordComponent},
    {path:'sight' , component:SightOfDepartmentComponent},
    {path:'message' , component:MessageOfDepartmentComponent},
    {path:'goal' , component:GoalOfDepartmentComponent},
    {path:'staff' , component:StaffComponent},
    {path:'subject' , component:SubjectsComponent},
    {path:'labs' , component:LabsOfDepartmentComponent},
    {path:'council' , component:CouncilOfDepartmentComponent},
  ]},
  {path:"about", component:AboutComponent},
  {path:"prof/:id", component:ProfComponent},
  {path:"news", component:AllNewsComponent },
  {path:'news/:id' , component:NewsComponent },
  {path:"events", component:AllEventsComponent },
  {path:'events/:id' , component:EventComponent },
  {path:'loginForm' , component:LoginFormComponent},

  {path:"dash" , component:DashboardComponent , children:[
    {path: 'addNews' , component:NewsFormComponent},
    {path: 'addNews/:id' , component:NewsFormComponent},
    {path: 'addEvent' , component:EventFormComponent},
    {path: 'addEvent/:id' , component:EventFormComponent},
    {path: 'addSubject' , component:SubjectFormComponent},
    {path: 'addSubject/:id' , component:SubjectFormComponent},
    {path: 'addDepartment' , component:DepartmentFormComponent},
    {path: 'addDepartment/:id' , component:DepartmentFormComponent},
  ]},

  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
