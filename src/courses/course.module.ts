import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StartComponent } from 'src/stars/star.component';
import { ReplacePipe } from '../pipes/replace.pipe';
import { CourseInfosComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';

@NgModule({
    declarations:[
        CourseListComponent,
        CourseInfosComponent,
        ReplacePipe,
        StartComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { 
                path:'courses', component : CourseListComponent 
            },
            { 
                path:'courses/info/:id', component : CourseInfosComponent 
            },
            ])
    ]
})
export class CourseModule { }