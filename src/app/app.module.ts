import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFound } from './pageNotFound/404.component';
import { CourseModule } from 'src/courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFound,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo : 'courses', pathMatch :'full'
      },
      { 
        path:'**',component : PageNotFound 
      }

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
