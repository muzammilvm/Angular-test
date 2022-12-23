import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http:HttpClient) { }

  getAllDetails(){
    return this.http.get('https://dummyjson.com/users')
   }
}
