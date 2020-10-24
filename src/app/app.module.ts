import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CourseListComponent} from '../courses/course-list.component';
import { StartComponent } from 'src/stars/star.component';
import { FormsModule }   from '@angular/forms';  // Adicionei aqui
import { ReplacePipe } from 'src/pipes/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StartComponent,
    ReplacePipe,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
