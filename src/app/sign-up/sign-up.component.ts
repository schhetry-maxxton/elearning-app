import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUPComponent {
 
   public user!: User; // our model

  // public user: User = {
  //   fname: '',
  //   lname: '',
  //   gender: '',
  //   email: '',
  //   password: '',
  //   confirmpassword: ''
  // };
  constructor(private http: HttpClient){}

  ngOnInit() { // we will initialize our form here
    this.user = {
      fname: '',
      lname: '',
      gender:'',
      email: '',
      password: '',
      confirmpassword:''
    };
  }

  private apiUrl = 'http://localhost:4000/postUsers'; 

   onSubmit(signupForm: NgForm) {
    if (signupForm.valid) {
      console.log('Form Data:', signupForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm() {
    this.user = {
      fname: '',
      lname: '',
      gender: '',
      email: '',
      password: '',
      confirmpassword: ''
    };
    
  }

  save(model: User, isValid: boolean)
  {
    // check if model is valid// if valid, call API to save customer
    if (isValid) {
      // this.http.post('http://localhost:5000/register', model)
      //   .subscribe(response => {
      //     console.log(response);
      //   }, error => {
      //     console.error(error);
      //   });
      axios.post(this.apiUrl, this.user)
      .then(response => {
        // Handle successful response
        console.log('User created successfully:', response.data);
        alert('User created successfully!');
        // Reset the form data
        this.resetForm();
      })
      .catch(error => {
        // Handle error
        console.error('There was an error creating the user!', error);
        alert('There was an error creating the user.');
      });
    }
    console.log(model, isValid);
  } 
}
