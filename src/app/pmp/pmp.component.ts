import { Component } from '@angular/core';
import { ICourses } from '../../ICourses';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-pmp',
  templateUrl: './pmp.component.html',
  styleUrl: './pmp.component.css'
})
export class PmpComponent {
  courses: ICourses[]=[];
  constructor(private axiosService:AxiosService){ }

  ngOnInit(): void {
    this.axiosService.getPMP()
    .then(response => {
      this.courses = response.data;})
      .catch(error => {
        console.log(error);
      });
    }
}
