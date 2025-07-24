import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';  // Import Routes
import { RouterModule } from '@angular/router'; // ✅ IMPORT THIS


import { MainPageComponent } from './main-page/main-page.component';
import { AcademicsComponent } from './academics/academics.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
export const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'academics',component: AcademicsComponent},
  { path: 'about-us',component: AboutUsComponent },
  { path: 'admissions',component: AdmissionsComponent},
  { path: 'contact-us',component: ContactUsComponent}
]
