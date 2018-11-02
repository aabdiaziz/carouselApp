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
        {url: '/src/assets/images/image.jpeg'},
        {url: '/src/assets/images/image2.jpeg'},
        {url: '/src/assets/images/image3.jpeg'},
        {url: '/src/assets/images/image4.jpeg'},
        {url: '/src/assets/images/image5.jpeg'},
        {url: '/src/assets/images/image6.jpeg'},
        {url: '/src/assets/images/image.jpeg'},
        {url: '/src/assets/images/image2.jpeg'},
        {url: '/src/assets/images/image3.jpeg'},
        {url: '/src/assets/images/image4.jpeg'},
        {url: '/src/assets/images/image5.jpeg'},
        {url: 'assets/images/image6.jpeg'}
    ];
  }
}
