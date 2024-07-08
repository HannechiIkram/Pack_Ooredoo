import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      data => {
        console.log('Login successful', data);
      },
      err => {
        console.error('Login failed', err);
      }
    );
  }
}
