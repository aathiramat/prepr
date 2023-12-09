import { Component, ElementRef, Renderer2 } from '@angular/core';
import { faSearch, faX, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import * as fs from 'fs';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
interface Image {
  url: string;
}

interface SearchTag {
  id: number;
  text: string;
}

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {

  constructor(private http: HttpClient, private renderer: Renderer2, private el: ElementRef){}
  faSearch = faSearch;
  fax = faX;
  faRight = faChevronRight;
  selectedItems: any[] | undefined;
  dataArray?:SearchTag[] ;
  expClosed: boolean = false;
  isSelected: boolean ;
  selectedmenu: any;
  //= JSON.parse(fs.readFileSync('data.json', 'utf-8'))
    items: any[] | undefined;
    
    images: Image[] = [
      { url: '../assets/Splash_1.png' },
      { url: '../assets/Splash_2.png' },
      { url: '../assets/Splash_3.png' },
      // Add more image URLs as needed
    ];
    

    search($event) {
      console.log($event);
      this.items = this.dataArray?.filter(d => d.text.toLowerCase().indexOf($event.query.toLowerCase()) > -1);
      //  this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }

    ngOnInit() {
      this.http.get<any>('assets/data.json').subscribe(result => {
        this.dataArray =  result;
      },
      (err) => console.log(err))
    }

    ngAfterViewInit() {
      // Access the native element of the div
      this.selectedmenu = this.el.nativeElement.querySelector('#lab');
      // You can perform operations on this div element
    }

    closeExplore() {
      this.expClosed = true;
    }

    addClass(source) {
      console.log(source);
      // Get the native element of the component
      const element = this.el.nativeElement;
      this.renderer.removeClass(this.selectedmenu, 'selected_explore_component')
      this.selectedmenu = source;
      // Add the 'your-class' class to the element
      this.renderer.addClass(source, 'selected_explore_component');
    }
  }
