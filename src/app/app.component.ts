import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productItems = [
    {
      id: 1,
      name: "Alcatel One",
      price: 3333,
      image: "http://placehold.it/250x250"
    },
    {
      id: 2,
      name: "Nokia 3310",
      price: 440,
      image: "http://placehold.it/250x250"
    }
  ];
}
