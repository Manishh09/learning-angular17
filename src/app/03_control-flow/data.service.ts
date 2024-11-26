import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiService, User } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
 #apiService = inject(ApiService)

  #http = inject(HttpClient)
  #url = 'https://jsonplaceholder.typicode.com'

  getUsers() {
    return this.#http.get(`${this.#url}/users`)
  }

  getPosts() {
    return this.#http.get(`${this.#url}/posts`)
  }

   

  getUserGen(): Observable<User> {
    return this.#apiService.get<User>('users')
  }

}
