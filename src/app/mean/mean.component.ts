import { Component,OnInit  } from '@angular/core';
import { meancard } from '../meancard';
import { MeancardService } from '../meancard.service';
import { AxiosService } from '../axios.service';
import { ICourses } from '../../ICourses';


@Component({
  selector: 'app-mean',
  templateUrl: './mean.component.html',
  styleUrl: './mean.component.css'
})
export class MeanComponent {
  cards: meancard[] = [];
  courses: ICourses[]=[];
  constructor(private meancardService: MeancardService, private axiosService:AxiosService){ }

  ngOnInit(): void {
    this.meancardService.getCards().subscribe((data: meancard[]) => {
      this.cards = data;
    });

    this.axiosService.getCourses()
    .then(response => {
      this.courses = response.data;})
      .catch(error => {
        console.log(error);
      });
}
}
