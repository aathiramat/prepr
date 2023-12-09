import { Component } from '@angular/core';
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  faHeart = faHeart;
  faShare = faShare;
}
