import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';  // Adicionei aqui
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CourseListComponent} from '../courses/course-list.component';
import { StartComponent } from 'src/stars/star.component';

import { ReplacePipe } from 'src/pipes/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { PageNotFound } from './pageNotFound/404.component';
import { CourseInfosComponent } from 'src/courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StartComponent,
    ReplacePipe, 
    NavBarComponent,
    PageNotFound,
    CourseInfosComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo : 'courses', pathMatch :'full'
      },
      { 
        path:'courses', component : CourseListComponent 
      },
      { 
        path:'courses/info/:id', component : CourseInfosComponent 
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
