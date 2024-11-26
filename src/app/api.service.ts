
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  #apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  get<T>(url?: string): Observable<T> {
    return this.http.get<T>(`${this.#apiURL}/${url}`);
  }

  post<T>(data: any): Observable<T> {
    return this.http.post<T>(this.#apiURL, data);
  }

  put<T>(data: any): Observable<T> {
    return this.http.put<T>(this.#apiURL, data);
  }

  delete<T>(): Observable<T> {
    return this.http.delete<T>(this.#apiURL);
  }
}
export type Root = User[]

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}
