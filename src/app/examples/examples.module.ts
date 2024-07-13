import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from 'app/app.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
    // ComponentsModule, // Only import if it's needed here
  ],
  declarations: [
    LandingComponent,
    SignupComponent,
    ProfileComponent,
  ]
})
export class ExamplesModule { }
