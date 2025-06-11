import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { environment as environmentProd } from '../../environments/environment.prod';

export interface Course {
  id: number;
  title: string;
  description: string;
  isEnrolled: boolean;
  // video_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  http = inject(HttpClient)
  getCourses() {
    const API_URL = `${environmentProd.apiUrl}/api/courses`;
     return this.http.get<{courses: Course[]}>(API_URL)
  }
  
}