import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  #http = inject(HttpClient)
  #url = 'https://jsonplaceholder.typicode.com'

  getUsers() {
    return this.#http.get(`${this.#url}/users`)
  }

  getPosts() {
    return this.#http.get(`${this.#url}/posts`)
  }
}
