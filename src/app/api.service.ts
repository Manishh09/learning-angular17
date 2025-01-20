
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  #apiURL = 'https://jsonplaceholder.typicode.com';

  private readonly http = inject(HttpClient);

  get<T>(url?: string): Observable<T> {
    return this.http.get<T>(`${this.#apiURL}/${url}`)
  }

  post<T>(data: any): Observable<T> {
    return this.http.post<T>(this.#apiURL, data)
  }

  put<T>(data: any): Observable<T> {
    return this.http.put<T>(this.#apiURL, data)
  }

  delete<T>(): Observable<T> {
    return this.http.delete<T>(this.#apiURL)
  }

  /**
   * Handles HTTP errors by creating an error message and returning an observable that throws the error.
   *
   * @param {HttpErrorResponse} err - The HTTP error response object.
   * @returns {Observable<never>} An observable that throws an error with the error message.
   * Observable<never> - its an observable that emits no items to the Observer and never completes
   */
  handleError(err: HttpErrorResponse): Observable<never> {
    const errorMessage = `An error occurred: ${err.message}`;
    return throwError(() => errorMessage);
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
