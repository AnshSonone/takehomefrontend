import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Profile } from '../services/profile';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface Course {
  id: number;
  title: string;
  description: string;
  video_url: string;
  is_enrolled: boolean;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
})
export class ProfileComponent implements OnInit {
  profile = signal<Profile>({} as Profile);
  enrolledCourses = signal<Course[]>([]);

  constructor(
    private profileService: ProfileService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((profile) => {
      this.profile.set(profile.user);

      const userId = profile.user.id;

      this.http
        .get<Course[]>(`${environment.apiUrl}/api/courses/${userId}`)
        .subscribe((courses) => {
          this.enrolledCourses.set(courses);
        });
    });
  }
}
