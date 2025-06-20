import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as environmentProd } from '../../environments/environment.prod';

 export interface Profile {
  id: number;
  username: string;
  email: string;
  enrolledCourses: string[];
 }

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  http = inject(HttpClient)
  getProfile() {
    const API_URL = `${environmentProd.apiUrl}/api/user`;
     return this.http.get<{user: Profile}>(API_URL)
  }

  getCourseById(courseId: Number) {
    const API_URL = `${environmentProd.apiUrl}/api/courses/${courseId}`;
    return this.http.get<{ course: any }>(API_URL);
  }  

  constructor() { }
}


