import { Component } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.css'
})
export class AboutCardComponent {
  appList: any[] = [ {
    "ID": "1",
    "url": '../Assets/images/react.png'
  },
  {
    "ID": "2",
    "url": '../Assets/images/javascript.png'
  },
  // {
  //   "ID": "3",
  //   "url": '../Assets/Images/realistic-horse-beach.jpg'
  // },
  // {
  //   "ID": "4",
  //   "url": '../Assets/Images/running-stallion-meadow-capturing-beauty-nature-generated-by-artificial-intelligence.jpg'
  // }];
  ];
}
