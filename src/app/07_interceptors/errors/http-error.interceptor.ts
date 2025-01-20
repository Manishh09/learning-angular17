import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificationService } from '../../services/notification.service';
import { inject } from '@angular/core';

// interceptor to handle network errors
export const httpErrorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  
  // inject notification service

  const notificationService = inject(NotificationService);

  // handle http status code errors

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401:
           notificationService.showNotification('error', 'Authentication required');
          // Handle auth error
          break;
        case 403:
           notificationService.showNotification('error', 'Access denied');
          // Handle forbidden
          break;
        case 404:
          notificationService.showNotification('error', 'Resource not found');
          // Handle not found
          break;
        default:
           notificationService.showNotification('error', 'An error occurred');
      }
      return throwError(() => error);
    })

  );

};
