/*
Service is useful for placing reusable code throughout different components. The purpose of this specific data service is to communicate with our API.

https://angular.io/api/common/http/HttpClient
(Documentation includes methods for HTTP request)
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' // Performs HTTP requests. Only available in injectable class

@Injectable({
  providedIn: 'root'
  // Tells Angular that the root injector is responsible for creating an instance of the DataService and making it available across the application
})
export class DataService {

  constructor(private http: HttpClient) { } /*
  In order to use HttpClient, we need to create an instance of it through dependency injection within the constructor (https://angular.io/guide/dependency-injection)

  Dependency Injection - a way to create objects that depend upon other objects
  */

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}

// After you've made this data service, you need to import it into your app.ts
