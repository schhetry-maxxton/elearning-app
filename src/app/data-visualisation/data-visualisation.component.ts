import { Component } from '@angular/core';
import { ICourses } from '../../ICourses';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-data-visualisation',
  templateUrl: './data-visualisation.component.html',
  styleUrl: './data-visualisation.component.css'
})
export class DataVisualisationComponent {
  courses: ICourses[]=[];

  constructor(private axiosService:AxiosService){}

  ngOnInit(): void {

    this.axiosService.getDataAnalysis()
    .then(response => {
      this.courses = response.data;})
      .catch(error => {
        console.log(error);
      });
}
}
