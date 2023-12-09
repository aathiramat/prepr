import { Component } from '@angular/core';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.css']
})
export class AccessibilityComponent {
  top = '185px'
  left = '600px';
  width = '900px';
  height = '700px'
  marginStyle = {
    'margin-top': this.top,
    'margin-left': this.left
}
}
