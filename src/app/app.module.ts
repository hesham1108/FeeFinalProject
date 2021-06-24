import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponentComponent } from './components/test/side-bar-component/side-bar-component.component';
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
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponentComponent,
    HeaderComponent,
    AboutComponent,
    DepartmentsComponent,
    NotFoundComponent,
    RightNavComponent,
    LeftNavComponent,
    HomeComponent,
    HomeNewsCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    WavesModule,
    CardsModule,
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
