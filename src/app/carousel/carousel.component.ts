import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
interface Image {
  url: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
 
})
export class CarouselComponent {
 // images = [ "../assets/Splash_1.png", "../assets/Splash_2.png", "../assets/Splash_3.png" ];
  images: Image[] = [
    { url: '../assets/Splash_1.png' },
    { url: '../assets/Splash_2.png' },
    { url: '../assets/Splash_3.png' },
    // Add more image URLs as needed
  ];
  activeSlideIndex = 0;
  constructor() { }

   ngOnInit(): void {
   }
 
}
