import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Array<any> = [];

  constructor() {
    this.items = [
        {url: '/assets/images/image.jpeg'},
        {url: '/assets/images/image2.jpeg'},
        {url: '/assets/images/image3.jpg'},
        {url: '/assets/images/image4.jpg'},
        {url: '/assets/images/image5.jpg'},
        {url: '/assets/images/image6.jpg'}
    ];
  }
}
