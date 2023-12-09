import { Component } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { User } from 'src/model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registeredUser: User;

  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.registeredUser = JSON.parse(localStorage.getItem("user"));
  }

  

  

  

  
}

