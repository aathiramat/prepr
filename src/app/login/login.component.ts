import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { User } from 'src/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId: string = "";
  password: string = "";
  registeredUser: User;
  socialUser?: SocialUser;
  loggedIn?: boolean;

  constructor(private navRouter: Router, private authService: SocialAuthService) { }

  ngOnInit() {
    this.socialUser = JSON.parse(localStorage.getItem("socialUser"));
    this.registeredUser = JSON.parse(localStorage.getItem("user"));
    // if (this.socialUser) {
    //   this.loggedIn = true;
    //   this.navRouter.navigateByUrl('/landing');
    // }
    this.authService.authState.subscribe((user) => {
      this.socialUser = user;
      localStorage.setItem("socialUser", JSON.stringify(this.socialUser));
      if (user != null) {
        this.loggedIn = true;
        this.navRouter.navigateByUrl('/landing2');
      }
    });
  }

  login() {
    if (this.registeredUser && (this.registeredUser.username === this.userId && this.registeredUser.password === this.password)) {
      localStorage.setItem("user", JSON.stringify(this.registeredUser));
      this.navRouter.navigateByUrl('/landing2');
    } else {
      alert('Login Failed');
      // this.userId = this.password = "";
    }
  }

  scrollToTop(): void {
    // Scroll to the top of the window
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
