import { Component } from '@angular/core';
import { ICourses } from '../../ICourses';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-data-science',
  templateUrl: './data-science.component.html',
  styleUrl: './data-science.component.css'
})
export class DataScienceComponent {
  courses: ICourses[]=[];

  constructor(private axiosService:AxiosService){}

  ngOnInit(): void {

    this.axiosService.getDataScience()
    .then(response => {
      this.courses = response.data;})
      .catch(error => {
        console.log(error);
      });
}
}
