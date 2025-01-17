import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * HTTP interceptor function that adds an Authorization header to the request.
 *
 * @param req - The outgoing HTTP request.
 * @param next - The next handler in the HTTP request pipeline.
 * @returns The handled HTTP request with the Authorization header set.
 */
export const httpInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn):  Observable<HttpEvent<unknown>> => {

  const clonedReq = req.clone({
    
    setHeaders: {
      Authorization: 'Bearer token' // get from api
    }

  })


  return next(clonedReq);
};
