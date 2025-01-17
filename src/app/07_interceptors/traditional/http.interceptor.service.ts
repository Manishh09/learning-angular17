import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

 
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // clone the request and set the headers ..., etc

    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Token...`
      }
    })

    return next.handle(clonedReq)

  }
}
