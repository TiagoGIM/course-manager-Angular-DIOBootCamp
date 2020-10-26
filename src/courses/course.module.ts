import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarModule } from 'src/shared/component/stars/star.module';
import { ReplacePipeModule } from 'src/shared/pipes/pipes/pipe.module';
import { CourseInfosComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';

@NgModule({
    declarations:[
        CourseListComponent,
        CourseInfosComponent,
        
    ],
    imports:[
        CommonModule,
        FormsModule,
        StarModule,
        ReplacePipeModule,
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