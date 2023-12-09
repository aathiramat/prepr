import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Language, User, UserType } from 'src/model/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  userModel = new User();
  text = "@#$%^&amp;*?_~-()+=[]{}|;:'“<>;/,.";

  getuserTypes(): string[] {
    return Object.values(UserType); // Get enum values as an array
  }

  getlanguages(): string[] {
    return Object.values(Language); // Get enum values as an array
  }

  constructor(private navRouter: Router){
    this.userModel.userType = "";
    this.userModel.language = "";
  }

  register(){
    localStorage.setItem("user", JSON.stringify(this.userModel));
    this.navRouter.navigateByUrl('');
  }


}
