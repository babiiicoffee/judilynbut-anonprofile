import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { Error404Component } from './pages/error404/error404.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: "hobbies",
    component: HobbiesComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: 'error404',
    component: Error404Component
  },
  {
    path: 'homepage',
    component : HomePageComponent
  },
  {
    path: '**',
    redirectTo: '/error404'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    ResumeComponent,
    HobbiesComponent,
    Error404Component,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    // MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
