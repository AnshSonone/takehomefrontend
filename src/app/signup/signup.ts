import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { environment as environmentProd } from '../../environments/environment.prod';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.html',
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const signupData = this.signupForm.value;

      console.log('Sending to backend:', signupData); 

      this.http.post(`${environmentProd.apiUrl}/register`, signupData, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).subscribe({
        next: (res) => {
          console.log('Signup success:', res);
          alert('Signup successful!');
          this.signupForm.reset();
        },
        error: (err) => {
          console.error('Signup error:', err);
          alert(`Signup failed: ${err?.error?.detail || 'Server error'}`);
        }
      });
    }
  }
}

