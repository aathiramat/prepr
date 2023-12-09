import { Component } from '@angular/core';
import { faBell, faMessage, faCircleQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-top-nav-menu',
  templateUrl: './top-nav-menu.component.html',
  styleUrls: ['./top-nav-menu.component.css']
})
export class TopNavMenuComponent {
  faBell = faBell;
  faMessage = faMessage;
  faCircleQuestion = faCircleQuestion;
  faUser = faUser;
}
