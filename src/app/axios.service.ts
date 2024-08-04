import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor(private http:HttpClient) { }

  getFullData(){
    return axios.get(`http://localhost:3000/users`);
  }

  createUser(){
    return axios.post(`http://localhost:3000/postUsers`);
  }
  getCourses(){
    return axios.get(`https://dummyjson.com/c/f6b7-57f2-49f8-b54d`);
  }

  getDataScience(){
    return axios.get(`https://dummyjson.com/c/f2e7-d6e7-487d-9af2`);
  }

  getMERN(){
    return axios.get(`https://dummyjson.com/c/8cc2-1ea4-4dd4-bd7a`);
  }

  getPMP(){
    return axios.get(`https://dummyjson.com/c/4147-2479-4cbc-a0e9`);
  }

  getDataAnalysis(){
    return axios.get(`https://dummyjson.com/c/eb52-a9b7-4fa3-8445`);
  }

}
