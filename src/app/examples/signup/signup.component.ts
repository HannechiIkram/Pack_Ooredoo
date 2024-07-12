// src/app/examples/signup/signup.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/auth.service';
import { Router } from '@angular/router'; // Import Router
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  test: Date = new Date();
 focus;
  focus1;
 focus3;
 focus2;
  signupForm: FormGroup;
  roles: any[];

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      address: ['', Validators.required] 

    });
  }

  ngOnInit(): void {
    this.authService.getRoles().subscribe(data => {
      this.roles = data;
    });
  }

 
onSubmit(): void {
  if (this.signupForm.valid) {
    const user = {
      name: this.signupForm.value.name,
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    };
    const role = this.signupForm.value.role;
    this.authService.signup(user, role).subscribe(response => {
      console.log('Signup successful', response);
      alert('Sign up successfully!'); // Show alert
      this.router.navigate(['/home']); // Redirect to home page
    }, error => {
      console.error('Signup failed', error);
      alert('Signup failed, please try again.'); // Show error alert
    });
  }}
}