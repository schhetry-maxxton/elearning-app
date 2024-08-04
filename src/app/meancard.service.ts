import { Injectable } from '@angular/core';
import { meancard } from './meancard';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeancardService {
  private cards: meancard[] = [
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
      imageUrl: '../Assets/images/MEAN/A.jpg',
      title: 'Angular: A Comprehensive Framework for Building Web Apps',
      text: 'A powerful platform and framework for building single-page applications.\nDeveloped and maintained by Google, it offers a robust set of tools.\nFeatures two-way data binding, dependency injection, and modular architecture.'
    },
    {
      id: 4,
      imageUrl: '../Assets/images/MEAN/N.jpg',
      title: 'Node.js: Server-Side JavaScript',
      text: 'A runtime environment that allows JavaScript execution on the server side.\nBuilt on Chrome\'s V8 JavaScript engine.\nIdeal for building scalable network applications and APIs designed to build scalable applications.'
    }
  ];

  constructor() { }

  getCards(): Observable<meancard[]> {
    return of(this.cards);
  }
}
