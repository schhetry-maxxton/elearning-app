import { Component } from '@angular/core';
import { merncard } from '../merncard';
import { MerncardService } from '../merncard.service';
import { ICourses } from '../../ICourses';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-mern',
  templateUrl: './mern.component.html',
  styleUrl: './mern.component.css'
})
export class MernComponent {
  cards: merncard[] = [];
  courses: ICourses[]=[];
  constructor(private meancardService: MerncardService, private axiosService:AxiosService){ }

  ngOnInit(): void {
    this.meancardService.getCards().subscribe((data: merncard[]) => {
      this.cards = data;
    });
    
    this.axiosService.getMERN()
    .then(response => {
      this.courses = response.data;})
      .catch(error => {
        console.log(error);
      });
    }
}
