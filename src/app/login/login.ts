import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email') ?? new FormControl('');
  }

  get password() {
    return this.loginForm.get('password') ?? new FormControl('');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.http.post(`${environment.apiUrl}/api/login`, loginData).subscribe({
        next: (res: any) => {
          this.successMessage = res.message;
          this.errorMessage = '';
          this.loginForm.reset();
          this.router.navigate(['/'])
        },
        error: (err) => {
          this.errorMessage = err.error.detail || 'Login failed';
          this.successMessage = '';
        },
      });
    }
  }
}
