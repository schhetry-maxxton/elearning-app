import { Injectable } from '@angular/core';
import { merncard } from './merncard';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerncardService {
  private cards: merncard[] = [
    {
      id: 1,
      imageUrl: '../Assets/images/MEAN/M.png',
      title: 'MongoDB: The NoSQL Database',
      text: 'A document-oriented NoSQL database.\nDesigned for high performance and scalability.\nIdeal for applications requiring flexible data models.The MongoDB Query API allows you to query deep into documents.'
    },
    {
      id: 2,
      imageUrl: '../Assets/images/MEAN/E.png',
      title: 'Express.js: Streamlined Web Framework',
      text: 'A minimal and flexible Node.js web application framework.\nProvides a robust set of features for building web and mobile applications.\nSimplifies development with middleware support and routing.'
    },
    {
      id: 3,
      imageUrl: '../Assets/images/MEAN/R.jpg',
      title: 'React: Building Interactive UIs',
      text: 'A JavaScript library for building user interfaces.\nDeveloped by Facebook, it enables component-based architecture.\nEfficiently updates and renders components with a virtual DOM,where we can observe One-Way Data Binding.'
    },
    {
      id: 4,
      imageUrl: '../Assets/images/MEAN/N.jpg',
      title: 'Node.js: Server-Side JavaScript',
      text: 'A runtime environment that allows JavaScript execution on the server side.\nBuilt on Chrome\'s V8 JavaScript engine.\nIdeal for building scalable network applications and APIs designed to build scalable applications.'
    }
  ];

  constructor() { }

  getCards(): Observable<merncard[]> {
    return of(this.cards);
  }
}
