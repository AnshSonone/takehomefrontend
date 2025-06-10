import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { CourseService, Course } from '../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
})
export class HomeComponent implements OnInit {
  
    courses = signal<Course[]>([])

    constructor( private courseService:CourseService){}

    ngOnInit(): void {
      this.courseService.getCourses().subscribe((courseList) => {
        this.courses.set(Array.isArray(courseList) ? courseList : courseList.courses)
      })
    }

  
}