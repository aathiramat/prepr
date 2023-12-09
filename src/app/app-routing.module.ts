import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProgressComponent } from './dashboard/progress/progress.component';
import { authGuard } from './shared/auth.guard';
import { Landing2Component } from './landing2/landing2.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: SignUpComponent }
    ]
  },
  {path:'landing',component: LandingComponent, canActivate: [authGuard]},
  {path:'dashboard',component: ProgressComponent, canActivate: [authGuard]},
  {path:'landing2',component: Landing2Component, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
