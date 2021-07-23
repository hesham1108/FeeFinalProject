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
import { ContactEmailComponent } from './components/dashboard/forms/contact-email/contact-email.component';
import { CouncilFormComponent } from './components/dashboard/forms/department-form/council-form/council-form.component';
import { DepartmentFormComponent } from './components/dashboard/forms/department-form/department-form.component';
import { LabsFormComponent } from './components/dashboard/forms/department-form/labs-form/labs-form.component';
import { EventFormComponent } from './components/dashboard/forms/event-form/event-form.component';
import { ExamFormComponent } from './components/dashboard/forms/exam-form/exam-form.component';
import { NewsFormComponent } from './components/dashboard/forms/news-form/news-form.component';
import { PrivilageFormComponent } from './components/dashboard/forms/privilage-form/privilage-form.component';
import { ResultFormComponent } from './components/dashboard/forms/result-form/result-form.component';
import { SubDependFormComponent } from './components/dashboard/forms/subject-form/sub-depend-form/sub-depend-form.component';
import { SubjectFormComponent } from './components/dashboard/forms/subject-form/subject-form.component';
import { TableFormComponent } from './components/dashboard/forms/table-form/table-form.component';
import { PostionFormComponent } from './components/dashboard/forms/user-form/postion-form/postion-form.component';
import { UserFormComponent } from './components/dashboard/forms/user-form/user-form.component';
import { AllPrivilagesComponent } from './components/dashboard/helpers/all-privilages/all-privilages.component';
import { CouncilTableComponent } from './components/dashboard/helpers/council-table/council-table.component';
import { DepartmentTableComponent } from './components/dashboard/helpers/department-table/department-table.component';
import { EventsTableComponent } from './components/dashboard/helpers/events-table/events-table.component';
import { ExamTableComponent } from './components/dashboard/helpers/exam-table/exam-table.component';
import { LabsTableComponent } from './components/dashboard/helpers/labs-table/labs-table.component';
import { NewsTableComponent } from './components/dashboard/helpers/news-table/news-table.component';
import { PostionTableComponent } from './components/dashboard/helpers/postion-table/postion-table.component';
import { SubDependTableComponent } from './components/dashboard/helpers/sub-depend-table/sub-depend-table.component';
import { SubjectTableComponent } from './components/dashboard/helpers/subject-table/subject-table.component';
import { TablesTableComponent } from './components/dashboard/helpers/tables-table/tables-table.component';
import { UsersTableComponent } from './components/dashboard/helpers/users-table/users-table.component';
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
import { DepResolver } from './services/departments/dep-resolver.service';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"search", component: SearchComponent},
  {path:'myprofile', component:MyProfileComponent},
  {path:"contactus", component: ContactUsComponent},

  // {path:'todeps/:id' , redirectTo:'departments/:id' , pathMatch:'full'},
  {path:'departments/:id',component: DepartmentsComponent,  children:[
    {path:'about/:id' , component:AboutDepartmentComponent },
    {path:'boss/:id' , component:BossOfDepartmentComponent},
    {path:'bossword/:id' , component:BosswordComponent},
    {path:'sight/:id' , component:SightOfDepartmentComponent},
    {path:'message/:id' , component:MessageOfDepartmentComponent},
    {path:'goal/:id' , component:GoalOfDepartmentComponent},
    {path:'staff/:id' , component:StaffComponent},
    {path:'subject/:id' , component:SubjectsComponent},
    {path:'labs/:id' , component:LabsOfDepartmentComponent},
    {path:'council/:id' , component:CouncilOfDepartmentComponent},
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
    {path: 'addUser' , component:UserFormComponent},
    {path: 'addUser/:id' , component:UserFormComponent},
    {path: 'addResult' , component:ResultFormComponent},
    {path: 'addResult/:id' , component:ResultFormComponent},
    {path: 'addLab' , component:LabsFormComponent},
    {path: 'addLab/:id' , component:LabsFormComponent},
    {path: 'addCouncil' , component:CouncilFormComponent},
    {path: 'addCouncil/:id' , component:CouncilFormComponent},
    {path: 'addSubDepend' , component:SubDependFormComponent},
    {path: 'addSubDepend/:sid/:did' , component:SubDependFormComponent},
    {path: 'addPostion' , component:PostionFormComponent},
    {path: 'addPostion/:id' , component:PostionFormComponent},
    {path: 'addTable' , component:TableFormComponent},
    {path: 'addTable/:id' , component:TableFormComponent},
    {path: 'addExam' , component:ExamFormComponent},
    {path: 'addExam/:id' , component:ExamFormComponent},
    {path: 'addPrivilage' , component:PrivilageFormComponent},
    {path: 'contact' , component:ContactEmailComponent},
  ]},
  {path:'newsTable' , component: NewsTableComponent},
  {path:'eventsTable' , component: EventsTableComponent},
  {path:'subjectsTable',component: SubjectTableComponent},
  {path:'departmentTable',component: DepartmentTableComponent},
  {path:'usersTable',component:UsersTableComponent},
  {path:'allPrivilages',component:AllPrivilagesComponent},
  {path:'labsTable',component:LabsTableComponent},
  {path:'councilTable',component:CouncilTableComponent},
  {path:'subDependTable',component:SubDependTableComponent},
  {path:'postionTable', component:PostionTableComponent},
  {path:'Tables', component:TablesTableComponent},
  {path:'examTable' , component: ExamTableComponent},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
