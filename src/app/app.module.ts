// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { AcademicsComponent } from './academics/academics.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component'; // <-- Import

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AcademicsComponent,
    MainPageComponent,
    NavbarComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }