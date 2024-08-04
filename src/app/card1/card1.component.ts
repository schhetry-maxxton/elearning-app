import { Component } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.css'
})
export class Card1Component {
  appList: any[] = [{
    "ID": "1",
    "url": '../Assets/images/MEAN/mongoDB.jpg'
  },
  {
    "ID": "2",
    "url": '../Assets/images/MEAN/mongoDB.jpg'
  },
  {
    "ID": "3",
    "url": '../Assets/Images/realistic-horse-beach.jpg'
  },
  {
    "ID": "4",
    "url": '../Assets/Images/running-stallion-meadow-capturing-beauty-nature-generated-by-artificial-intelligence.jpg'
  }];
}
