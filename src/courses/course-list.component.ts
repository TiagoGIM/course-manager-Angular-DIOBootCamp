import {Component, OnInit} from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';



@Component({
    selector :'app-course-list',
    templateUrl :'./course-list.component.html',
})

export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy :string;
    // A maneira que o Angula faz a injeção é atraves de construtores.
    constructor(private courseService:  CourseService){ }
    // metodo que  starta assim que o componente é iniciado
    ngOnInit(): void {
        this._courses = this.courseService.retriveAll();
        this.filteredCourses = this.courseService.retriveAll();
    }
    //vamos usar o get e o set para acessar o input forms e fazer pesquisas rapidas.
    set filter( value : string) {
        this._filterBy = value;
        //ao fazer qualquer pesquisa ele ja ira procurar com as letras iniciais. por isso o  "> 1" 
        this.filteredCourses = this._courses.filter(
            (course : Course ) => course.name
            .toLocaleLowerCase()
                .indexOf(this._filterBy
                    .toLocaleLowerCase()) > -1);
    }
    get filter() {
        return this._filterBy;
    }
}