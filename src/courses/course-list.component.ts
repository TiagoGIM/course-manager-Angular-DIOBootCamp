import {Component, OnInit} from '@angular/core';
import { Course } from './course';

@Component({
    selector :'app-course-list',
    templateUrl :'./course-list.component.html',
})

export class CourseListComponent implements OnInit {
    courses: Course[] = [];
    // metodo que  starta assim que o componente é iniciado
    ngOnInit(): void {
        this.courses = [
            {
                id: 12,
                name: 'curso 1',
                imgUrl: '',
                price : 12,
                code: 'xp2s',
                duration: 19,
                rating: 1,
                releaseDate:'december 1', 
            },
            {
                id: 15,
                name: 'curso 2',
                imgUrl: '',
                price : 19,
                code: 'xps',
                duration: 14,
                rating: 4,
                releaseDate: 'december 2', 
            },
        ]
    }
    //propriedade array do tipo Course.

}