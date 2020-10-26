import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl :'./course-info.component.html',
})
export class CourseInfosComponent implements OnInit {
    //courseId : number;
    course : Course;
    //injeção de dependencia para pegar a rota
    constructor(private activatedRoute : ActivatedRoute , private courseService: CourseService) {}

    ngOnInit() : void {
        //this.courseId = (+this.activatedRoute.snapshot.paramMap.get('id'));
        this.course = this.courseService.retriveById(+this.activatedRoute.snapshot.paramMap.get('id'));

    }
    save() : void {
        this.courseService.save(this.course);
    }
    
}